import { gql, useMutation, useQuery } from "@apollo/client";
import { NextRouter } from "next/dist/client/router";
import withRouter from "next/dist/client/with-router";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { toast } from "react-toastify";
import AppContainer from "../../../components/AppContainer";
import DashboardContainer from "../../../components/DashboardContainer";
import Form from "../../../components/Form";
import ImageContainer from "../../../components/ImageContainer";
import Paper from "../../../components/Paper";
import PictureUpload from "../../../components/PictureUpload";
import { Picture, Product } from "../../../types/type";

interface InputMap {
  label: string;
  name: keyof Product;
  type?: string;
}

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      is_stackable
      price
      name
      description
      commands
      cover {
        real_path
      }
    }
  }
`;

const UPDATE_PRODUCT = gql`
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

const UPDATE_PRODUCT_PICTURE = gql`
  mutation UpdateProductPicture($id: ID!, $cover: PictureAssignInput) {
    update_product_picture(id: $id, cover: $cover) {
      cover {
        real_path
      }
    }
  }
`;

function Id({ router }: { router: NextRouter }) {
  const { id } = router.query;
  const {
    data: { product } = {},
    loading,
    error,
  } = useQuery<{ product: Product }>(GET_PRODUCT, { variables: { id } });

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
  const [inputMap, setInputMap] = useState<{ [e: string]: any }>({});

  const [cover, setCover] = useState<null | Picture>(null);

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

  const [changepicture, setChangepicture] = useState(false);

  return (
    <AppContainer>
      <DashboardContainer>
        <Tabs>
          <TabList>
            <Tab>Update Detail</Tab>
            <Tab>Pembelian</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-2 gap-6">
              <div>
                {changepicture ? (
                  <PictureUpload
                    auto
                    name="Ubah Gambar Produk"
                    onUploadFinish={(e) => setCover(e)}
                  />
                ) : (
                  <Paper name={"Gambar Produk"} className="flex justify-center">
                    <ImageContainer
                      src={product?.cover?.real_path}
                      width={300}
                      height={300}
                      fallback="product"
                    />
                  </Paper>
                )}

                <button
                  onClick={() => setChangepicture(!changepicture)}
                  type="button"
                  className="text-lg text-white capitalize font-semibold rounded bg-blue-600 hover:bg-blue-900 p-2 w-full my-4"
                >
                  {!changepicture ? "UBAH" : "BATAL UBAH"} GAMBAR PRODUK
                </button>
              </div>
              {!loading && !error && product && (
                <Paper name="Attribut">
                  <Form<Product, { createProduct: Product }>
                    fields="createProduct"
                    attributes={[
                      {
                        label: "Nama",
                        name: "name",
                      },
                      {
                        label: "Harga",
                        name: "price",
                      },
                      {
                        label: "Deskripsi",
                        name: "description",
                      },
                      {
                        label: "Bisa di stak / dikumpul / dibeli bersamaan",
                        name: "is_stackable",
                        type: "checkbox",
                      },
                    ]}
                    mutationQuery={UPDATE_PRODUCT}
                    afterSubmit={({ id }) => {
                      if (cover) {
                        mutatePictureFunction({
                          variables: {
                            id,
                            cover: { id: cover?.id },
                          },
                        }).then((e) => {
                          toast.success("Berhasil mengubah gambar mu !");
                        });
                      }
                    }}
                    defaultValueMap={product}
                  />
                </Paper>
              )}
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </DashboardContainer>
    </AppContainer>
  );
}

export default withRouter(Id);
