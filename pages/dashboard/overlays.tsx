import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Paper from "../../components/Paper";
import AppContainer from "../../components/AppContainer";
import { gql, useMutation, useQuery } from "@apollo/client";
import { User } from "../../types/type";
import Button from "../../components/Button";
import { toast } from "react-toastify";

export default function Index() {
  const { data: { me } = {}, loading } = useQuery<{ me: User }>(gql`
    query {
      me {
        stream_key
      }
    }
  `);

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
                <div className="col-span-1 md:col-span-8 order-last">
                  <Paper name="Config">
                    <div className="flex flex-col gap-4">
                      {[
                        "Tema",
                        "Color",
                        "Message",
                        "Duration",
                        "Audio",
                        "Custom Audio",
                      ].map((e, i) => (
                        <div key={i} className="pb-6 md:pb-0 flex flex-col">
                          <label className="input-label text-lg mb-2 font-semibold italic">
                            {e}
                          </label>
                          <div>
                            <input
                              id="handle"
                              type="text"
                              className="input-field inline-flex items-baseline border-none shadow-md bg-white placeholder-blue w-full p-4 no-outline text-dusty-blue-darker"
                              name="handle"
                              placeholder="jane"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Paper>
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
