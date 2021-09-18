/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-css-tags */
import { NextRouter } from "next/dist/client/router";
import Image from "next/image";
import withRouter from "next/dist/client/with-router";
import React, { useEffect, useState } from "react";
import {
  Transition,
  animated,
  config,
  useSpring,
  useTransition,
} from "react-spring";
import ImageContainer from "../../components/ImageContainer";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { __Directive } from "graphql";
import create from "zustand";
import echo from "../../services/echo";
import {
  Overlay,
  OverlayData,
  OverlayType,
  Purchase,
  User,
} from "../../types/type";
import { formatCurrency } from "../../helpers/formatter";
import { gql, useQuery } from "@apollo/client";
import { ALL_OVERLAY_DATA } from "../../fragments/fragments";
import { NextPageContext } from "next";
import { client } from "../_app";

const GET_ME_DATA = gql`
  ${ALL_OVERLAY_DATA}
  query GetMe($type: OverlayType!, $streamKey: String!) {
    userByStreamKey(stream_key: $streamKey) {
      id
      overlay(type: $type) {
        thumbnail {
          real_path
        }
        audio {
          real_path
        }
        metadata {
          ...AllOverlayData
        }
      }
    }
  }
`;
interface NotificationStore {
  queues: Purchase[];
  newQueues: Partial<Purchase>[];
  setQueues: (by: Purchase[]) => void;
  setNewQueues: (by: Partial<Purchase>[]) => void;
}

const useStore = create<NotificationStore>((set) => ({
  queues: [],
  newQueues: [],
  setQueues: (queues) => set({ queues }),
  setNewQueues: (newQueues) => set({ newQueues }),
}));

function Notifications({
  router,
  overlay: overlayData,
}: {
  router: NextRouter;
  overlay: Overlay;
}) {
  const { key, loop } = router.query;

  const { queues, newQueues, setNewQueues, setQueues } = useStore();

  const [currentDonation, setCurrentDonation] = useState<
    undefined | null | Purchase
  >(undefined);

  const [show, setShow] = useState(false);
  const [onAnimating, setOnAnimating] = useState(false);

  const nextDonation = () => {
    if (queues.length == 0) {
      setOnAnimating(false);
      setQueues([...(newQueues as Purchase[])]);
      setNewQueues([]);
      return;
    }
    setCurrentDonation(queues.pop());
    setShow(true);
    setOnAnimating(true);
    setTimeout(
      () => {
        setShow(false);
      },
      metadata?.duration ? metadata.duration * 1000 : 5000
    );
  };

  useEffect(() => {
    if (queues.length != 0) {
      nextDonation();
    }

    return () => {};
  }, [queues]);

  useEffect(() => {
    if (!onAnimating) {
      setQueues(newQueues as Purchase[]);
    }
  }, [onAnimating, newQueues]);

  const [overlayNewData, setOverlayNewData] = useState<
    null | Overlay | undefined
  >(null);

  const { data } = useQuery<{ userByStreamKey: User }>(GET_ME_DATA, {
    variables: { streamKey: key, type: OverlayType.Notification },
    fetchPolicy: "network-only",
  });

  const overlay =
    overlayNewData ?? data?.userByStreamKey?.overlay ?? (overlayData || {});

  const { metadata } = overlay;

  const color = metadata?.color ?? "rgba(220, 38, 38, var(--tw-text-opacity))";

  const Highlight = (e: { message: number | string | null }) => (
    <span
      className="font-bold pr-2"
      style={{
        color,
      }}
    >
      {e.message}
    </span>
  );

  const mapToComponent = (e: any) => {
    const message = e.extra == "currency" ? formatCurrency(e.text) : e.text;
    if (e.type == "Highlight") {
      return <Highlight message={message} key={e.text} />;
    } else {
      return message + " ";
    }
  };

  const CompileMessage = ({ donation }: { donation: Purchase }) => {
    const target = metadata?.message;

    const maps: { [e: string]: string | undefined | null | number } = {
      name: donation.anonymous_name,
      total: donation.total,
    };

    const data = target?.split(" ").map((e) => {
      if (e[0] == "$") {
        return {
          type: "Highlight",
          text: maps[e.replace("$", "") as string] ?? "tidak terdefinisi",
          extra: e == "$total" ? "currency" : undefined,
        };
      } else {
        return {
          type: "text",
          text: e,
        };
      }
    });

    return (
      <>
        {(
          data ?? [
            {
              type: "Highlight",
              text: donation.anonymous_name,
            },
            {
              type: "text",
              text: "Seseorang memberikan donasi sebesar",
            },
            {
              type: "Highlight",
              extra: "currency",
              text: donation.total,
            },
          ]
        ).map(mapToComponent)}
      </>
    );
  };

  useEffect(() => {
    if (!key) return;

    const ec = echo.channel("stream-key-" + key);

    ec.listen("PurchasePaid", ({ purchase }: { purchase: Purchase }) =>
      setNewQueues([...newQueues, purchase])
    )
      .listen("PurchasePaidTest", ({ purchase }: { purchase: Purchase }) =>
        setNewQueues([...newQueues, purchase])
      )
      .listen("AttributeOverlayUpdate", ({ overlay }: { overlay: Overlay }) => {
        setOverlayNewData(overlay);
      });

    return () => {};
  }, [key]);

  useEffect(() => {
    if (loop) {
      setInterval(
        () =>
          setNewQueues([
            ...newQueues,
            { anonymous_name: "Seseorang", total: 69420, message: "Nice" },
          ]),
        5000
      );
    }
  }, [loop]);

  const styles = useSpring({
    loop: { reverse: true },
    from: { transform: "scale(1.3)" },
    to: { transform: "scale(1.5)" },
  });

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/overlays.css" />
      </Head>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={nextDonation}
      >
        {show && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {
                y: "-90vh",
                opacity: 0,
              },
              visible: {
                y: "0",
                opacity: 1,
                transition: {
                  duration: 0.1,
                  type: "spring",
                  damping: 25,
                  stiffness: 500,
                },
              },
              exit: { y: "90vh", opacity: 0 },
            }}
          >
            {currentDonation && (
              <div>
                <animated.div>
                  <div className="flex justify-center m-10">
                    <div>
                      {overlay.thumbnail?.real_path && (
                        <ImageContainer
                          src={overlay.thumbnail.real_path}
                          alt="Picture of the author"
                          width={200}
                          height={200}
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className="shadow-lg rounded p-4 text-center bg-white border-2"
                    style={{
                      borderColor: color,
                    }}
                  >
                    <p>
                      <CompileMessage donation={currentDonation} />
                    </p>
                  </div>
                  <div className="flex justify-center m-2">
                    <animated.div style={styles}>
                      <div
                        className="font-semibold p-4 text-center"
                        style={{
                          color,
                        }}
                      >
                        {currentDonation.message}
                      </div>
                    </animated.div>
                  </div>{" "}
                </animated.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { key, loop } = context.query;

  const { data } = await client.query({
    variables: { streamKey: key, type: OverlayType.Notification },
    query: GET_ME_DATA,
  });

  return {
    props: {
      overlay: data.userByStreamKey.overlay,
    }, // will be passed to the page component as props
  };
}

export default withRouter(Notifications);
