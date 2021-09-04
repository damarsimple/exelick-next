import { gql, useSubscription } from "@apollo/client";
import React from "react";
import AppContainer from "../../components/AppContainer";
import { client } from "../_app";

const COMMENTS_SUBSCRIPTION = gql`
  subscription ($id: ID!) {
    userUpdated(id: $id) {
      id
      username
    }
  }
`;

export default function Subscriptions() {
  const { data, loading, error } = useSubscription(COMMENTS_SUBSCRIPTION, {
    variables: { id: 1 },
  });

  return (
    <AppContainer>
      <div>
        {JSON.stringify(loading)} {JSON.stringify(data)}{" "}
        {JSON.stringify(error?.message)}
      </div>
    </AppContainer>
  );
}
