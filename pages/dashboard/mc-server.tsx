import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Paper from "../../components/Paper";
import AppContainer from "../../components/AppContainer";

export default function Index() {
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
                <div className="flex flex-col gap-4">
                  {[
                    "Server Websender Hostname",
                    "Server Websender Port",
                    "Server Websender Password",
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
