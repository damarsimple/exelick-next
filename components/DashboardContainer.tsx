import React, { useEffect } from "react";
import Link from "next/link";
import { AiFillHome, AiFillVideoCamera } from "react-icons/ai";
import {
  MdAccountCircle,
  MdGamepad,
  MdReceipt,
  MdSettings,
  MdShoppingCart,
  MdSubscriptions,
} from "react-icons/md";
import { useRouter } from "next/dist/client/router";
import { useUserStore } from "../store/user";

interface DCContainer {
  children?: JSX.Element | string | null | undefined;
}

export default function DashboardContainer({ children }: DCContainer) {
  const { pathname } = useRouter();

  const baseUserMenu = [
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
      name: "Subathon",
      url: "/dashboard/subathon",
      icon: <MdSubscriptions size="1.5em" />,
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
      name: "Minecraft Hook",
      url: "/dashboard/mc-server",
      icon: <MdGamepad size="1.5em" />,
    },
    {
      name: "Account Setting",
      url: "/dashboard/account-setting",
      icon: <MdSettings size="1.5em" />,
    },
  ];

  const adminMenu = [
    {
      name: "Invitations",
      url: "/dashboard/admin-invitation",
      icon: <MdSettings size="1.5em" />,
    },
    {
      name: "Account Mutation",
      url: "/dashboard/admin-account-mutation",
      icon: <MdSettings size="1.5em" />,
    },
  ];

  const { user } = useUserStore();
  const menu = [...baseUserMenu, ...(user?.is_admin ? adminMenu : [])];

  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-span-2 md:col-span-3 flex flex-col gap-1 bg-gradient-to-b from-blue-400 to-green-500 p-2 max-h-full">
        {menu.map((e, i) => (
          <Link key={i} href={e.url}>
            <a
              className={
                "flex justify-center text-lg text-white capitalize font-semibold rounded hover:bg-red-900 p-4 " +
                (pathname == e.url ? "bg-red-400" : "")
              }
            >
              <button key={i} className="flex md:grid md:grid-cols-12 gap-2">
                <span className="md:col-span-2"> {e.icon}</span>
                <span className="md:col-span-10 hidden md:block">{e.name}</span>
              </button>
            </a>
          </Link>
        ))}
      </div>
      <div className="col-span-10 md:col-span-9 p-2 md:p-10 ">{children}</div>
    </div>
  );
}
