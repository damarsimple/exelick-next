import React, { useState } from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductCard, { SkeletonProductCard } from "../../components/ProductCard";
import Image from "next/image";
import AppContainer from "../../components/AppContainer";
import { gql } from "@apollo/client";
import Loader from "../../components/BoxLoader";
import { CORE_PAGE_INFO_FIELD } from "../../fragments/fragments";
import { wildCardFormatter } from "../../helpers/formatter";
import SearchBox from "../../components/SearchBox";
import { useUserStore } from "../../store/user";
import ImageContainer from "../../components/ImageContainer";

export default function Index() {
  const [searchValue, setSearchValue] = useState("");

  const { user } = useUserStore();

  return (
    <AppContainer title="Product" fullScreen>
      <DashboardContainer>
        <div>
          <div className="my-4">
            <SearchBox onChange={setSearchValue} placeholder="Cari Produk" />
          </div>

          <Tabs>
            <TabList>
              <Tab>Card View</Tab>
              <Tab>Table View</Tab> <Tab> Create Product</Tab>
            </TabList>

            <TabPanel>
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
                          is_stackable
                          price
                          description
                        }
                      }
                    }
                  }
                `}
                Component={ProductCard}
                SkeletonComponent={SkeletonProductCard}
                fields="products"
                perPage={12}
                variables={{
                  name: wildCardFormatter(searchValue),
                  user_id: user?.id,
                }}
              />
            </TabPanel>
            <TabPanel>
              <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                          <th className="px-4 py-3">Name</th>
                          <th className="px-4 py-3">Price</th>
                          <th className="px-4 py-3">Date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {[...Array(20)].map((e, i) => (
                          <tr className="text-gray-700" key={i}>
                            <td className="px-4 py-3 border">
                              <div className="flex items-center text-sm">
                                <div className="relative w-8 h-8 mr-3 md:block">
                                  <ImageContainer
                                    fallback="product"
                                    alt="Picture of the author"
                                    width={50}
                                    height={50}
                                    src={`https://picsum.photos/seed/${i}/50/50`}
                                  />
                                  <div
                                    className="absolute inset-0 rounded-full shadow-inner"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div>
                                  <p className="font-semibold text-black">
                                    Drop Item
                                  </p>
                                  <p className="text-xs text-gray-600">
                                    Minecraft
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-xs border">
                              Rp 10.000
                            </td>
                            <td className="px-4 py-3 text-sm border">
                              6/10/2021
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </TabPanel>
          </Tabs>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
