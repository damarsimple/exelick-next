import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index() {
  return (
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
                  <a
                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span className="flex items-center">30%</span>
                        </div>
                      </div>
                      <div className="ml-2 w-full flex-1">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>
                          <div className="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span className="flex items-center">30%</span>
                        </div>
                      </div>
                      <div className="ml-2 w-full flex-1">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>
                          <div className="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                          />
                        </svg>
                        <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span className="flex items-center">30%</span>
                        </div>
                      </div>
                      <div className="ml-2 w-full flex-1">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>
                          <div className="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                        <div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span className="flex items-center">30%</span>
                        </div>
                      </div>
                      <div className="ml-2 w-full flex-1">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>
                          <div className="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-span-12 mt-5">
                <div
                  className="grid gap-2 grid-cols-1 lg:grid-cols-2"
                  style={{ position: "relative" }}
                >
                  <div
                    className="bg-white shadow-lg p-4"
                    id="chartline"
                    style={{ minHeight: 365 }}
                  >
                    <div
                      id="apexcharts58yhdkm7"
                      className="apexcharts-canvas apexcharts58yhdkm7 apexcharts-theme-light"
                      style={{ width: 754, height: 350 }}
                    >
                      <svg
                        id="SvgjsSvg1001"
                        width={754}
                        height={350}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg"
                        transform="translate(0, 0)"
                        style={{
                          background: "transparent none repeat scroll 0% 0%",
                        }}
                      >
                        <foreignObject x={0} y={0} width={754} height={350}>
                          <div
                            className="apexcharts-legend apexcharts-align-center position-bottom"
                            style={{
                              inset: "auto 0px 1px",
                              position: "absolute",
                              maxHeight: 175,
                            }}
                          >
                            <div
                              className="apexcharts-legend-series"
                              style={{ margin: "2px 5px" }}
                            >
                              <span
                                className="apexcharts-legend-marker"
                                style={{
                                  background:
                                    "rgb(0, 143, 251) none repeat scroll 0% 0% !important",
                                  color: "rgb(0, 143, 251)",
                                  height: 12,
                                  width: 12,
                                  left: 0,
                                  top: 0,
                                  borderWidth: 0,
                                  borderColor: "rgb(255, 255, 255)",
                                  borderRadius: 12,
                                }}
                              />
                              <span
                                className="apexcharts-legend-text"
                                style={{
                                  color: "rgb(55, 61, 63)",
                                  fontSize: 12,
                                  fontWeight: 400,
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                TEAM A
                              </span>
                            </div>
                            <div
                              className="apexcharts-legend-series"
                              style={{ margin: "2px 5px" }}
                            >
                              <span
                                className="apexcharts-legend-marker"
                                style={{
                                  background:
                                    "rgb(0, 227, 150) none repeat scroll 0% 0% !important",
                                  color: "rgb(0, 227, 150)",
                                  height: 12,
                                  width: 12,
                                  left: 0,
                                  top: 0,
                                  borderWidth: 0,
                                  borderColor: "rgb(255, 255, 255)",
                                  borderRadius: 12,
                                }}
                              />
                              <span
                                className="apexcharts-legend-text"
                                style={{
                                  color: "rgb(55, 61, 63)",
                                  fontSize: 12,
                                  fontWeight: 400,
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                TEAM B
                              </span>
                            </div>
                          </div>
                          <style
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-left, .apexcharts-legend.position-top.apexcharts-align-left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-center, .apexcharts-legend.position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-right, .apexcharts-legend.position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }",
                            }}
                          />
                        </foreignObject>
                        <g
                          id="SvgjsG1003"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(86.83333333333333, 30)"
                        >
                          <defs id="SvgjsDefs1002">
                            <clipPath id="gridRectMask58yhdkm7">
                              <rect
                                id="SvgjsRect1012"
                                width={589}
                                height="272.584"
                                x="-4.5"
                                y="-2.5"
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMask58yhdkm7" />
                            <clipPath id="nonForecastMask58yhdkm7" />
                            <clipPath id="gridRectMarkerMask58yhdkm7">
                              <rect
                                id="SvgjsRect1013"
                                width={584}
                                height="271.584"
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                          </defs>
                          <line
                            id="SvgjsLine1011"
                            x1="579.5"
                            y1={0}
                            x2="579.5"
                            y2="267.584"
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            className="apexcharts-xcrosshairs"
                            x="579.5"
                            y={0}
                            width={1}
                            height="267.584"
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <g
                            id="SvgjsG1025"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1026"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                id="SvgjsText1028"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={0}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1029">Dec 01</tspan>
                                <title>Dec 01</title>
                              </text>
                              <text
                                id="SvgjsText1031"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={58}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1032">Dec 02</tspan>
                                <title>Dec 02</title>
                              </text>
                              <text
                                id="SvgjsText1034"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={116}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1035">Dec 03</tspan>
                                <title>Dec 03</title>
                              </text>
                              <text
                                id="SvgjsText1037"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={174}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1038">Dec 04</tspan>
                                <title>Dec 04</title>
                              </text>
                              <text
                                id="SvgjsText1040"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={232}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1041">Dec 05</tspan>
                                <title>Dec 05</title>
                              </text>
                              <text
                                id="SvgjsText1043"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={290}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1044">Dec 06</tspan>
                                <title>Dec 06</title>
                              </text>
                              <text
                                id="SvgjsText1046"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={348}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1047">Dec 07</tspan>
                                <title>Dec 07</title>
                              </text>
                              <text
                                id="SvgjsText1049"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={406}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1050">Dec 08</tspan>
                                <title>Dec 08</title>
                              </text>
                              <text
                                id="SvgjsText1052"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={464}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1053">Dec 09 </tspan>
                                <title>Dec 09 </title>
                              </text>
                              <text
                                id="SvgjsText1055"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={522}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1056">Dec 10</tspan>
                                <title>Dec 10</title>
                              </text>
                              <text
                                id="SvgjsText1058"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={580}
                                y="296.584"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1059">Dec 11</tspan>
                                <title>Dec 11</title>
                              </text>
                            </g>
                            <line
                              id="SvgjsLine1060"
                              x1={0}
                              y1="268.584"
                              x2={580}
                              y2="268.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeWidth={1}
                            />
                          </g>
                          <g id="SvgjsG1093" className="apexcharts-grid">
                            <g
                              id="SvgjsG1094"
                              className="apexcharts-gridlines-horizontal"
                            >
                              <line
                                id="SvgjsLine1107"
                                x1={0}
                                y1={0}
                                x2={580}
                                y2={0}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1108"
                                x1={0}
                                y1="44.59733333333333"
                                x2={580}
                                y2="44.59733333333333"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1109"
                                x1={0}
                                y1="89.19466666666666"
                                x2={580}
                                y2="89.19466666666666"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1110"
                                x1={0}
                                y1="133.792"
                                x2={580}
                                y2="133.792"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1111"
                                x1={0}
                                y1="178.38933333333333"
                                x2={580}
                                y2="178.38933333333333"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1112"
                                x1={0}
                                y1="222.98666666666665"
                                x2={580}
                                y2="222.98666666666665"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1113"
                                x1={0}
                                y1="267.584"
                                x2={580}
                                y2="267.584"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g
                              id="SvgjsG1095"
                              className="apexcharts-gridlines-vertical"
                            />
                            <line
                              id="SvgjsLine1096"
                              x1={0}
                              y1="268.584"
                              x2={0}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1097"
                              x1={58}
                              y1="268.584"
                              x2={58}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1098"
                              x1={116}
                              y1="268.584"
                              x2={116}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1099"
                              x1={174}
                              y1="268.584"
                              x2={174}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1100"
                              x1={232}
                              y1="268.584"
                              x2={232}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1101"
                              x1={290}
                              y1="268.584"
                              x2={290}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1102"
                              x1={348}
                              y1="268.584"
                              x2={348}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1103"
                              x1={406}
                              y1="268.584"
                              x2={406}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1104"
                              x1={464}
                              y1="268.584"
                              x2={464}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1105"
                              x1={522}
                              y1="268.584"
                              x2={522}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1106"
                              x1={580}
                              y1="268.584"
                              x2={580}
                              y2="274.584"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1115"
                              x1={0}
                              y1="267.584"
                              x2={580}
                              y2="267.584"
                              stroke="transparent"
                              strokeDasharray={0}
                            />
                            <line
                              id="SvgjsLine1114"
                              x1={0}
                              y1={1}
                              x2={0}
                              y2="267.584"
                              stroke="transparent"
                              strokeDasharray={0}
                            />
                          </g>
                          <g
                            id="SvgjsG1014"
                            className="apexcharts-area-series apexcharts-plot-series"
                          >
                            <g id="SvgjsG1015" className="apexcharts-series">
                              <path
                                id="SvgjsPath1018"
                                d="M0 267.584L0 71.35573333333335C20.299999999999997 71.35573333333335 37.7 22.298666666666662 58 22.298666666666662C78.3 22.298666666666662 95.7 129.33226666666667 116 129.33226666666667C136.3 129.33226666666667 153.7 57.97653333333332 174 57.97653333333332C194.3 57.97653333333332 211.7 129.33226666666667 232 129.33226666666667C252.3 129.33226666666667 269.7 75.81546666666668 290 75.81546666666668C310.3 75.81546666666668 327.7 151.63093333333333 348 151.63093333333333C368.3 151.63093333333333 385.7 84.73493333333334 406 84.73493333333334C426.3 84.73493333333334 443.7 129.33226666666667 464 129.33226666666667C484.3 129.33226666666667 501.7 57.97653333333332 522 57.97653333333332C542.3 57.97653333333332 559.7 120.4128 580 120.4128C580 120.4128 580 120.4128 580 267.584M580 120.4128C580 120.4128 580 120.4128 580 120.4128 "
                                fill="rgba(0,143,251,0.35)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                clipPath="url(#gridRectMask58yhdkm7)"
                              />
                              <path
                                id="SvgjsPath1019"
                                d="M0 71.35573333333335C20.299999999999997 71.35573333333335 37.7 22.298666666666662 58 22.298666666666662C78.3 22.298666666666662 95.7 129.33226666666667 116 129.33226666666667C136.3 129.33226666666667 153.7 57.97653333333332 174 57.97653333333332C194.3 57.97653333333332 211.7 129.33226666666667 232 129.33226666666667C252.3 129.33226666666667 269.7 75.81546666666668 290 75.81546666666668C310.3 75.81546666666668 327.7 151.63093333333333 348 151.63093333333333C368.3 151.63093333333333 385.7 84.73493333333334 406 84.73493333333334C426.3 84.73493333333334 443.7 129.33226666666667 464 129.33226666666667C484.3 129.33226666666667 501.7 57.97653333333332 522 57.97653333333332C542.3 57.97653333333332 559.7 120.4128 580 120.4128C580 120.4128 580 120.4128 580 120.4128 "
                                fill="none"
                                fillOpacity={1}
                                stroke="#008ffb"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={5}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                clipPath="url(#gridRectMask58yhdkm7)"
                              />
                              <g
                                id="SvgjsG1016"
                                className="apexcharts-series-markers-wrap"
                              >
                                <g className="apexcharts-series-markers">
                                  <circle
                                    id="SvgjsCircle1121"
                                    r={0}
                                    cx={580}
                                    cy="120.4128"
                                    className="apexcharts-marker w8opi6be8"
                                    stroke="#ffffff"
                                    fill="#008ffb"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1020"
                            className="apexcharts-line-series apexcharts-plot-series"
                          >
                            <g id="SvgjsG1021" className="apexcharts-series">
                              <path
                                id="SvgjsPath1024"
                                d="M0 83.62C20.299999999999997 83.62 37.7 36.79280000000003 58 36.79280000000003C78.3 36.79280000000003 95.7 117.06800000000001 116 117.06800000000001C136.3 117.06800000000001 153.7 63.55120000000002 174 63.55120000000002C194.3 63.55120000000002 211.7 123.75760000000002 232 123.75760000000002C252.3 123.75760000000002 269.7 86.96480000000003 290 86.96480000000003C310.3 86.96480000000003 327.7 143.8264 348 143.8264C368.3 143.8264 385.7 93.65440000000001 406 93.65440000000001C426.3 93.65440000000001 443.7 120.4128 464 120.4128C484.3 120.4128 501.7 63.55120000000002 522 63.55120000000002C542.3 63.55120000000002 559.7 123.75760000000002 580 123.75760000000002C580 123.75760000000002 580 123.75760000000002 580 123.75760000000002 "
                                fill="none"
                                fillOpacity={1}
                                stroke="rgba(0,227,150,1)"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={5}
                                strokeDasharray={0}
                                className="apexcharts-line"
                                clipPath="url(#gridRectMask58yhdkm7)"
                              />
                              <g
                                id="SvgjsG1022"
                                className="apexcharts-series-markers-wrap"
                              >
                                <g className="apexcharts-series-markers">
                                  <circle
                                    id="SvgjsCircle1122"
                                    r={0}
                                    cx={580}
                                    cy="123.75760000000002"
                                    className="apexcharts-marker wpjd7ayvt"
                                    stroke="#ffffff"
                                    fill="#00e396"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1017"
                              className="apexcharts-datalabels"
                            />
                            <g
                              id="SvgjsG1023"
                              className="apexcharts-datalabels"
                            />
                          </g>
                          <line
                            id="SvgjsLine1116"
                            x1={0}
                            y1={0}
                            x2={580}
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1117"
                            x1={0}
                            y1={0}
                            x2={580}
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            id="SvgjsG1118"
                            className="apexcharts-yaxis-annotations"
                          />
                          <g
                            id="SvgjsG1119"
                            className="apexcharts-xaxis-annotations"
                          />
                          <g
                            id="SvgjsG1120"
                            className="apexcharts-point-annotations"
                          />
                        </g>
                        <rect
                          id="SvgjsRect1010"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                        />
                        <g
                          id="SvgjsG1061"
                          className="apexcharts-yaxis"
                          transform="translate(56.83333333333333, 0)"
                        >
                          <g
                            id="SvgjsG1062"
                            className="apexcharts-yaxis-texts-g"
                          >
                            <text
                              id="SvgjsText1063"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="31.6"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1064">60</tspan>
                              <title>60</title>
                            </text>
                            <text
                              id="SvgjsText1065"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="76.19733333333332"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1066">50</tspan>
                              <title>50</title>
                            </text>
                            <text
                              id="SvgjsText1067"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="120.79466666666664"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1068">40</tspan>
                              <title>40</title>
                            </text>
                            <text
                              id="SvgjsText1069"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="165.39199999999997"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1070">30</tspan>
                              <title>30</title>
                            </text>
                            <text
                              id="SvgjsText1071"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="209.9893333333333"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1072">20</tspan>
                              <title>20</title>
                            </text>
                            <text
                              id="SvgjsText1073"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="254.58666666666662"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1074">10</tspan>
                              <title>10</title>
                            </text>
                            <text
                              id="SvgjsText1075"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={20}
                              y="299.18399999999997"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1076">0</tspan>
                              <title>0</title>
                            </text>
                          </g>
                          <g id="SvgjsG1077" className="apexcharts-yaxis-title">
                            <text
                              id="SvgjsText1078"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="13.991668701171875"
                              y="163.792"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={900}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-title-text "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                              transform="rotate(-90 -13.008331298828125 159.79200744628906)"
                            >
                              Series A
                            </text>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1079"
                          className="apexcharts-yaxis"
                          transform="translate(697.8333333333334, 0)"
                        >
                          <g
                            id="SvgjsG1080"
                            className="apexcharts-yaxis-texts-g"
                          >
                            <text
                              id="SvgjsText1081"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={-20}
                              y="31.4"
                              textAnchor="start"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1082">80</tspan>
                              <title>80</title>
                            </text>
                            <text
                              id="SvgjsText1083"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={-20}
                              y="98.296"
                              textAnchor="start"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1084">60</tspan>
                              <title>60</title>
                            </text>
                            <text
                              id="SvgjsText1085"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={-20}
                              y="165.192"
                              textAnchor="start"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1086">40</tspan>
                              <title>40</title>
                            </text>
                            <text
                              id="SvgjsText1087"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={-20}
                              y="232.088"
                              textAnchor="start"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1088">20</tspan>
                              <title>20</title>
                            </text>
                            <text
                              id="SvgjsText1089"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={-20}
                              y="298.984"
                              textAnchor="start"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              <tspan id="SvgjsTspan1090">0</tspan>
                              <title>0</title>
                            </text>
                          </g>
                          <g id="SvgjsG1091" className="apexcharts-yaxis-title">
                            <text
                              id="SvgjsText1092"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="56.03333282470703"
                              y="163.792"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={900}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-title-text "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                              transform="rotate(90 29.03333282470703 159.79200744628906)"
                            >
                              Series B
                            </text>
                          </g>
                        </g>
                        <g id="SvgjsG1004" className="apexcharts-annotations" />
                      </svg>
                      <div
                        className="apexcharts-tooltip apexcharts-theme-light"
                        style={{ left: "497.833px", top: "123.413px" }}
                      >
                        <div
                          className="apexcharts-tooltip-title"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12,
                          }}
                        >
                          Dec 11
                        </div>
                        <div
                          className="apexcharts-tooltip-series-group apexcharts-active"
                          style={{ order: 1, display: "flex" }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(0, 143, 251)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12,
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label">
                                TEAM A:{" "}
                              </span>
                              <span className="apexcharts-tooltip-text-y-value">
                                33 points
                              </span>
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="apexcharts-tooltip-series-group apexcharts-active"
                          style={{ order: 2, display: "flex" }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(0, 227, 150)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12,
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label">
                                TEAM B:{" "}
                              </span>
                              <span className="apexcharts-tooltip-text-y-value">
                                43 points
                              </span>
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"
                        style={{ left: "636.333px", top: "299.584px" }}
                      >
                        <div
                          className="apexcharts-xaxistooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12,
                            minWidth: 52,
                          }}
                        >
                          Dec 11
                        </div>
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-1 apexcharts-yaxistooltip-right apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                      <div
                        className="apexcharts-toolbar"
                        style={{ top: 0, right: 3 }}
                      >
                        <div className="apexcharts-menu-icon" title="Menu">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                          </svg>
                        </div>
                        <div className="apexcharts-menu">
                          <div
                            className="apexcharts-menu-item exportSVG"
                            title="Download SVG"
                          >
                            Download SVG
                          </div>
                          <div
                            className="apexcharts-menu-item exportPNG"
                            title="Download PNG"
                          >
                            Download PNG
                          </div>
                          <div
                            className="apexcharts-menu-item exportCSV"
                            title="Download CSV"
                          >
                            Download CSV
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white shadow-lg"
                    id="chartpie"
                    style={{ minHeight: "351.2px" }}
                  >
                    <div
                      id="apexchartsg55i6rcu"
                      className="apexcharts-canvas apexchartsg55i6rcu apexcharts-theme-light"
                      style={{ width: 786, height: "351.2px" }}
                    >
                      <svg
                        id="SvgjsSvg1123"
                        width={786}
                        height="351.20001220703125"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg"
                        transform="translate(0, 0)"
                        style={{
                          background: "transparent none repeat scroll 0% 0%",
                        }}
                      >
                        <g
                          id="SvgjsG1125"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(231, 0)"
                        >
                          <defs id="SvgjsDefs1124">
                            <clipPath id="gridRectMaskg55i6rcu">
                              <rect
                                id="SvgjsRect1127"
                                width={332}
                                height={350}
                                x={-3}
                                y={-1}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMaskg55i6rcu" />
                            <clipPath id="nonForecastMaskg55i6rcu" />
                            <clipPath id="gridRectMarkerMaskg55i6rcu">
                              <rect
                                id="SvgjsRect1128"
                                width={330}
                                height={352}
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                          </defs>
                          <g id="SvgjsG1129" className="apexcharts-radialbar">
                            <g id="SvgjsG1130">
                              <g id="SvgjsG1131" className="apexcharts-tracks">
                                <g
                                  id="SvgjsG1132"
                                  className="apexcharts-radialbar-track apexcharts-track"
                                >
                                  <path
                                    id="apexcharts-radialbarTrack-0"
                                    d="M 163 30.429268292682934 A 132.57073170731707 132.57073170731707 0 1 1 162.97686204251673 30.429270311850644"
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="rgba(242,242,242,0.85)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="9.993365853658537"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1134"
                                  className="apexcharts-radialbar-track apexcharts-track"
                                >
                                  <path
                                    id="apexcharts-radialbarTrack-1"
                                    d="M 163 45.73170731707317 A 117.26829268292683 117.26829268292683 0 1 1 162.9795328219488 45.7317091031714"
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="rgba(242,242,242,0.85)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="9.993365853658537"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1136"
                                  className="apexcharts-radialbar-track apexcharts-track"
                                >
                                  <path
                                    id="apexcharts-radialbarTrack-2"
                                    d="M 163 61.03414634146341 A 101.96585365853659 101.96585365853659 0 1 1 162.98220360138086 61.034147894492165"
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="rgba(242,242,242,0.85)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="9.993365853658537"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1138"
                                  className="apexcharts-radialbar-track apexcharts-track"
                                >
                                  <path
                                    id="apexcharts-radialbarTrack-3"
                                    d="M 163 76.33658536585365 A 86.66341463414635 86.66341463414635 0 1 1 162.9848743808129 76.33658668581293"
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="rgba(242,242,242,0.85)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="9.993365853658537"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area"
                                  />
                                </g>
                              </g>
                              <g id="SvgjsG1140">
                                <g
                                  id="SvgjsG1145"
                                  className="apexcharts-series apexcharts-radial-series"
                                >
                                  <path
                                    id="SvgjsPath1146"
                                    d="M 163 30.429268292682934 A 132.57073170731707 132.57073170731707 0 0 1 212.66187019153287 285.91744202712965"
                                    fill="none"
                                    fillOpacity="0.85"
                                    stroke="rgba(0,143,251,0.85)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="10.302439024390244"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1147"
                                  className="apexcharts-series apexcharts-radial-series"
                                >
                                  <path
                                    id="SvgjsPath1148"
                                    d="M 163 45.73170731707317 A 117.26829268292683 117.26829268292683 0 1 1 126.76210465964033 274.5287739109049"
                                    fill="none"
                                    fillOpacity="0.85"
                                    stroke="rgba(0,227,150,0.85)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="10.302439024390244"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area apexcharts-radialbar-slice-1"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1149"
                                  className="apexcharts-series apexcharts-radial-series"
                                >
                                  <path
                                    id="SvgjsPath1150"
                                    d="M 163 61.03414634146341 A 101.96585365853659 101.96585365853659 0 1 1 73.81865493495225 212.43402679028873"
                                    fill="none"
                                    fillOpacity="0.85"
                                    stroke="rgba(254,176,25,0.85)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="10.302439024390244"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area apexcharts-radialbar-slice-2"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1151"
                                  className="apexcharts-series apexcharts-radial-series"
                                >
                                  <path
                                    id="SvgjsPath1152"
                                    d="M 163 76.33658536585365 A 86.66341463414635 86.66341463414635 0 1 1 87.20246967298289 120.98474286196867"
                                    fill="none"
                                    fillOpacity="0.85"
                                    stroke="rgba(255,69,96,0.85)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="10.302439024390244"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area apexcharts-radialbar-slice-3"
                                  />
                                </g>
                                <circle
                                  id="SvgjsCircle1141"
                                  r="76.66673170731707"
                                  cx={163}
                                  cy={163}
                                  className="apexcharts-radialbar-hollow"
                                  fill="transparent"
                                />
                                <g
                                  id="SvgjsG1142"
                                  className="apexcharts-datalabels-group"
                                  transform="translate(0, 0) scale(1)"
                                  style={{ opacity: 1 }}
                                >
                                  <text
                                    id="SvgjsText1143"
                                    fontFamily="Helvetica, Arial, sans-serif"
                                    x={163}
                                    y={163}
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="16px"
                                    fontWeight={600}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-datalabel-label"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                    }}
                                  >
                                    Total
                                  </text>
                                  <text
                                    id="SvgjsText1144"
                                    fontFamily="Helvetica, Arial, sans-serif"
                                    x={163}
                                    y={195}
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="16px"
                                    fontWeight={400}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-datalabel-value"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                    }}
                                  >
                                    249
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                          <line
                            id="SvgjsLine1153"
                            x1={0}
                            y1={0}
                            x2={326}
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1154"
                            x1={0}
                            y1={0}
                            x2={326}
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            className="apexcharts-ycrosshairs-hidden"
                          />
                        </g>
                        <g id="SvgjsG1126" className="apexcharts-annotations" />
                      </svg>
                      <div className="apexcharts-legend" />
                    </div>
                  </div>
                  <div className="resize-triggers">
                    <div className="expand-trigger">
                      <div style={{ width: 1581, height: 383 }} />
                    </div>
                    <div className="contract-trigger" />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </DashboardContainer>
  );
}
