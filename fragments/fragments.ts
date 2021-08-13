import { gql } from "@apollo/client";

export const CORE_PAGE_INFO_FIELDS = gql`
  fragment CorePageInfoField on PageInfo {
    endCursor
    currentPage
    count
    hasNextPage
    total
  }
`;
