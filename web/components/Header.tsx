import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerDirection: -1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="sticky top-0 max-w-7xl mx-auto flex  justify-between z-20 p-5"
    >
      <motion.div
        className="flex"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <SocialIcon
            url="https://twitter.com/"
            bgColor="transparent"
            fgColor="gray"
          />
        </motion.div>
        <motion.div variants={item}>
          <SocialIcon
            url="https://youtube.com/"
            bgColor="transparent"
            fgColor="gray"
          />
        </motion.div>
        <motion.div variants={item}>
          <SocialIcon
            url="https://instagram.com/"
            bgColor="transparent"
            fgColor="gray"
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex items-center">
        <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </motion.header>
  );
}

export default Header;
