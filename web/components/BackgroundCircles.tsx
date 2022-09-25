import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="grid mx-auto max-w-7xl place-items-center h-screen"
    >
      <div className="border border-[#333333] rounded-full h-[200px] w-[200px] col-start-0 col-end-1 row-start-0 row-end-1 animate-ping" />
      <div className="border border-[#333333] rounded-full h-[300px] w-[300px]  col-start-0 col-end-1 row-start-0 row-end-1" />
      <div className="border border-[#333333] rounded-full h-[500px] w-[500px]  col-start-0 col-end-1 row-start-0 row-end-1" />
      <div className="border border-[#F7AB0A] rounded-full h-[650px] w-[650px]  col-start-0 col-end-1 row-start-0 row-end-1 animate-pulse" />
      <div className="border border-[#333333] rounded-full h-[800px] w-[800px]  col-start-0 col-end-1 row-start-0 row-end-1" />
    </motion.div>
  );
};

export default BackgroundCircles;
