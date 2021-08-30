import { gql } from "@apollo/client";
import AppContainer from "../components/AppContainer";
import Loader from "../components/BoxLoader";
import UserCard, { UserCardSkeleton } from "../components/UserCard";
import { CORE_PAGE_INFO_FIELD } from "../fragments/fragments";
import ImageContainer from "../components/ImageContainer";
const USERS = gql`
  ${CORE_PAGE_INFO_FIELD}
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
          profilepicture {
            real_path
          }
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
      <div className="text-center">
        <div className="px-4">
          <div className="flex p-20">
            <section className="m-auto">
              <ImageContainer
                alt="App Logo"
                width={1080 / 3}
                height={1080 / 3}
                src="/ms-icon-310x310.png"
              />
              <h1 className="font-semibold text-4xl mt-10 text-primary-base">
                Apa Itu Exelick Gayming UwU?
              </h1>
              <p className="text-lg text-primary-shadow">
                Platform yang memudahkan fans berinteraksi dengan kreator
              </p>
            </section>
          </div>
          <section className="container mx-auto">
            <h2 className="font-semibold text-xl text-primary-accent">
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
          </section>
        </div>
      </div>
    </AppContainer>
  );
}
