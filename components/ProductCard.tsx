import React, { useState } from "react";
import Image from "next/image";
import { MdPlusOne, MdShoppingCart } from "react-icons/md";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function ProductCard() {
  const [count, setCount] = useState(1);
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
      <div className="grid grid-cols-5 items-center justify-between px-4 py-2 bg-gray-900 gap-2">
        <h1 className="text-gray-200 font-bold text-sm md:text-md">
          Rp 10.000
        </h1>
        <input
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          type="number"
          className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
        />

        <button
          onClick={() => setCount(count == 1 ? 1 : count - 1)}
          className="flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
        >
          <AiFillMinusCircle size="1.5em" />
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
        >
          <AiFillPlusCircle size="1.5em" />
        </button>
        <button className="flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded">
          <MdShoppingCart size="1.5em" />
        </button>
      </div>
    </div>
  );
}
