import { gql } from "@apollo/client";
import { NextPageContext } from "next";
import withRouter from "next/dist/client/with-router";
import Image from "next/image";

import React from "react";
import AppContainer from "../components/AppContainer";
import Loader from "../components/BoxLoader";
import ProductCard, { SkeletonProductCard } from "../components/ProductCard";
import { CORE_PAGE_INFO_FIELDS } from "../fragments/fragments";
import { User } from "../types/type";
import { client } from "./_app";

function Username({ user }: { user: User }) {
  return (
    <AppContainer title={user.username} fullScreen>
      <div className="grid grid-cols-12 h-full lg:container lg:mx-auto gap-3">
        <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-gray-100 flex flex-col p-10  gap-6">
          <div className="flex flex-col text-center">
            <Image
              className="rounded-full h-24 w-24 "
              src={`https://picsum.photos/seed/${user.id}/300/300`}
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
        <div className="col-span-12 md:col-span-6 lg:col-span-8 lg:max-h-full lg:overflow-x-auto">
          <div className="hidden lg:block w-full h-56 bg-gray-200 mb-10 ">
            <Image
              alt="Picture of the author"
              width={1200}
              height={300}
              objectFit="cover"
              src={`https://picsum.photos/seed/${user.id}/300/300`}
            />
          </div>
          <Loader
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-4"
            query={gql`
              ${CORE_PAGE_INFO_FIELDS}
              query UserProductByUsername($first: Int!, $after: String) {
                userByUsername(username: "${user.username}") {
                  products(first: $first, after: $after) {
                    pageInfo{
                        ...CorePageInfoField
                    }
                    edges {
                      node {
                        id
                        name
                        is_stackable
                        price
                        description
                      }
                    }
                  }
                }
              }
            `}
            Component={ProductCard}
            SkeletonComponent={SkeletonProductCard}
            fields="userByUsername.products"
            perPage={12}
          />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-2 bg-gray-100 flex flex-col  lg:max-h-full lg:overflow-x-auto  order-2 lg:order-last">
          {[...Array(20)].map((e, i) => (
            <div
              key={i}
              className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
            >
              <div className="p-2 w-12">
                <Image
                  alt="Picture of the author"
                  width={50}
                  height={50}
                  src={`https://picsum.photos/seed/${user.id}/50/50`}
                />
              </div>
              <div className="flex-auto text-sm w-32">
                <div className="font-bold">Product 1</div>
                <div className="truncate">Product 1 description</div>
                <div className="text-gray-400">Qty: 2</div>
              </div>
              <div className="flex flex-col w-18 font-medium items-end">
                <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="feather feather-trash-2 "
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </div>
                $12.22
              </div>
            </div>
          ))}
          <div className="p-4 justify-center flex">
            <button
              className="bg-white hover:bg-gray-50 text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
            >
              Checkout Rp 100.000
            </button>
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
    query: gql`
      query UserByUsername($username: String!) {
        userByUsername(username: $username) {
          id
          name
          username
          tag
          description
        }
      }
    `,
  });

  return {
    props: {
      user: data.userByUsername,
    },
  };
}

export default Username;
