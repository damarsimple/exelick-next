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
import { Purchase } from "../../types/type";
import { formatCurrency } from "../../helpers/formatter";
const DonationImage = ({ purchase }: { purchase: Purchase }) => {
  return (
    <div className="flex justify-center m-10">
      <div>
        <ImageContainer
          fallback="profile"
          className="rounded-full h-24 w-24 "
          src={"/gura-headpat-gawr-gura.gif"}
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

const DonationMessage = ({ purchase }: { purchase: Purchase }) => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { transform: "scale(1.3)" },
    to: { transform: "scale(1.5)" },
  });

  return (
    <div className="flex justify-center m-2">
      <animated.div style={styles}>
        <div className="font-semibold p-4 text-center text-white">
          {purchase.message}
        </div>
      </animated.div>
    </div>
  );
};
const DonationBox = ({ purchase }: { purchase: Purchase }) => {
  const [toggle, setToggle] = useState(false);
  const styles = useSpring({
    loop: { reverse: true },
    from: { transform: "scale(0.9)" },
    to: { transform: "scale(1.1)" },
  });

  return (
    <div>
      <animated.div>
        <DonationImage purchase={purchase} />
        <div className="shadow-lg rounded p-4 text-center bg-white border-2 border-red-300">
          <span className="font-bold text-red-600">
            {purchase.anonymous_name}
          </span>{" "}
          memberikan donasi sebesar{" "}
          <span className="font-bold text-red-600">
            {formatCurrency(purchase.total)}
          </span>
        </div>
        <DonationMessage purchase={purchase} />
      </animated.div>
    </div>
  );
};

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

function Notifications({ router }: { router: NextRouter }) {
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
    setTimeout(() => {
      setShow(false);
    }, 5000);
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

  useEffect(() => {
    if (!key) return;
    const ec = echo.channel("stream-key-" + key);
    ec.listen("PurchasePaid", ({ purchase }: { purchase: Purchase }) =>
      setNewQueues([...newQueues, purchase])
    ).listen("PurchasePaidTest", ({ purchase }: { purchase: Purchase }) =>
      setNewQueues([...newQueues, purchase])
    );

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
            {currentDonation && <DonationBox purchase={currentDonation} />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default withRouter(Notifications);
