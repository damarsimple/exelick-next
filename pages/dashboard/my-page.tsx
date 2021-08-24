import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AppContainer from "../../components/AppContainer";
import DashboardContainer from "../../components/DashboardContainer";
import PictureUpload from "../../components/PictureUpload";
import { CORE_USER_INFO_MINIMAL_FIELD } from "../../fragments/fragments";
import { useUserStore } from "../../store/user";
import { Picture, User } from "../../types/type";

const GET_DATA = gql`
  query {
    me {
      id
      username
      description
      tag
    }
  }
`;

const UPDATE_MUTATION = gql`
  ${CORE_USER_INFO_MINIMAL_FIELD}
  mutation UpdateMe(
    $id: ID!
    $name: String
    $username: String
    $email: String
    $tag: String
    $description: String
  ) {
    updateUser(
      id: $id
      input: {
        name: $name
        username: $username
        email: $email
        tag: $tag
        description: $description
      }
    ) {
      ...CoreUserInfoMinimalField
    }
  }
`;

const UPDATE_MUTATION_PICTURE = gql`
  mutation UpdateMePicture(
    $id: ID!
    $profilepicture: PictureAssignInput
    $banner: PictureAssignInput
  ) {
    update_user_picture(
      id: $id
      profilepicture: $profilepicture
      banner: $banner
    ) {
      profilepicture {
        real_path
      }
      banner {
        real_path
      }
    }
  }
`;

export default function Index() {
  const { data, loading, error, refetch } = useQuery<{ me: User }>(GET_DATA);

  const [inputMap, setInputMap] = useState<{ [e: string]: string }>({
    username: "",
    tag: "",
    description: "",
  });

  const user = data?.me;

  interface InputMap {
    label: string;
    name: keyof User;
  }

  const userInputMap: InputMap[] = [
    {
      label: "Username",
      name: "username",
    },
    {
      label: "Kategori",
      name: "tag",
    },
    {
      label: "Tentang Kamu",
      name: "description",
    },
  ];

  const [pictures, setPictures] = useState<{
    profilepicture?: Picture;
    banner?: Picture;
  }>({});

  const [
    mutateFunction,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation<{ updateUser: User }>(UPDATE_MUTATION, {
    onCompleted: () => {
      refetch();
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
  ] = useMutation<{ update_user_picture: User }>(UPDATE_MUTATION_PICTURE, {
    onCompleted: () => {
      refetch();
      toast.success("Berhasil mengubah gambar mu <3");
    },
  });

  const { setUser } = useUserStore();

  const handleSubmit = () => {
    const cp = inputMap;

    for (const x in cp) {
      if (cp[x] == "") {
        delete cp[x];
      }
    }
    mutateFunction({ variables: { ...user, ...cp } }).then((e) => {
      setUser(e.data?.updateUser);
    });

    if (pictures.banner || pictures.profilepicture) {
      const pictureData: { [e: string]: object } = {};

      if (pictures.banner) {
        pictureData["banner"] = { id: pictures.banner.id };
      }
      if (pictures.profilepicture) {
        pictureData["profilepicture"] = { id: pictures.profilepicture.id };
      }

      console.log(pictureData);

      mutatePictureFunction({
        variables: { id: user?.id, ...pictureData },
      }).then((e) => {
        toast.success("Berhasil mengubah gambar mu !");
      });
    }
  };

  return (
    <AppContainer title="My Page" fullScreen>
      <DashboardContainer>
        <div className="flex flex-col gap-2">
          <PictureUpload
            name="Upload Gambar Profile"
            onUploadFinish={(e) =>
              setPictures({ ...pictures, profilepicture: e })
            }
          />
          <PictureUpload
            name="Upload Gambar Banner"
            onUploadFinish={(e) => setPictures({ ...pictures, banner: e })}
          />
          {userInputMap.map((e, i) =>
            loading ? (
              <div key={i} className="pb-6 md:pb-0 flex flex-col">
                <label className="input-label text-lg mb-2 font-semibold italic">
                  {e.label}
                </label>
                <div>
                  <div className="border-none shadow-md animate-pulse bg-gray-50  w-full h-12" />
                </div>
              </div>
            ) : (
              <div key={i} className="pb-6 md:pb-0 flex flex-col">
                <label className="input-label text-lg mb-2 font-semibold italic">
                  {e.label}
                </label>
                <div>
                  <input
                    type="text"
                    className="input-field inline-flex items-baseline border-none shadow-md bg-white placeholder-blue w-full p-4 no-outline text-dusty-blue-darker"
                    name={e.name}
                    defaultValue={user ? user[e.name]?.toString() : ""}
                    onChange={(x) => {
                      const iMap: {
                        [e: string]: string;
                      } = {
                        ...inputMap,
                      };

                      iMap[e.name] = x.target.value;

                      setInputMap(iMap);
                    }}
                  />
                </div>
              </div>
            )
          )}
          <button
            disabled={loading || mutationLoading}
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
