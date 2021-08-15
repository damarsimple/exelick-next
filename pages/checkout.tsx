import React, { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdDelete, MdPayment } from "react-icons/md";
import AppContainer from "../components/AppContainer";
import { useCartsStore } from "../store/carts";
import Image from "next/image";
import { formatCurrency } from "../helpers/formatter";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Purchase,
  Transaction,
  TripayTransactionResponse,
} from "../types/type";
import { toast } from "react-toastify";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
export default function Checkout() {
  const { carts, removeCarts, setQty } = useCartsStore();

  const [purchaseMutation, { data: lData, loading: lLoading, error: lError }] =
    useMutation<{
      createPurchase: {
        purchase: Purchase;
        transaction: Transaction;
        success: boolean;
        message: string;
        payment: TripayTransactionResponse;
      };
    }>(
      gql`
        mutation CreatePurchase(
          $id: ID!
          $anonymous_name: String!
          $anonymous_email: String!
          $anonymous_phone: String!
          $message: String!
          $products: [ProductPurchaseInput!]!
        ) {
          createPurchase(
            input: {
              receiver_id: $id
              anonymous_name: $anonymous_name
              anonymous_email: $anonymous_email
              anonymous_phone: $anonymous_phone
              message: $message
              products: $products
            }
          ) {
            purchase {
              id
              tax
              total
              subtotal
            }
            transaction {
              id
              status
            }
            payment {
              qr_url
              qr_string
              checkout_url
              instructions {
                title
                steps
              }
            }
            success
            message
          }
        }
      `,
      {}
    );

  const total = carts.reduce((e, i) => {
    return e + i.qty * (i.product.price ?? 0);
  }, 0);

  const totalPrice = formatCurrency(total);

  const { data, loading, error } = useQuery<{ getTax: { tax: number } }>(
    gql`
      query GetTaxQuery($price: Int!) {
        getTax(price: $price) {
          tax
        }
      }
    `,
    {
      variables: {
        price: total,
      },
    }
  );

  const [onPayment, setOnPayment] = useState(false);

  const [payment, setPayment] = useState<null | TripayTransactionResponse>(
    null
  );

  const [transaction, setTransaction] = useState<null | Transaction>(null);

  const [purchase, setPurchase] = useState<null | Purchase>(null);

  const tax = data?.getTax?.tax ?? 0;

  const [inputData, setInputData] = useState<{ [key: string]: string }>({
    anonymous_name: "",
    anonymous_email: "",
    anonymous_phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (carts.length == 0) {
      toast.error("Anda tidak memiliki item di keranjang ");
      return;
    }

    const products = carts.map(({ product, qty }) => {
      return {
        id: product.id,
        qty,
      };
    });

    const id = carts[0].product.user_id;

    purchaseMutation({
      variables: {
        ...inputData,
        products,
        id,
      },
    }).then((e) => {
      if (!e.data) {
        toast.error("Something very wrong happened ._.");
        return;
      }
      const {
        purchase,
        transaction,
        success,
        message,
        payment: rPayment,
      } = e.data?.createPurchase;
      if (!success) {
        toast.error(message);
      }

      setOnPayment(true);
      setPayment(rPayment);
      setTransaction(transaction);
      setPurchase(purchase);
      setTabIndex(1);
    });
  };

  const [tabIndex, setTabIndex] = useState(0);

  const isPayed = onPayment && payment;

  return (
    <AppContainer title="Keranjang Belanja">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-2 pt-6 container mx-auto">
        <div className="flex col-span-2 justify-center">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow rounded pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList>
                  <Tab>Detail</Tab>
                  {isPayed && <Tab>Pembayaran</Tab>}
                </TabList>

                <TabPanel>
                  <table
                    className="w-full text-sm lg:text-base"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell" />
                        <th className="text-left">Product</th>
                        <th className="lg:text-right text-left pl-5 lg:pl-0">
                          <span className="lg:hidden" title="Quantity">
                            Qty
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
                      {carts.map(({ product, qty }, i) => (
                        <tr key={i}>
                          <td className="hidden pb-4 md:table-cell">
                            <button className="w-10 h-10 rounded relative">
                              <Image
                                src="https://dretail.id/asset/img/image/features/payment/qris.png"
                                alt="Thumbnail"
                                layout="fill"
                              />
                            </button>
                          </td>
                          <td>
                            <div className="flex gap-3">
                              <button
                                onClick={() => removeCarts(product)}
                                className="bg-gray-50 hover:bg-gray-100 p-2 rounded"
                              >
                                <MdDelete size="1.5em" />
                              </button>
                              <p className="mb-2 text-lg font-semibold truncate">
                                {product.name}
                              </p>
                            </div>
                          </td>{" "}
                          {product.is_stackable ? (
                            <td className="justify-center md:justify-end md:flex mt-6">
                              <div>
                                <div className="relative flex gap-2">
                                  <input
                                    value={qty}
                                    onChange={(x) =>
                                      setQty(product, parseInt(x.target.value))
                                    }
                                    type="number"
                                    className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded w-10"
                                  />
                                  <button
                                    onClick={() => setQty(product, qty - 1)}
                                    className="hidden md:flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
                                  >
                                    <AiFillMinusCircle size="1.5em" />
                                  </button>
                                  <button
                                    onClick={() => setQty(product, qty + 1)}
                                    className="hidden md:flex justify-center px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold rounded"
                                  >
                                    <AiFillPlusCircle size="1.5em" />
                                  </button>
                                </div>
                              </div>
                            </td>
                          ) : (
                            <td className="hidden text-right md:table-cell">
                              <span className="text-sm lg:text-base font-medium">
                                1
                              </span>
                            </td>
                          )}
                          <td className="hidden text-right md:table-cell">
                            <span className="text-sm lg:text-base font-medium">
                              {formatCurrency(qty * (product.price ?? 0))}
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-sm lg:text-base font-medium">
                              {formatCurrency(qty * (product.price ?? 0))}
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
                            {totalPrice}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>

                {isPayed && (
                  <TabPanel>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-center">
                        <Image
                          src={payment?.qr_url}
                          width={320}
                          height={320}
                          alt="QR Code"
                        />
                      </div>
                      <div>
                        {payment?.instructions?.map((e) => (
                          <div key={e.title}>
                            <h1 className="text-xl font-semibold">{e.title}</h1>
                            {e.steps.map((e, i) => (
                              <p key={e} className="text-lg">
                                {i + 1}. {e}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>

                      <div>
                        <a
                          href={payment?.checkout_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="text-lg font-semibold uppercase w-full p-4 shadow rounded bg-gray-100 hover:bg-gray-200">
                            <h1>Link Checkout</h1>
                          </button>
                        </a>
                      </div>
                    </div>
                  </TabPanel>
                )}
              </Tabs>
            </div>
          </div>
        </div>
        <form className="shadow rounded p-8" onSubmit={handleSubmit}>
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
                  {totalPrice}
                </div>
              </div>
              <div className="flex justify-between pt-4 border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Tax
                </div>
                {loading ? (
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900 h-6 bg-gray-100 w-56 animate-pulse" />
                ) : (
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {formatCurrency(purchase?.tax ?? tax)}
                  </div>
                )}
              </div>
              <div className="flex justify-between pt-4 border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Total
                </div>
                {loading ? (
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900 h-6 bg-gray-100 w-56 animate-pulse" />
                ) : (
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {formatCurrency(purchase?.total ?? total + tax)}
                  </div>
                )}
              </div>
              <div>
                <div className="w-full">
                  <div className="p-4 mt-6 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">Detail Kamu</h1>
                  </div>
                  {[
                    {
                      name: "anonymous_name",
                      formatted: "Nama pendonasi yang akan muncul di overlay",
                    },
                    {
                      name: "anonymous_email",
                      formatted: "Email Kamu",
                    },
                    {
                      name: "anonymous_phone",
                      formatted: "Nomor Telpon Kamu",
                    },
                  ].map((e, i) => (
                    <div className="p-4" key={i}>
                      <p className="mb-4 italic">{e.formatted}</p>
                      <input
                        required
                        disabled={onPayment}
                        className="w-full  p-2 bg-gray-100 rounded"
                        onChange={(x) => {
                          const cp = inputData;
                          cp[e.name] = x.target.value;
                          setInputData(cp);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
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
                      disabled={onPayment}
                      onChange={(x) => {
                        const cp = inputData;
                        cp["message"] = x.target.value;
                        setInputData(cp);
                      }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={lLoading}
                  className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                >
                  <MdPayment size="1.5em" />
                  <span className="ml-2 mt-5px">
                    {lLoading ? "Memproses..." : "Bayar"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AppContainer>
  );
}
