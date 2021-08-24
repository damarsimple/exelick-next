import React, { useState } from "react";
import DashboardContainer from "../../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductCard, {
  SkeletonProductCard,
} from "../../../components/ProductCard";
import Image from "next/image";
import AppContainer from "../../../components/AppContainer";
import { gql, useMutation } from "@apollo/client";
import Loader from "../../../components/BoxLoader";
import { CORE_PAGE_INFO_FIELD } from "../../../fragments/fragments";
import { formatCurrency, wildCardFormatter } from "../../../helpers/formatter";
import SearchBox from "../../../components/SearchBox";
import { useUserStore } from "../../../store/user";
import ImageContainer from "../../../components/ImageContainer";
import PictureUpload from "../../../components/PictureUpload";
import { Picture, Product } from "../../../types/type";
import { toast } from "react-toastify";
import { rearg } from "lodash";
import Link from "next/link";

interface InputMap {
  label: string;
  name: keyof Product;
  type?: string;
}

const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $is_stackable: Boolean!
    $name: String!
    $price: Float!
    $description: String
    $commands: [String]
  ) {
    createProduct(
      input: {
        is_stackable: $is_stackable
        name: $name
        commands: $commands
        price: $price
        description: $description
      }
    ) {
      id
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

const UPDATE_PRODUCT_PICTURE = gql`
  mutation UpdateProductPicture($id: ID!, $cover: PictureAssignInput) {
    update_product_picture(id: $id, cover: $cover) {
      cover {
        real_path
      }
    }
  }
`;
export default function Index() {
  const [inputMap, setInputMap] = useState<{ [e: string]: any }>({});

  const [searchValue, setSearchValue] = useState("");

  const [cover, setCover] = useState<null | Picture>(null);

  const { user } = useUserStore();

  const [
    mutateFunction,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation<{ createProduct: Product }>(CREATE_PRODUCT, {
    onCompleted: () => {
      toast.success("Berhasil mengubah data mu <3");
    },
  });

  const [
    mutatePictureFunction,
    {
      data: mutationDataPicture,
      loading: mutationLoadingPicture,
      error: mutationErrorPicture,
    },
  ] = useMutation<{ update_product_picture: Product }>(UPDATE_PRODUCT_PICTURE, {
    onCompleted: () => {
      toast.success("Berhasil mengubah gambar mu <3");
    },
  });

  const [multiInputHolder, setMultiInputHolder] = useState("");

  const userInputMap: InputMap[] = [
    {
      label: "Nama Produk",
      name: "name",
    },
    {
      label: "Harga",
      name: "price",
      type: "number",
    },
    {
      label: "Description",
      name: "description",
    },
    {
      label: "Bisa di stak (dikumpul / stackable)",
      name: "is_stackable",
      type: "checkbox",
    },
    {
      label: "Command",
      name: "commands",
      type: "multiInput",
    },
  ];

  const handleSubmit = () => {
    const cp = inputMap;

    for (const x in cp) {
      if (cp[x] == "") {
        delete cp[x];
      }
    }
    mutateFunction({ variables: { ...inputMap } }).then((e) => {
      if (cover) {
        mutatePictureFunction({
          variables: { id: e?.data?.createProduct.id, cover: { id: cover.id } },
        }).then((e) => {
          toast.success("Berhasil mengubah gambar mu !");
        });
      }
    });
  };

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
              {/* <Tab>Table View</Tab> */}
              <Tab> Create Product</Tab>
            </TabList>

            <TabPanel>
              {user && (
                <Loader<Product>
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
                  variables={{
                    name: wildCardFormatter(searchValue),
                    user_id: user?.id,
                  }}
                  withEditDelete
                  deleteQuery={DELETE_PRODUCT}
                  editUrl={`/dashboard/products/`}
                />
              )}
            </TabPanel>
            {/* <TabPanel>
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
                        {user && (
                          <Loader<Product>
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
                                      cover {
                                        real_path
                                      }
                                    }
                                  }
                                }
                              }
                            `}
                            Component={(e) => (
                              <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                  <div className="flex items-center text-sm">
                                    <div className="relative w-8 h-8 mr-3 md:block">
                                      <ImageContainer
                                        fallback="product"
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        src={e.cover?.real_path}
                                      />
                                      <div
                                        className="absolute inset-0 rounded-full shadow-inner"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div>
                                      <p className="font-semibold text-black">
                                        {e.name}
                                      </p>
                                      <p className="text-xs text-gray-600">
                                        Minecraft
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-xs border">
                                  {formatCurrency(e.price)}
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                  6/10/2021
                                </td>
                              </tr>
                            )}
                            SkeletonComponent={SkeletonProductCard}
                            fields="products"
                            perPage={12}
                            variables={{
                              name: wildCardFormatter(searchValue),
                              user_id: user?.id,
                            }}
                            withEditDelete
                            deleteQuery={DELETE_PRODUCT}
                            editUrl={`/dashboard/products/`}
                          />
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </TabPanel> */}

            <TabPanel>
              <div className="flex flex-col gap-2">
                <PictureUpload
                  name="Upload Gambar Produk"
                  onUploadFinish={(e) => setCover(e)}
                />

                {userInputMap.map((e, i) => (
                  <div key={i} className="pb-6 md:pb-0 flex flex-col">
                    <label className="input-label text-lg mb-2 font-semibold italic">
                      {e.label}
                    </label>
                    <div>
                      {e.type == "multiInput" ? (
                        <div>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              className="input-field inline-flex items-baseline border-none shadow-md bg-white placeholder-blue w-full p-4 no-outline text-dusty-blue-darker"
                              name={e.name}
                              onChange={(x) => {
                                setMultiInputHolder(x.target.value);
                              }}
                            />
                            <button
                              onClick={() => {
                                if (!multiInputHolder) return;
                                const iMap: {
                                  [e: string]: string | string[];
                                } = {
                                  ...inputMap,
                                };

                                iMap[e.name] = [
                                  ...(iMap[e.name] ?? []),
                                  multiInputHolder,
                                ];

                                setInputMap(iMap);
                                setMultiInputHolder("");
                              }}
                            >
                              INPUT
                            </button>
                          </div>
                          <div className="flex flex-col gap-2">
                            {Array.isArray(inputMap[e.name]) &&
                              (inputMap[e.name] as string[]).map((x) => (
                                <div
                                  key={x}
                                  className="shadow rounded p-2 flex justify-between"
                                >
                                  <p>{x}</p>
                                  <button
                                    onClick={() => {
                                      const cp = inputMap;
                                      cp[e.name] = (
                                        cp[e.name] as string[]
                                      ).filter((e) => e != x);

                                      setInputMap(cp);
                                    }}
                                  >
                                    X
                                  </button>
                                </div>
                              ))}
                          </div>
                        </div>
                      ) : (
                        <input
                          type={e.type ?? "text"}
                          className="input-field inline-flex items-baseline border-none shadow-md bg-white placeholder-blue w-full p-4 no-outline text-dusty-blue-darker"
                          name={e.name}
                          onChange={(x) => {
                            const iMap: {
                              [e: string]: string | boolean | number;
                            } = {
                              ...inputMap,
                            };

                            switch (e.type) {
                              case "checkbox":
                                iMap[e.name] = x.target.value == "on";
                                break;
                              case "number":
                                iMap[e.name] = parseInt(x.target.value);
                                break;
                              default:
                                iMap[e.name] = x.target.value;
                                break;
                            }

                            setInputMap(iMap);
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
                <button
                  disabled={mutationLoading}
                  onClick={handleSubmit}
                  className="text-lg text-white capitalize font-semibold rounded bg-red-600 hover:bg-red-900 p-4"
                >
                  Simpan
                </button>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
