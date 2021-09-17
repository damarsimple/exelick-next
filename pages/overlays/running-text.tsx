/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Marquee from "react-fast-marquee";
import Head from "next/head";
export default function RunningText() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/overlays-text.css" />
      </Head>
      <Marquee className="fixed bottom-0" gradient={false}>
        <div className="bg-red-900 text-white font-semibold text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam
          sed veritatis? Nostrum perferendis amet optio molestiae et blanditiis.
          Beatae totam quaerat debitis. Quasi laborum quae, totam nobis
          recusandae libero, repellat quaerat consequuntur magnam beatae
          sapiente reprehenderit blanditiis quod corrupti at velit nihil
          eligendi sit voluptate rem vitae! Quis consequatur consequuntur
          aliquam odit nihil labore nam quam officia minus cumque, tempora
          doloribus est iure tenetur. Suscipit, tenetur illo sunt sit mollitia
          modi quis cumque quae aliquam deleniti harum consequuntur aspernatur.
          Atque tempore dolor magni exercitationem, voluptate temporibus totam
          veritatis dolore aperiam aut id commodi dolorum cupiditate eaque ipsa
          voluptates saepe!
        </div>
      </Marquee>
    </>
  );
}
