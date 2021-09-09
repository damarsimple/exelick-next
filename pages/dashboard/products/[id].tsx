import { gql, useMutation, useQuery } from "@apollo/client";
import { NextRouter } from "next/dist/client/router";
import withRouter from "next/dist/client/with-router";
import React, { useEffect, useState } from "react";
import { MdCancel, MdDelete, MdEdit, MdSave } from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { toast } from "react-toastify";
import AppContainer from "../../../components/AppContainer";
import DashboardContainer from "../../../components/DashboardContainer";
import Form from "../../../components/Form";
import ImageContainer from "../../../components/ImageContainer";
import Paper from "../../../components/Paper";
import PictureUpload from "../../../components/PictureUpload";
import { useUserStore } from "../../../store/user";
import { Picture, Product, User, UserVariable } from "../../../types/type";
import UUIDclass from "uuidjs";

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
  mutation updateProduct(
    $id: ID!
    $is_stackable: Boolean
    $name: String
    $price: Float
    $description: String
    $commands: [String]
  ) {
    updateProduct(
      id: $id
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

const UPDATE_VARIABLES = gql`
  mutation ($id: ID!, $variables: [UserVariableInput!]!) {
    update_user_custom(id: $id, variables: $variables) {
      id
      variables {
        name
        value
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
  const [commands, setCommands] = useState<string[]>([]);
  useEffect(() => {
    if (product) setCommands(product?.commands ?? []);
  }, [product]);

  const [cover, setCover] = useState<null | Picture>(null);

  const { user } = useUserStore();

  const { data: { me } = {} } = useQuery<{ me: User }>(gql`
    query {
      me {
        variables {
          name
          value
        }
      }
    }
  `);

  useEffect(() => {
    if (me) setVariableHolder(me?.variables ?? []);
  }, [me]);

  const [variableHolder, setVariableHolder] = useState(me?.variables ?? []);

  const [changepicture, setChangepicture] = useState(false);

  const [showCompiled, setShowCompiled] = useState(false);

  const mappedVariable: { [e: string]: string } = variableHolder?.reduce(
    (e, x) => {
      return { ...x, [x.name]: x.value };
    },
    {}
  );

  const [updateVariable, { loading: lVariable, error: eVariable }] =
    useMutation<{ update_user_custom: User }>(UPDATE_VARIABLES);
  const [updateCommands, { loading: lCommand, error: eCommand }] =
    useMutation<{ updateProduct: Product }>(UPDATE_PRODUCT);
  return (
    <AppContainer>
      <DashboardContainer>
        <Tabs>
          <TabList>
            <Tab>Update Detail</Tab>
            <Tab>Pembelian</Tab>
            <Tab>Command Editor</Tab>
            <Tab>Variabel</Tab>
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
                        label: "Tambahan waktu subathon (menit)",
                        name: "subathon_time",
                        type: "number",
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
          <TabPanel>
            <Paper name="Attribut">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setCommands([...commands, "kill ...."])}
                  className="w-full p-4 rounded shadow bg-blue-400 hover:bg-blue-500 uppercase font-bold text-lg text-white"
                >
                  BUAT COMMAND BARU
                </button>
                <button
                  onClick={() => setShowCompiled(!showCompiled)}
                  className="w-full p-4 rounded shadow bg-blue-400 hover:bg-blue-500 uppercase font-bold text-lg text-white"
                >
                  {showCompiled ? "SEMBUNYIKAN" : "TUNJUKKAN"} COMPILED COMMANDS
                </button>
                <button
                  disabled={lCommand}
                  onClick={() =>
                    updateCommands({ variables: { id: product?.id, commands } })
                      .then((e) => toast.success("sukses mengubah data produk"))
                      .catch((e) => toast.error("gagal mengubah data produk"))
                  }
                  className="w-full p-4 rounded shadow bg-blue-400 hover:bg-blue-500 uppercase font-bold text-lg text-white"
                >
                  SIMPAN PERUBAHAN
                </button>

                {showCompiled
                  ? commands.map((e, i) => {
                      return (
                        <CommandEditor
                          key={`compiled-${i}-${e}`}
                          command={e
                            .split(" ")
                            .map((e) => {
                              if (e.includes("$")) {
                                try {
                                  const key = e.substring(1);
                                  return mappedVariable[key];
                                } catch (error) {
                                  return "keynotfound";
                                }
                              }

                              return e;
                            })
                            .join(" ")}
                          setCommand={(x) => {
                            const cp = [...commands];
                            cp[i] = x;
                            setCommands(cp);
                          }}
                          handleDelete={() =>
                            setCommands(commands.filter((x) => x != e))
                          }
                        />
                      );
                    })
                  : commands.map((e, i) => {
                      return (
                        <CommandEditor
                          key={`${i}-${e}`}
                          command={e}
                          setCommand={(x) => {
                            const cp = [...commands];
                            cp[i] = x;
                            setCommands(cp);
                          }}
                          handleDelete={() =>
                            setCommands(commands.filter((x) => x != e))
                          }
                        />
                      );
                    })}
              </div>
            </Paper>
          </TabPanel>
          <TabPanel>
            <Paper name="Attribut">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() =>
                    setVariableHolder([
                      ...variableHolder,
                      { name: UUIDclass.generate(), value: "" },
                    ])
                  }
                  className="w-full p-4 rounded shadow bg-blue-400 hover:bg-blue-500 uppercase font-bold text-lg text-white"
                >
                  BUAT VARIABEL BARU
                </button>
                <button
                  onClick={() =>
                    updateVariable({
                      variables: {
                        id: user?.id,
                        variables: variableHolder.map((e) => {
                          return { name: e.name, value: e.value };
                        }),
                      },
                    }).then((e) =>
                      toast.success("Berhasil mengubah data variable !")
                    )
                  }
                  disabled={lVariable}
                  className="w-full p-4 rounded shadow bg-blue-400 hover:bg-blue-500 uppercase font-bold text-lg text-white"
                >
                  SIMPAN PERUBAHAN
                </button>
                {variableHolder?.map((e, i) => (
                  <VariableEditor
                    variable={e}
                    key={`${i}-${e.name}`}
                    setVariable={(x) => {
                      const cp = [...variableHolder];
                      cp[i] = x;
                      setVariableHolder(cp);
                    }}
                    handleDelete={() =>
                      setVariableHolder(
                        variableHolder.filter((x) => x.name != e.name)
                      )
                    }
                  />
                ))}
              </div>
            </Paper>
          </TabPanel>
        </Tabs>
      </DashboardContainer>
    </AppContainer>
  );
}

function CommandEditor({
  command,
  setCommand,
  handleDelete,
}: {
  command: string;
  setCommand: (by: string) => void;
  handleDelete: () => void;
}) {
  const [onEdit, setOnEdit] = useState(false);
  const [commandEdit, setCommandEdit] = useState(command);
  const flip = () => setOnEdit(!onEdit);
  return (
    <div className="p-4 shadow rounded flex justify-between">
      {onEdit ? (
        <input
          className="shadow rounded border-1 w-full p-2 text-lg mr-4"
          type="text"
          defaultValue={commandEdit}
          onChange={(e) => setCommandEdit(e.target.value)}
        />
      ) : (
        <div className="text-xl font-bold truncate">{commandEdit}</div>
      )}
      {onEdit ? (
        <div className="flex gap-3">
          <button
            className="shadow rounded p-2 bg-green-500 text-white"
            onClick={() => {
              setCommand(commandEdit);
              flip();
            }}
          >
            <MdSave size="1.5em" />
          </button>
          <button
            className="shadow rounded p-2 bg-red-500 text-white"
            onClick={flip}
          >
            <MdCancel size="1.5em" />
          </button>
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            className="shadow rounded p-2 bg-yellow-500 text-white"
            onClick={flip}
          >
            <MdEdit size="1.5em" />
          </button>
          <button
            className="shadow rounded p-2 bg-red-500 text-white"
            onClick={handleDelete}
          >
            <MdDelete size="1.5em" />
          </button>
        </div>
      )}
    </div>
  );
}

function VariableEditor({
  variable,
  setVariable,
  handleDelete,
}: {
  variable: UserVariable;
  setVariable: (by: UserVariable) => void;
  handleDelete: () => void;
}) {
  const [name, setName] = useState(variable.name);
  const [value, setValue] = useState(variable.value);

  return (
    <div className="p-4 shadow rounded flex justify-between">
      <div className="grid grid-cols-2 gap-2 p-2 w-full">
        <input
          className="shadow rounded border-1 w-full p-2 text-lg mr-4"
          type="text"
          value={name}
          onChange={(x) => {
            setName(x.target.value);
            setVariable({ ...variable, name: x.target.value });
          }}
        />
        <input
          className="shadow rounded border-1 w-full p-2 text-lg mr-4"
          type="text"
          value={value}
          onChange={(x) => {
            setValue(x.target.value);
            setVariable({ ...variable, value: x.target.value });
          }}
        />
      </div>
      <button
        className="shadow rounded p-2 bg-red-500 text-white"
        onClick={handleDelete}
      >
        <MdDelete size="1.5em" />
      </button>
    </div>
  );
}

export default withRouter(Id);
