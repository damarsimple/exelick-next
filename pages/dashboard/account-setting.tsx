import React from "react";
import AppContainer from "../../components/AppContainer";
import DashboardContainer from "../../components/DashboardContainer";
import Paper from "../../components/Paper";

export default function Index() {
  return (
    <AppContainer title="Account Setting" fullScreen>
      <DashboardContainer>
        <div>
          <Paper name="Config">
            <div className="flex flex-col gap-4">
              {[
                "Email",
                "Old Password",
                "New Password",
                "Confirm New Password",
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
      </DashboardContainer>
    </AppContainer>
  );
}
