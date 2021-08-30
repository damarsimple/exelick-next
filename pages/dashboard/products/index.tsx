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
import { useRouter } from "next/dist/client/router";
import Paper from "../../../components/Paper";
import Form from "../../../components/Form";

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
  const [searchValue, setSearchValue] = useState("");

  const [cover, setCover] = useState<null | Picture>(null);

  const { user } = useUserStore();

  const [mutatePictureFunction] = useMutation<{
    update_product_picture: Product;
  }>(UPDATE_PRODUCT_PICTURE);

  const router = useRouter();

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
              <div className="grid grid-cols-2 gap-3">
                <PictureUpload
                  auto
                  name="Upload Gambar Produk"
                  onUploadFinish={(e) => setCover(e)}
                />
                <Paper name="Attribut">
                  <Form<Product, { createProduct: Product }>
                    fields="createProduct"
                    attributes={[
                      {
                        label: "Nama",
                        name: "name",
                        required: true,
                      },
                      {
                        label: "Harga",
                        name: "price",
                        required: true,
                        type: "number",
                      },
                      {
                        label: "Deskripsi",
                        name: "description",
                        required: true,
                      },
                      {
                        label: "Bisa di stak / dikumpul / dibeli bersamaan",
                        name: "is_stackable",
                        type: "checkbox",
                      },
                    ]}
                    mutationQuery={CREATE_PRODUCT}
                    beforeSubmit={() => {
                      if (!cover) throw "Anda belum mengupload gambar !";
                    }}
                    afterSubmit={({ id }) => {
                      if (cover) {
                        mutatePictureFunction({
                          variables: {
                            id,
                            cover: { id: cover?.id },
                          },
                        }).then((e) => {
                          toast.success("Berhasil mengubah gambar mu !");
                          router.push("/dashboard/products/" + id);
                        });
                      }
                    }}
                  />
                </Paper>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
