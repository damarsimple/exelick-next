import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AppContainer from "../../components/AppContainer";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { User } from "../../types/type";
import { MdAttachMoney, MdShoppingCart, MdVerifiedUser } from "react-icons/md";
import { formatCurrency } from "../../helpers/formatter";
import { AiOutlineMoneyCollect } from "react-icons/ai";

type RenderType = "number" | "percentage" | "currency" | "truth";

const GET_DATA = gql`
  query {
    get_my_dashboard_data {
      total_product
      analytics_sentiment
      transaction_total
      transaction_total_month
      purchase_total
      purchase_total_month
    }
  }
`;
interface NumberProp {
  count?: number;
  type: RenderType;
}

interface BubbleProp extends NumberProp {
  name: string;
  icon: JSX.Element;
}

export default function Index() {
  const { data, loading, error } = useQuery<{
    get_my_dashboard_data: {
      total_product: number;
      analytics_sentiment: number;
      transaction_total: number;
      transaction_total_month: number;
      purchase_total: number;
      purchase_total_month: number;
    };
  }>(GET_DATA);

  const NumberRender = (e: NumberProp) => {
    switch (e.type) {
      case "truth":
        return <>{e.count == 1 ? "Berjalan" : "Tidak Berjalan"}</>;
      case "currency":
        return <>{formatCurrency(e.count ?? 0)}</>;
      case "percentage":
        return <>{`${e.count}%`}</>;
      case "number":
      default:
        return <>{e.count}</>;
    }
  };
  const LoadingNumber = (e: NumberProp) =>
    !loading ? (
      <div className="mt-3 text-3xl font-bold leading-8">
        <NumberRender {...e} />
      </div>
    ) : (
      <div className="mt-3 h-6 w-36 animate-pulse bg-gray-100"></div>
    );

  const DashboardBubble = (e: BubbleProp) => (
    <div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white">
      <div className="p-5">
        <div className="flex justify-between">
          {e.icon}
          {/* <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">30%</span>
                          </div> */}
        </div>
        <div className="ml-2 w-full flex-1">
          <div>
            <LoadingNumber count={e.count ?? 0} type={e.type as RenderType} />
            <div className="mt-1 text-base text-gray-600">{e.name}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AppContainer title="Dashboard" fullScreen>
      <DashboardContainer>
        <div>
          <Tabs>
            <TabList>
              <Tab>Fancy Graph</Tab>
              <Tab>Server Status</Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                <div className="col-span-12 mt-8">
                  <div className="grid grid-cols-12 gap-6 mt-5">
                    {[
                      {
                        name: "Total Produk",
                        count: data?.get_my_dashboard_data.total_product,
                        type: "number",
                        icon: <MdShoppingCart color="blue" size="2em" />,
                      },
                      {
                        name: "Total Analisis Sentimen Donasi",
                        count: data?.get_my_dashboard_data.analytics_sentiment,
                        type: "percentage",
                        icon: <MdShoppingCart color="blue" size="2em" />,
                      },
                      {
                        name: "Total Transaksi",
                        count: data?.get_my_dashboard_data.transaction_total,
                        type: "currency",
                        icon: <AiOutlineMoneyCollect color="blue" size="2em" />,
                      },
                      {
                        name: "Transaksi Bulan Ini",
                        count:
                          data?.get_my_dashboard_data.transaction_total_month,
                        type: "currency",
                        icon: <MdAttachMoney color="blue" size="2em" />,
                      },
                      {
                        name: "Total Pembelian / Donasi",
                        count: data?.get_my_dashboard_data.purchase_total,
                        type: "number",
                        icon: <MdVerifiedUser color="blue" size="2em" />,
                      },
                      {
                        name: "Pembelian / Donasi Bulan Ini",
                        count: data?.get_my_dashboard_data.purchase_total_month,
                        type: "number",
                        icon: <MdVerifiedUser color="blue" size="2em" />,
                      },
                    ].map((e, i) => (
                      <DashboardBubble {...(e as BubbleProp)} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-12 gap-6 mt-5">
                {[
                  {
                    name: "Backend Service",
                    count: 1,
                    type: "truth",
                    icon: <MdShoppingCart color="blue" size="2em" />,
                  },
                  {
                    name: "Notification Service",
                    count: 1,
                    type: "truth",
                    icon: <MdShoppingCart color="blue" size="2em" />,
                  },
                  {
                    name: "Queue Worker Service",
                    count: 1,
                    type: "truth",
                    icon: <MdShoppingCart color="blue" size="2em" />,
                  },
                ].map((e, i) => (
                  <DashboardBubble {...(e as BubbleProp)} key={i} />
                ))}
                <div className="col-span-12 mt-4">
                  <hr className="w-full" />
                  <h1 className="font-semibold text-2xl mt-2">
                    Server Minecraft Anda
                  </h1>
                </div>
                {[
                  {
                    name: "Websender Service",
                    count: 1,
                    type: "truth",
                    icon: <MdShoppingCart color="blue" size="2em" />,
                  },
                ].map((e, i) => (
                  <DashboardBubble {...(e as BubbleProp)} key={i} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
