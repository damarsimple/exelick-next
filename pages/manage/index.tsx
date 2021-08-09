import React from "react";

export default function index() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-3 flex flex-col gap-1 bg-gradient-to-b from-red-400 to-indigo-500 p-2">
        {["Dashboard", "My Page"].map((e, i) => (
          <button
            key={i}
            className="text-lg text-white capitalize font-semibold rounded hover:bg-red-900 p-4"
          >
            {e}
          </button>
        ))}
      </div>
      <div className="col-span-9 p-24">
        {["xd", "xd"].map((e, i) => (
          <div key={i} className="pb-6 md:pb-0 flex flex-col">
            <label className="input-label text-base mb-2">Your Username</label>
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
    </div>
  );
}
