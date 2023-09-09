import React from "react";
import { Box, Link, Show, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

const ScrollDownIndicator = ({ targetSection } : any) => {
  const handleClick = () => {
    const nextSection = document.querySelector(targetSection);
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      position="absolute"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      zIndex="999"
      cursor="pointer"
    >
      <Show below="md">
        <Text fontSize="11px" fontWeight="regular" color="#fff" >Scroll Down</Text>
      </Show>
      <Box onClick={handleClick} display="flex" justifyContent="center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Box
            fontSize="3rem"
            color="#fff"
            as={ArrowDownIcon}
            aria-label="Scroll Down"
          />
        </motion.div>
      </Box>
    </Box>
  );
};



export default ScrollDownIndicator;