import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import Image from "next/image";
import AppContainer from "../../components/AppContainer";
import { formatCurrency } from "../../helpers/formatter";
import ImageContainer from "../../components/ImageContainer";

export default function Index() {
  return (
    <AppContainer title="Transactions" fullScreen>
      <DashboardContainer>
        <div>
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Transaction ID</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[...Array(20)].map((e, i) => (
                <tr className="text-gray-700" key={i}>
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <ImageContainer
                          fallback="payment_method"
                          alt="Picture of the author"
                          width={50}
                          height={50}
                          src="https://dretail.id/asset/img/image/features/payment/qris.png"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-black">
                          12313123-213123-231231-121
                        </p>
                        <p className="text-xs text-gray-600">Qris</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    {formatCurrency(10000)}
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    Pembelian oleh User Anonymous
                  </td>
                  <td className="px-4 py-3 text-sm border">6/10/2021</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
