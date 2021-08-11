import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdSearch } from "react-icons/md";

type Except = "navbar";

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
  return (
    <div>
      <Head>
        <title>{title ? title + " - Exelic Gayming" : "Exelic Gayming"}</title>
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
                  Exelic Gayming
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
            <Link href="/login">
              <a>
                <button className="p-2 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                  Login
                </button>
              </a>
            </Link>
          </nav>
        )}
        <div className="h-full box-border pt-16">{children}</div>
      </div>
    </div>
  );
}
