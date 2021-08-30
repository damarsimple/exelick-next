import { gql, useQuery } from "@apollo/client";
import { NextPageContext } from "next";
import withRouter from "next/dist/client/with-router";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import AppContainer from "../components/AppContainer";
import Loader from "../components/BoxLoader";
import ImageContainer from "../components/ImageContainer";
import ProductCard, { SkeletonProductCard } from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import {
  CORE_PAGE_INFO_FIELD,
  CORE_USER_INFO_MINIMAL_FIELD,
} from "../fragments/fragments";
import { formatCurrency, wildCardFormatter } from "../helpers/formatter";
import { useCartsStore } from "../store/carts";
import { User } from "../types/type";
import { client } from "./_app";

const GET_USER = gql`
  ${CORE_USER_INFO_MINIMAL_FIELD}
  query UserByUsername($username: String!) {
    userByUsername(username: $username) {
      ...CoreUserInfoMinimalField
      profilepicture {
        real_path
      }
      banner {
        real_path
      }
    }
  }
`;
function Username({
  user: userSsr,
  username,
}: {
  user: User;
  username: string;
}) {
  const [searchValue, setSearchValue] = useState("");

  const { carts, setCarts, removeCarts } = useCartsStore();

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  const user = (!loading && !error && data?.user) ?? userSsr;

  return (
    <AppContainer title={user.username} fullScreen>
      <div className="grid grid-cols-12 h-full  gap-3">
        <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-gray-100 flex flex-col p-10  gap-6">
          <div className="flex flex-col text-center bg-white rounded p-4">
            <ImageContainer
              className="rounded-full h-24 w-24 "
              src={user.profilepicture?.real_path}
              fallback={"profile"}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h1 className="text-lg font-semibold">{user.name}</h1>
            <p className="text-md">@{user.name}</p>
            <p className="text-md">{user.tag}</p>
          </div>
          <div className="text-sm p-2 bg-white rounded">{user.description}</div>
        </div>
        <div className="gap-2 p-4 col-span-12 md:col-span-6 lg:col-span-8 lg:max-h-full lg:overflow-x-scroll">
          <div className="bg-gray-200 relative" style={{ height: 400 }}>
            <ImageContainer
              alt="Picture of the author cover"
              layout="fill"
              objectFit="cover"
              fallback="banner"
              src={user.banner?.real_path}
            />
          </div>
          <SearchBox onChange={setSearchValue} placeholder="Cari Produk" />
          <Loader
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4"
            query={gql`
              ${CORE_PAGE_INFO_FIELD}
              query UserProductByUsername(
                $first: Int!
                $after: String
                $name: String
                $user_id: ID
              ) {
                products(
                  first: $first
                  after: $after
                  name: $name
                  user_id: $user_id
                ) {
                  pageInfo {
                    ...CorePageInfoField
                  }
                  edges {
                    node {
                      id
                      name
                      user_id
                      is_stackable
                      price
                      description
                      cover {
                        real_path
                      }
                    }
                  }
                }
              }
            `}
            Component={ProductCard}
            SkeletonComponent={SkeletonProductCard}
            fields="products"
            perPage={12}
            fetchPolicy="network-only"
            variables={{
              name: wildCardFormatter(searchValue),
              user_id: user.id,
            }}
          />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-2 bg-gray-100 flex flex-col  lg:max-h-full lg:overflow-x-auto  order-2 lg:order-last">
          {carts.map(({ qty, product }, i) => (
            <div
              key={i}
              className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
            >
              <div className="p-2 w-12">
                <ImageContainer
                  fallback="product"
                  alt="Product"
                  width={50}
                  height={50}
                  src={product.cover?.real_path}
                />
              </div>
              <div className="flex-auto text-sm w-32">
                <div className="font-bold">{product.name}</div>
                <div className="truncate">{product.description}</div>
                <div className="text-gray-400">Qty: {qty}</div>
              </div>
              <div className="flex flex-col w-18 font-medium items-end">
                <button
                  onClick={() => removeCarts(product)}
                  className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
                >
                  <MdDelete size="1.5em" />
                </button>
                {formatCurrency(product.price)}
              </div>
            </div>
          ))}
          <div className="p-4 justify-center flex">
            <Link href="/checkout">
              <a>
                <button
                  className="bg-white hover:bg-gray-50 text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                              hover:bg-teal-700 hover:text-teal-100 
                              bg-teal-100 
                              text-teal-700 
                              border duration-200 ease-in-out 
                              border-teal-600 transition"
                >
                  Checkout{" "}
                  {formatCurrency(
                    carts.reduce((e, i) => {
                      return e + i.qty * (i.product.price ?? 0);
                    }, 0)
                  )}
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { username } = context.query;
  const { data } = await client.query({
    variables: { username },
    query: GET_USER,
  });

  return {
    props: {
      user: data.userByUsername,
      username,
    },
  };
}

export default Username;
