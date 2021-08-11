import React from "react";
import Link from "next/link";
import { AiFillHome, AiFillVideoCamera } from "react-icons/ai";
import {
  MdAccountCircle,
  MdGamepad,
  MdReceipt,
  MdSettings,
  MdShoppingCart,
} from "react-icons/md";

interface DCContainer {
  children?: JSX.Element | string | null | undefined;
}

export default function DashboardContainer({ children }: DCContainer) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-3 flex flex-col gap-1 bg-gradient-to-b from-red-400 to-indigo-500 p-2">
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
            <a className="text-lg text-white capitalize font-semibold rounded hover:bg-red-900 p-4">
              <button key={i} className="flex gap-2">
                {e.icon} {e.name}
              </button>
            </a>
          </Link>
        ))}
      </div>
      <div className="col-span-9 p-10">{children}</div>
    </div>
  );
}
