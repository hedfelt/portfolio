import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ellipseVariants = {
  start: {
    d: "M99.5 45C99.5 69.5284 77.389 89.5 50 89.5C22.611 89.5 0.5 69.5284 0.5 45C0.5 20.4716 22.611 0.5 50 0.5C77.389 0.5 99.5 20.4716 99.5 45Z",
  },
  end: {
    d: "M85.5 34C85.5 45.5 83 51 63 73.5C43 96 17 70.5 4 46C-9 21.5 12 -8.49999 41.5 2.5C71 13.5 85.5 22.5 85.5 34Z",
  },
};

export default function Hero({}: Props) {
  return (
    <section className="snap-center grid mx-auto max-w-7xl place-items-center h-screen">
      <h1 className="col-start-0 col-end-1 row-start-0 row-end-1 z-10 text-lg text-white">
        The name is Hanne Edfelt
      </h1>
      <motion.svg
        className="max-w-md col-start-0 col-end-1 row-start-0 row-end-1 z-5"
        width="100%"
        height="auto"
        initial="start"
        viewBox="0 0 100 100"
        fill="none"
        whileInView="end"
      >
        <motion.path
          variants={ellipseVariants}
          transition={{
            duration: 5,
            yoyo: Infinity,
            repeat: Infinity,
          }}
          className="fill-blue-500"
        />
      </motion.svg>
    </section>
  );
}
