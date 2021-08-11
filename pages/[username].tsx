import withRouter from "next/dist/client/with-router";
import Image from "next/image";

import React from "react";
import AppContainer from "../components/AppContainer";
import ProductCard from "../components/ProductCard";

function Username() {
  return (
    <AppContainer title="Exelick 💦💦" fullScreen>
      <div className="grid grid-cols-12 h-full lg:container lg:mx-auto gap-3">
        <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-gray-100 flex flex-col p-10  gap-6">
          <div className="flex flex-col text-center">
            <Image
              className="rounded-full h-24 w-24 "
              src="https://trakteer.id/storage/images/avatar/ava-kqwK2sVxMEXfACgq0luplMIrcWAm9eGA1617518306.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h1 className="text-lg font-semibold">Exelick UwU</h1>
            <p className="text-md">@TadaAce</p>
            <p className="text-md">Virtual Youtuber</p>
          </div>
          <div className="text-sm p-2 bg-white rounded">
            Hai! kenalin nih, namaku Tada Ace. Panggil aja Tada. Saya seorang
            content creator yang baru bergabung di Trakteer.id. Mohon
            dukungannya ya!
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-8 lg:max-h-full lg:overflow-x-auto">
          <div className="hidden lg:block w-full h-56 bg-gray-200">
            {/* <Image
            alt="Picture of the author"
            layout="fill"
            src="https://trakteer.id/storage/images/cover/cvr-f8YwxU44hfHrd87I8EnatufH6ftKBy5q1617521632.jpg"
          /> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-2 p-4">
            {[...Array(10)].map((e, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-2 bg-gray-100 flex flex-col  lg:max-h-full lg:overflow-x-auto  order-2 lg:order-last">
          {[...Array(20)].map((e, i) => (
            <div
              key={i}
              className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
            >
              <div className="p-2 w-12">
                <Image
                  alt="Picture of the author"
                  width={50}
                  height={50}
                  src="https://trakteer.id/storage/images/avatar/ava-kqwK2sVxMEXfACgq0luplMIrcWAm9eGA1617518306.jpg"
                />
              </div>
              <div className="flex-auto text-sm w-32">
                <div className="font-bold">Product 1</div>
                <div className="truncate">Product 1 description</div>
                <div className="text-gray-400">Qty: 2</div>
              </div>
              <div className="flex flex-col w-18 font-medium items-end">
                <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="feather feather-trash-2 "
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </div>
                $12.22
              </div>
            </div>
          ))}
          <div className="p-4 justify-center flex">
            <button
              className="bg-white hover:bg-gray-50 text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
            >
              Checkout Rp 100.000
            </button>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default withRouter(Username);
