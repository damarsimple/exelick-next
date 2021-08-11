import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Paper from "../../components/Paper";

export default function Index() {
  return (
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
                <Paper name="Preview">
                  <div>To Be Created</div>
                </Paper>
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
  );
}
