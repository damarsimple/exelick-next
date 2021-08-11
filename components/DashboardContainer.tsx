import React, { useEffect } from "react";
import Link from "next/link";
import { AiFillHome, AiFillVideoCamera } from "react-icons/ai";
import {
  MdAccountCircle,
  MdGamepad,
  MdReceipt,
  MdSettings,
  MdShoppingCart,
} from "react-icons/md";
import { useRouter } from "next/dist/client/router";

interface DCContainer {
  children?: JSX.Element | string | null | undefined;
}

export default function DashboardContainer({ children }: DCContainer) {
  const { pathname } = useRouter();

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 flex flex-col gap-1 bg-gradient-to-b from-blue-400 to-green-500 p-2 h-screen">
        {[
          {
            name: "Dashboard",
            url: "/dashboard",
            icon: <AiFillHome size="1.5em" />,
          },
          {
            name: "My Page",
            url: "/dashboard/my-page",
            icon: <MdAccountCircle size="1.5em" />,
          },
          {
            name: "Stream Overlay",
            url: "/dashboard/overlays",
            icon: <AiFillVideoCamera size="1.5em" />,
          },
          {
            name: "Products",
            url: "/dashboard/products",
            icon: <MdShoppingCart size="1.5em" />,
          },
          {
            name: "Transactions",
            url: "/dashboard/transactions",
            icon: <MdReceipt size="1.5em" />,
          },
          {
            name: "Minecraft Server",
            url: "/dashboard/mc-server",
            icon: <MdGamepad size="1.5em" />,
          },
          {
            name: "Account Setting",
            url: "/dashboard/account-setting",
            icon: <MdSettings size="1.5em" />,
          },
        ].map((e, i) => (
          <Link key={i} href={e.url}>
            <a
              className={
                "flex justify-center text-lg text-white capitalize font-semibold rounded hover:bg-red-900 p-4 " +
                (pathname == e.url ? "bg-red-400" : "")
              }
            >
              <button key={i} className="flex gap-2">
                {e.icon} <span className="hidden md:block">{e.name}</span>
              </button>
            </a>
          </Link>
        ))}
      </div>
      <div className="col-span-9 p-2 md:p-10 h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
