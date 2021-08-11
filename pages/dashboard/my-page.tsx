import React from "react";
import AppContainer from "../../components/AppContainer";
import DashboardContainer from "../../components/DashboardContainer";

export default function Index() {
  return (
    <AppContainer title="My Page" fullScreen>
      <DashboardContainer>
        <div className="flex flex-col gap-2">
          {["Username", "Email", "Kategori", "Tentang Kamu"].map((e, i) => (
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
          <button className="text-lg text-white capitalize font-semibold rounded bg-red-600 hover:bg-red-900 p-4">
            Simpan
          </button>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
