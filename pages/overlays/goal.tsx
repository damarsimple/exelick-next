import React from "react";

export default function Goal() {
  return (
    <div>
      <div className="text-center flex flex-col gap-2 p-4 shadow rounded bg-red-600">
        <h1 className="text-xl font-semibold text-white">To The Moon</h1>
        <p className="font-semibold text-lg text-white">Rp 0 / Rp 1</p>
        <div
          className="bg-red-300 h-full"
          style={{
            width: "30%",
          }}
        />
        <div className="bg-white h-10 relative">
          <div
            className="bg-yellow-300 h-10 text-white text-lg font-semibold pt-1"
            style={{
              width: "30%",
            }}
          >
            30%
          </div>
        </div>
      </div>
    </div>
  );
}
