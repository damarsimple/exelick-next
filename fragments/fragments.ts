import { gql } from "@apollo/client";

export const CORE_PAGE_INFO_FIELD = gql`
  fragment CorePageInfoField on PageInfo {
    endCursor
    currentPage
    count
    hasNextPage
    total
  }
`;

export const CORE_USER_INFO_MINIMAL_FIELD = gql`
  fragment CoreUserInfoMinimalField on User {
    id
    name
    username
    tag
    description
  }
`;
