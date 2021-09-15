import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Paper from "../../components/Paper";
import AppContainer from "../../components/AppContainer";
import { useQuery, gql } from "@apollo/client";
import { User } from "../../types/type";
import { toast } from "react-toastify";
import Button from "../../components/Button";

export default function Index() {
  const { data: { me } = {}, loading } = useQuery<{ me: User }>(gql`
    query {
      me {
        stream_key
      }
    }
  `);
  return (
    <AppContainer title="Setting Minecraft Server" fullScreen>
      <DashboardContainer>
        <div>
          <Tabs>
            <TabList>
              <Tab>Config</Tab>
            </TabList>

            <TabPanel>
              <Paper name="Config">
                {me?.stream_key ? (
                  <Button
                    color="BLUE"
                    onClick={() => {
                      navigator.clipboard
                        .writeText(me?.stream_key)
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
                    Copy KUNCI Anda
                  </Button>
                ) : (
                  <p>Loading...</p>
                )}
              </Paper>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
