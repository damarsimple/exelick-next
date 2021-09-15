import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import { Picture } from "../types/type";
import Button from "./Button";
import ImageContainer from "./ImageContainer";
import Paper from "./Paper";

const UPLOAD_IMAGE_MUTATION = gql`
  mutation ($file: Upload!) {
    upload_picture(file: $file) {
      id
      real_path
    }
  }
`;

export default function PictureUpload(e: {
  name: string;
  auto?: boolean;
  onUploadFinish?: (e: Picture) => void;
}) {
  const [file, setFile] = useState<null | File>(null);
  const [picture, setPicture] = useState<null | undefined | Picture>(null);

  const [mutateFunction, { loading: mutationLoading, error: mutationError }] =
    useMutation<{ upload_picture: Picture }>(UPLOAD_IMAGE_MUTATION, {
      onCompleted: () => {
        toast.success("Berhasil mengupload data mu <3");
      },
    });

  const handleUpload = (x?: File) => {
    mutateFunction({ variables: { file: x ?? file } }).then((x) => {
      setPicture(x.data?.upload_picture);
      if (e.onUploadFinish && x.data?.upload_picture) {
        e.onUploadFinish(x.data?.upload_picture);
      }
    });
  };

  return (
    <Paper name={e.name}>
      <div>
        {mutationError && <div>Error : {mutationError.message}</div>}
        <div className="flex justify-center">
          {file && (
            <div>
              <ImageContainer
                src={picture?.real_path ?? URL.createObjectURL(file)}
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
        {picture && <p className="text-center">Berhasil Di Upload</p>}

        {!picture && (
          <>
            {!mutationLoading && (
              <input
                type="file"
                accept="image/*"
                className="input-field inline-flex items-baseline border-none shadow-md bg-white placeholder-blue w-full p-4 no-outline text-dusty-blue-darker"
                onChange={(x) => {
                  //@ts-ignore
                  if (x.target?.files[0]) {
                    setFile(x.target.files[0]);
                    e.auto && handleUpload(x.target?.files[0]);
                  }
                }}
              />
            )}
            {mutationLoading ? (
              <AiOutlineLoading
                size="2.5em"
                className="animate-spin rounded  p-2 w-full my-4"
              />
            ) : e.auto ? (
              <div></div>
            ) : (
              <Button
                type="button"
                loading={mutationLoading}
                onClick={() => handleUpload()}
                color="BLUE"
              >
                UPLOAD
              </Button>
            )}
          </>
        )}
      </div>
    </Paper>
  );
}
