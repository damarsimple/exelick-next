import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import Image from "next/image";

export default function Index() {
  return (
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
                      <Image
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        src="https://trakteer.id/storage/images/avatar/ava-kqwK2sVxMEXfACgq0luplMIrcWAm9eGA1617518306.jpg"
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
                      <p className="text-xs text-gray-600">Xendit</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs border">Rp 10.000</td>
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
  );
}
