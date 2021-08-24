import { gql, useMutation, useQuery } from "@apollo/client";
import { NextRouter } from "next/dist/client/router";
import withRouter from "next/dist/client/with-router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AppContainer from "../../../components/AppContainer";
import DashboardContainer from "../../../components/DashboardContainer";
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
    mutateFunction,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation<{ createProduct: Product }>(UPDATE_PRODUCT, {
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
  const [inputMap, setInputMap] = useState<{ [e: string]: any }>({});

  const [cover, setCover] = useState<null | Picture>(null);

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
          variables: {
            id: e?.data?.createProduct.id,
            cover: { id: cover.id },
          },
        }).then((e) => {
          toast.success("Berhasil mengubah gambar mu !");
        });
      }
    });
  };

  return (
    <AppContainer>
      <DashboardContainer>
        <div className="flex flex-col gap-2">
          <PictureUpload
            name="Upload Gambar Produk"
            onUploadFinish={(e) => setCover(e)}
          />

          {!loading &&
            !error &&
            product &&
            userInputMap.map((e, i) => (
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
                                  cp[e.name] = (cp[e.name] as string[]).filter(
                                    (e) => e != x
                                  );

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
                      defaultValue={product[e.name]?.toString()}
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
      </DashboardContainer>
    </AppContainer>
  );
}

export default withRouter(Id);
