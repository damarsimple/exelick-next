import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import Image from "next/image";
import AppContainer from "../../components/AppContainer";
import { formatCurrency } from "../../helpers/formatter";
import ImageContainer from "../../components/ImageContainer";
import { useQuery, gql } from "@apollo/client";
import { Transaction, User } from "../../types/type";
import BoxLoader from "../../components/BoxLoader";
import moment from "moment";
import { CORE_PAGE_INFO_FIELD } from "../../fragments/fragments";
import { AiOutlineLoading } from "react-icons/ai";

export default function Index() {
  const { data: { me } = {}, loading } = useQuery<{ me: User }>(gql`
    query {
      me {
        id
        stream_key
      }
    }
  `);

  const renderTableRow = (e: Transaction) => (
    <tr className="text-gray-700 w-full">
      <td className="px-4 py-3 border">
        <div className="flex items-center text-sm">
          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
            {/* <ImageContainer
              fallback="payment_method"
              alt="Picture of the author"
              width={50}
              height={50}
              src="https://dretail.id/asset/img/image/features/payment/qris.png"
            /> */}
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="font-semibold text-black">
              {e.purchase.anonymous_name}
            </p>
            <p className="text-xs text-gray-600">{e.payment_method}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-xs border">{formatCurrency(e.amount)}</td>
      <td className="px-4 py-3 text-xs border">{e.purchase.message}</td>
      <td className="px-4 py-3 text-sm border">
        {moment(e.updated_at).format("D/M/YYYY")}
      </td>
    </tr>
  );

  return (
    <AppContainer title="Transactions" fullScreen>
      <DashboardContainer>
        <div>
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Transaction ID</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <BoxLoader
                raw
                Component={renderTableRow}
                variables={{ id: me?.id }}
                fields="transactions"
                query={gql`
                  ${CORE_PAGE_INFO_FIELD}
                  query GetMyTransaction(
                    $id: ID!
                    $first: Int!
                    $after: String
                  ) {
                    transactions(user_id: $id, first: $first, after: $after) {
                      edges {
                        node {
                          id
                          status
                          amount
                          payment_method
                          purchase {
                            message
                            anonymous_name
                          }
                        }
                      }
                      pageInfo {
                        ...CorePageInfoField
                      }
                    }
                  }
                `}
                SkeletonComponent={() => (
                  <tr className="text-gray-700 w-full">
                    <AiOutlineLoading size="2.5em" className="animate-spin" />
                  </tr>
                )}
              />
            </tbody>
          </table>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
