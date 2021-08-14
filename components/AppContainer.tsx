import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdChevronLeft, MdSearch, MdShoppingCart } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useUserStore } from "../store/user";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAuthStore } from "../store/auth";
import { useRouter } from "next/dist/client/router";

type Except = "navbar";

export function UserButton() {
  const { user, setUser } = useUserStore();
  const { setToken } = useAuthStore();

  const { push } = useRouter();

  return (
    <Menu as="button" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex p-2 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          {user?.username}
          <MdChevronLeft
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setToken("");
                      setUser(null);
                      push("/login");
                    }}
                    className={`${
                      active ? "bg-gray-200" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <MdChevronLeft
                      className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function AppContainer({
  title,
  children,
  fullScreen,
  without,
}: {
  title?: string;
  children: JSX.Element;
  fullScreen?: boolean;
  without?: Except[];
}) {
  const { user } = useUserStore();

  return (
    <div>
      <Head>
        <title>{title ? title + " - Exlunode" : "Exlunode"}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <div className={fullScreen ? "h-screen" : ""}>
        {!without?.includes("navbar") && (
          <nav className="fixed top-0 w-full shadow rounded p-1 md:p-3 flex justify-between z-50 bg-white">
            <Link href="/">
              <a>
                <button className="p-2 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                  Exlunode
                </button>
              </a>
            </Link>

            <div className="relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-2 m-auto hover:text-gray-500"
              >
                <MdSearch size="1.5em" />
              </button>
            </div>
            <div className="flex gap-2">
              <Link href="/dashboard">
                <a>
                  <button className="p-2 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                    <AiOutlineUser size="1.5em" />
                  </button>
                </a>
              </Link>
              <Link href="/checkout">
                <a>
                  <button className="p-2 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                    <MdShoppingCart size="1.5em" />
                  </button>
                </a>
              </Link>
              {user ? (
                <UserButton />
              ) : (
                <Link href="/login">
                  <a>
                    <button className="p-2 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                      Login
                    </button>
                  </a>
                </Link>
              )}
            </div>
          </nav>
        )}
        <div className="h-full box-border pt-16">{children}</div>
      </div>
    </div>
  );
}
