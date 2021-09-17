import React, { useState } from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Paper from "../../components/Paper";
import AppContainer from "../../components/AppContainer";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Overlay,
  OverlayData,
  OverlayType,
  Picture,
  User,
} from "../../types/type";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import Form from "../../components/Form";
import { ALL_OVERLAY_DATA } from "../../fragments/fragments";
import PictureUpload from "../../components/PictureUpload";

const UPDATE_MUTATION = gql`
  mutation UpdateOverlay(
    $theme: NotificationTheme
    $type: OverlayType!
    $message: String
    $color: String
    $duration: Int
    $audio_id: ID
    $picture_id: ID
  ) {
    create_update_overlay(
      theme: $theme
      type: $type
      message: $message
      color: $color
      duration: $duration
      picture_id: $picture_id
      audio_id: $audio_id
    ) {
      id
      type
      metadata {
        theme
        message
        color
        duration
      }
    }
  }
`;

export default function Index() {
  const { data: { me } = {}, loading } = useQuery<{ me: User }>(gql`
    ${ALL_OVERLAY_DATA}
    query {
      me {
        stream_key
        overlays {
          type
          thumbnail {
            id
          }
          metadata {
            ...AllOverlayData
          }
        }
      }
    }
  `);

  const OverlayMap: { [e: string]: Overlay } =
    me?.overlays?.reduce(
      (obj, item) => Object.assign(obj, { [item.type]: item }),
      {}
    ) ?? {};

  const [sendDonation, { loading: loadingSendDonation }] = useMutation(
    gql`
      mutation TestDonation($streamKey: String!) {
        test_donation(stream_key: $streamKey) {
          message
          status
        }
      }
    `
  );
  const MY_URL =
    process.env.NEXT_PUBLIC_URL +
    "/overlays/notifications/?key=" +
    me?.stream_key;

  const [pictureThumbnail, setpictureThumbnail] = useState<null | Picture>(
    null
  );
  return (
    <AppContainer title="Stream Overlay" fullScreen>
      <DashboardContainer>
        <div>
          <Tabs>
            <TabList>
              <Tab>Notifikasi</Tab>
              <Tab>To be created</Tab>
            </TabList>

            <TabPanel>
              <div className="grid  grid-cols-1 md:grid-cols-12 gap-2">
                <div className="col-span-1 md:col-span-8 order-last flex flex-col gap-2">
                  <PictureUpload
                    name="Thumbnail"
                    onUploadFinish={setpictureThumbnail}
                  />
                  {!loading && (
                    <Paper name="Attribut">
                      <Form<OverlayData, { create_update_overlay: Overlay }>
                        fields="create_update_overlay"
                        attributes={[
                          {
                            label: "Pesan",
                            name: "message",
                            required: true,
                            information:
                              "Memiliki variabel khusus $name $total",
                          },
                          {
                            label: "Warna",
                            name: "color",
                            type: "color",
                            required: true,
                          },

                          {
                            label: "Durasi (detik)",
                            name: "duration",
                            type: "number",
                            required: true,
                          },
                        ]}
                        mutationQuery={UPDATE_MUTATION}
                        addedValueMap={{
                          type: OverlayType.Notification,
                          picture_id:
                            pictureThumbnail?.id ??
                            OverlayMap[OverlayType.Notification].thumbnail?.id,
                        }}
                        defaultValueMap={{
                          ...(OverlayMap[OverlayType.Notification]
                            ?.metadata as OverlayData),
                        }}
                        afterSubmit={() =>
                          toast.success("Berhasil mengupdate overlay")
                        }
                      />
                    </Paper>
                  )}
                </div>
                <div className="col-span-1 md:col-span-4">
                  {!loading && (
                    <>
                      <Paper name="Preview">
                        <iframe
                          height={300}
                          className="w-full overflow-hidden"
                          src={
                            process.env.NEXT_PUBLIC_URL +
                            "/overlays/notifications/?loop=true&key=" +
                            me?.stream_key
                          }
                        ></iframe>
                      </Paper>
                      <Paper name="Widget URL">
                        <div className="flex gap-2 mb-4">
                          <Button
                            color="BLUE"
                            onClick={() => {
                              navigator.clipboard
                                .writeText(MY_URL)
                                .then(() =>
                                  toast.success(
                                    "Berhasil memindahkan link ke clipboard"
                                  )
                                )
                                .catch((e) =>
                                  toast.error(
                                    "gagal memindahkan link ke clipboard " + e
                                  )
                                );
                            }}
                          >
                            Copy URL
                          </Button>
                          <a target="_blank" rel="__ noreferrer" href={MY_URL}>
                            <Button color="BLUE">OPEN URL</Button>
                          </a>
                        </div>

                        <Button
                          loading={loadingSendDonation}
                          color="BLUE"
                          onClick={() => {
                            sendDonation({
                              variables: { streamKey: me?.stream_key },
                            }).then((e) =>
                              e.data.test_donation.status
                                ? toast.success("Berhasil")
                                : toast.error(
                                    "Gagal " + e.data.test_donation.message
                                  )
                            );
                          }}
                        >
                          TEST DONASI
                        </Button>
                      </Paper>
                    </>
                  )}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>
                To be continued fusakena ashita nante matenai ...
                https://youtu.be/4QjTngci-60
              </h2>
            </TabPanel>
          </Tabs>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
