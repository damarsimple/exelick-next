import React from "react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="mx-auto max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-3xl uppercase">
          DROP ITEM
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Buang item yang ada di tangan saat ini
        </p>
      </div>
      <Image
        alt="Picture of the author"
        width={500}
        height={500}
        src="https://trakteer.id/storage/images/avatar/ava-kqwK2sVxMEXfACgq0luplMIrcWAm9eGA1617518306.jpg"
      />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-xl">Rp 10.000</h1>
        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          Add to card
        </button>
      </div>
    </div>
  );
}
