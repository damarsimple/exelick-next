import {
  DocumentNode,
  gql,
  useMutation,
  useQuery,
  WatchQueryFetchPolicy,
} from "@apollo/client";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { User } from "../types/type";
import UserCard, { UserCardSkeleton } from "./UserCard";

import { get } from "lodash";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import Link from "next/link";

interface Id {
  id: string;
}

interface BoxProps<T extends Id> {
  query: DocumentNode;
  deleteQuery?: DocumentNode;
  fields: string;
  Component: (e: T) => JSX.Element;
  SkeletonComponent?: () => JSX.Element;
  className?: string;
  perPage?: number;
  variables?: object;
  fetchPolicy?: WatchQueryFetchPolicy;
  withEditDelete?: boolean;
  editUrl?: string;
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
  variables,
  fetchPolicy,
  deleteQuery,
  editUrl,
  withEditDelete,
}: BoxProps<T>) {
  const [
    mutateFunction,
    {
      data: dataDeleteMutation,
      loading: mutationLoading,
      error: mutationError,
    },
  ] = useMutation(deleteQuery ?? gql``);

  const PerPage = perPage ?? PER_PAGE_DEFAULT;

  const { loading, error, data, fetchMore, refetch } = useQuery(query, {
    fetchPolicy,
    variables: {
      first: PerPage,
      after: "",
      ...variables,
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

  const handleDelete = (e: T) => {
    mutateFunction({ variables: { id: e.id } })
      .then((e) => {
        toast.success("Berhasil menghapus data");
        refetch();
      })
      .catch((e) => {
        toast.error("Gagal menghapus data");
      });
  };

  if (loading) return <>{<SkeletonGrid gridLength={1} />}</>;

  if (error) return <p>Error :( {error.message}</p>;

  return (
    <div>
      <div className={className}>
        {datas.map((e, i) => (
          <div key={`${e.node.id}`}>
            {withEditDelete && (
              <div className="flex justify-between">
                <Link href={editUrl + e.node.id}>
                  <a className="w-full">
                    <button className="p-4 w-full bg-yellow-400 hover:bg-yellow-500 font-semibold">
                      EDIT
                    </button>
                  </a>
                </Link>
                <button
                  onClick={() => handleDelete(e.node)}
                  className="p-4 w-full bg-red-400 hover:bg-red-500 font-semibold"
                >
                  DELETE
                </button>
              </div>
            )}
            <MakeComponent {...e.node} />
          </div>
        ))}
      </div>
      <div ref={ref}>
        {pageInfo?.hasNextPage && <SkeletonGrid gridLength={1} />}
      </div>
    </div>
  );
}
