import Icon from "@chakra-ui/icon";
import { Box, Link, LinkProps } from "@chakra-ui/layout";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import { motion } from "framer-motion";

export default function DownArrow({ ...chakraProps }: LinkProps): JSX.Element {
  return (
    <Link {...chakraProps} href="#content">
      <MotionBox
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          loop: Infinity,
          fade: "fadeInOut",
          delay: 1,
        }}
      >
        <Icon color="orange.400" boxSize={8} as={BsChevronDown} />
      </MotionBox>
    </Link>
  );
}

const MotionBox = motion.custom(Box);
