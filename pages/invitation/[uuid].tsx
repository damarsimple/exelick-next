import { gql, useQuery } from "@apollo/client";
import { NextRouter, withRouter } from "next/dist/client/router";
import React from "react";
import { toast } from "react-toastify";
import Form from "../../components/Form";
import Paper from "../../components/Paper";
import { CORE_USER_INFO_MINIMAL_FIELD } from "../../fragments/fragments";
import { User } from "../../types/type";

const GET_ACTIVATION = gql`
  ${CORE_USER_INFO_MINIMAL_FIELD}
  query ($username: String!) {
    query_invitation(username: $username) {
      id
      ...CoreUserInfoMinimalField
    }
  }
`;

interface UserRegistration extends User {
  password: string;
  uuid: string;
}

function Uuid({ router }: { router: NextRouter }) {
  const { uuid } = router.query;

  const { data, loading, error } = useQuery<{ query_invitation: User }>(
    GET_ACTIVATION,
    {
      variables: { username: uuid },
    }
  );

  return (
    <div className="flex h-screen bg-gradient-to-b from-green-400 to-blue-500">
      <div className="m-auto">
        <Paper name="Aktivasi Akun" className="bg-white">
          <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {data && (
              <Form<UserRegistration, { activate_invitation: UserRegistration }>
                attributes={[
                  {
                    name: "username",
                    label: "Username",
                    required: true,
                    type: "text",
                  },
                  {
                    name: "name",
                    label: "name",
                    required: true,
                    type: "text",
                  },
                  {
                    name: "password",
                    label: "Password",
                    required: true,
                    type: "password",
                  },
                  {
                    name: "tag",
                    label: "Tag",
                  },
                  {
                    name: "description",
                    label: "Description",
                  },
                  {
                    name: "uuid",
                    label: "UUID",
                    type: "hidden",
                  },
                ]}
                fields="activate_invitation"
                defaultValueMap={{
                  ...data.query_invitation,
                  password: "",
                  username: "",
                  uuid: uuid as string,
                }}
                mutationQuery={gql`
                  mutation (
                    $uuid: String!
                    $username: String!
                    $name: String
                    $password: String
                    $tag: String
                    $description: String
                  ) {
                    activate_invitation(
                      uuid: $uuid
                      input: {
                        name: $name
                        username: $username
                        password: $password
                        tag: $tag
                        description: $description
                      }
                    ) {
                      id
                      is_active
                    }
                  }
                `}
                afterSubmit={(e) => {
                  if (e.is_active) {
                    toast.success(
                      "Akun berhasil diaktifkan silahkan login :-)"
                    );
                    router.push("/login");
                  }
                }}
              />
            )}
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default withRouter(Uuid);
