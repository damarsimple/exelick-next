import { gql } from "@apollo/client";
import AppContainer from "../components/AppContainer";
import Loader from "../components/BoxLoader";
import UserCard, { UserCardSkeleton } from "../components/UserCard";
import { CORE_PAGE_INFO_FIELDS } from "../fragments/fragments";
import { User } from "../types/type";

const USERS = gql`
  ${CORE_PAGE_INFO_FIELDS}
  query GetUsersQuery($first: Int!, $after: String) {
    users(first: $first, after: $after) {
      edges {
        node {
          id
          email
          name
          username
          description
          tag
        }
      }
      pageInfo {
        ...CorePageInfoField
      }
    }
  }
`;

export default function Home() {
  return (
    <AppContainer>
      <div className="flex h-screen">
        <div className="m-auto text-center container mx-auto px-4">
          <h1 className="font-semibold text-1xl mt-10">Exelick Gayming UwU</h1>
          <p className="text-lg">
            Platform yang memudahkan fans berinteraksi dengan kreator
          </p>
          <h2 className="font-semibold text-xl">
            Kreator yang sudah bergabung
          </h2>
          <Loader
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-4 gap-2 p-2"
            query={USERS}
            Component={UserCard}
            SkeletonComponent={UserCardSkeleton}
            fields="users"
            perPage={12}
          />
        </div>
      </div>
    </AppContainer>
  );
}
