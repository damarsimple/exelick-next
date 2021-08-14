import { DocumentNode, gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { User } from "../types/type";
import UserCard, { UserCardSkeleton } from "./UserCard";

import { get } from "lodash";
import { useInView } from "react-intersection-observer";

interface Id {
  id: string;
}

interface BoxProps<T extends Id> {
  query: DocumentNode;
  fields: string;
  Component: (e: T) => JSX.Element;
  SkeletonComponent?: () => JSX.Element;
  className?: string;
  perPage?: number;
}

interface PaginatorInfo {
  endCursor: string;
  currentPage: number;
  count: number;
  hasNextPage: boolean;
  total: number;
}

const PER_PAGE_DEFAULT = 10;

export default function Loader<T extends Id>({
  query,
  fields,
  Component,
  SkeletonComponent,
  className,
  perPage,
}: BoxProps<T>) {
  const PerPage = perPage ?? PER_PAGE_DEFAULT;

  const { loading, error, data, fetchMore, refetch } = useQuery(query, {
    variables: {
      first: PerPage,
      after: "",
    },
  });

  const mainData = get(data, fields);
  const datas: { node: T }[] = mainData?.edges ?? [];
  const pageInfo: PaginatorInfo = mainData?.pageInfo;

  const SkeletonGrid = (e: { gridLength: number }) => (
    <div className={className}>
      {SkeletonComponent &&
        [...Array(PerPage * e.gridLength)].map((e, i) => (
          <SkeletonComponent key={i} />
        ))}
    </div>
  );
  const MakeComponent = (e: T) => <Component {...e} />;

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          first: PerPage,
          after: pageInfo.endCursor,
        },
      });
      console.log("fetching more");
    }
  }, [PerPage, fetchMore, inView, pageInfo]);

  if (loading) return <>{<SkeletonGrid gridLength={1} />}</>;

  if (error) return <p>Error :( {error.message}</p>;

  return (
    <div>
      <div className={className}>
        {datas.map((e, i) => (
          <MakeComponent {...e.node} key={`${e.node.id}`} />
        ))}
      </div>
      <div ref={ref}>
        {pageInfo?.hasNextPage && <SkeletonGrid gridLength={1} />}
      </div>
    </div>
  );
}
