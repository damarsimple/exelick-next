import React, { useState } from "react";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Product } from "../types/type";
import { formatCurrency } from "../helpers/formatter";
import { useCartsStore } from "../store/carts";

export default function ProductCard(e: Product) {
  const [count, setCount] = useState(1);
  const [mouseInView] = useState(false);

  const { carts, setCarts } = useCartsStore();

  const handleAddToCarts = () => {
    setCarts([...carts, e.name]);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-lg uppercase truncate">
          {e.name}
        </h1>
        <p className="text-gray-600 text-sm mt-1 truncate">{e.description}</p>
      </div>
      <div className="flex h-80 w-80 overflow-hidden relative">
        <Image
          className="h-80 w-80 overflow-hidden"
          alt={"Picture of the " + e.name}
          layout="fill"
          objectFit="cover"
          src={`https://picsum.photos/seed/${e.id}/200/200`}
        />
      </div>
      <div className="grid grid-cols-1 px-4 py-2 bg-gray-900 gap-2">
        <h1 className="text-gray-200 font-bold text-sm md:text-md">
          {formatCurrency(e.price)}
        </h1>
        <button
          onClick={handleAddToCarts}
          className="flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
        >
          <MdShoppingCart size="1.5em" />
        </button>
        {e.is_stackable && mouseInView && (
          <div className="flex gap-2">
            <input
              value={count}
              type="number"
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="w-24 flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
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
          </div>
        )}
      </div>
    </div>
  );
}

export function SkeletonProductCard() {
  return (
    <div className="mx-auto w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2 flex-col flex gap-2 pt-6">
        <div className="animate-pulse bg-gray-100 font-bold text-lg uppercase truncate h-6" />
        <div className="animate-pulse bg-gray-100 h-4" />
      </div>
      <div className="w-full h-80 bg-gray-200 animate animate-pulse" />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 gap-2 h-8 animate-pulse"></div>
    </div>
  );
}
