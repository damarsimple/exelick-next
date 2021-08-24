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

const DonationImage = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: -50 },
    to: { x: 50 },
  });

  return (
    <div className="flex justify-center m-10">
      <animated.div style={styles}>
        <ImageContainer
          fallback="profile"
          className="rounded-full h-24 w-24 "
          src="https://trakteer.id/storage/images/avatar/ava-kqwK2sVxMEXfACgq0luplMIrcWAm9eGA1617518306.jpg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </animated.div>
    </div>
  );
};

const DonationMessage = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { transform: "scale(1.3)" },
    to: { transform: "scale(1.5)" },
  });

  return (
    <div className="flex justify-center m-2">
      <animated.div style={styles}>
        <div className="font-semibold p-4 text-center text-white">
          Terimakasih dan terus berkarya
        </div>
      </animated.div>
    </div>
  );
};

const DonationBox = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div>
        <DonationImage />
        <div className="shadow rounded p-4 text-center bg-white">
          Seseorang memberikan donasi sebesar Rp 10.000
        </div>
        <DonationMessage />
      </div>
      {/* <Transition
        items={toggle}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        reverse={toggle}
        config={config.default}
        onRest={() => setToggle(!toggle)}
      >
        {({ opacity }, item) => (
          <animated.div
            style={{
              position: "absolute",
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}
          >
            <DonationImage />
            <div className="shadow rounded p-4 text-center bg-white">
              Seseorang memberikan donasi sebesar Rp 10.000
            </div>
            <DonationMessage />
          </animated.div>
        )}
      </Transition> */}
    </div>
  );
};

function Notifications({ router }: { router: NextRouter }) {
  const { key } = router.query;

  const [show, setShow] = useState(true);

  // useEffect(() => {
  // setInterval(() => setShow(!show), 3000);
  // });

  return <div className="m-4">{show && <DonationBox />}</div>;
}

export default withRouter(Notifications);
