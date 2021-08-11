import React, { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import AppContainer from "../components/AppContainer";

export default function Checkout() {
  const [count, setCount] = useState(1);
  return (
    <AppContainer title="Keranjang Belanja">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-2 pt-6 container mx-auto">
        <div className="flex col-span-2 justify-center">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow rounded pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell" />
                    <th className="text-left">Product</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Unit price
                    </th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((e, i) => (
                    <tr key={i}>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          {/* <img
                          src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
                          className="w-20 rounded"
                          alt="Thumbnail"
                        /> */}
                        </a>
                      </td>
                      <td>
                        <div className="flex gap-3">
                          <button className="bg-gray-50 hover:bg-gray-100 p-2 rounded">
                            <MdDelete size="1.5em" />
                          </button>
                          <p className="mb-2 text-lg font-semibold">Earphone</p>
                        </div>
                      </td>
                      <td className="justify-center md:justify-end md:flex mt-6">
                        <div>
                          <div className="relative flex gap-2">
                            <input
                              value={count}
                              onChange={(e) =>
                                setCount(parseInt(e.target.value))
                              }
                              type="number"
                              className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded w-10"
                            />
                            <button
                              onClick={() =>
                                setCount(count == 1 ? 1 : count - 1)
                              }
                              className="hidden md:flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
                            >
                              <AiFillMinusCircle size="1.5em" />
                            </button>
                            <button
                              onClick={() => setCount(count + 1)}
                              className="hidden md:flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
                            >
                              <AiFillPlusCircle size="1.5em" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          10.00
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          20.00
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 mt-4">
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        {/* <img
                          src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
                          className="w-20 rounded"
                          alt="Thumbnail"
                        /> */}
                      </a>
                    </td>
                    <td>
                      <p className="mb-2 md:ml-4">Total</p>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6"></td>
                    <td className="hidden text-right md:table-cell"></td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        20.00
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="shadow rounded p-8">
          <div>
            <div className="p-4 bg-gray-100 rounded-full">
              <h1 className="ml-2 font-bold uppercase">Detail Pembayaran</h1>
            </div>
            <div className="p-4">
              <p className="mb-6 italic">
                Biaya sudah termasuk potongan payment provider dan potongan
                platform
              </p>
              <div className="flex justify-between border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Subtotal
                </div>
                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  148,827.53
                </div>
              </div>

              <div className="flex justify-between pt-4 border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Tax
                </div>
                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  2,976.55
                </div>
              </div>
              <div className="flex justify-between pt-4 border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Total
                </div>
                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  17,859.3
                </div>
              </div>
              <div className="w-full">
                <div className="p-4 mt-6 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">
                    Pesan Donasi dari kamu ❤️❤️❤️❤️
                  </h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    Kirimkan pesan donasi untuk streamer kesukaan kamu (akan
                    muncul di overlay stream mereka)
                  </p>
                  <textarea
                    className="w-full h-24 p-2 bg-gray-100 rounded"
                    defaultValue={""}
                  />
                </div>
              </div>
              <a href="#">
                <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                  <svg
                    aria-hidden="true"
                    data-prefix="far"
                    data-icon="credit-card"
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                    />
                  </svg>
                  <span className="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}
