import React from "react";
import Image from "next/image";
import ImageContainer from "../../components/ImageContainer";

export default function leaderboard() {
  return (
    <div className="w-1/2">
      <div className="grid grid-cols-1 gap-3 max-h-20 mr-16 items-end">
        <div className="flex justify-between gap-2 p-4 shadow rounded bg-yellow-300 text-white">
          <div className="w-1/6">
            <ImageContainer
              fallback="profile"
              className="rounded-full"
              src="https://trakteer.id/storage/images/avatar/ava-kqwK2sVxMEXfACgq0luplMIrcWAm9eGA1617518306.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </div>
          <div className="w-3/6">Supporet 1</div>
          <div className="w-2/6 text-sm pt-1">Rp 10.000</div>
        </div>
      </div>
    </div>
  );
}
