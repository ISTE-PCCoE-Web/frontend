import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';


const CellCard = ({cellIcon, cellName, cellInfo, bgColor,...props} : any) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <Box 
      as={motion.div}
      minWidth="280px"
      minHeight="200px"
      maxWidth="450px"
      maxHeight="300px"
      onClick={() => setSelected(!selected)}
      animate= {{
        rotateY : selected ? 180 : 0,
      }}
      whileHover={{ scale: 1.05, backgroundColor: bgColor }}
      transition={{ duration: "5s" }}
      borderRadius="1.5rem"
      {...props}
    >
      {!selected ? (
        <Flex justifyContent="center" alignItems="center" flexDir="column" w="100%" h="100%" padding="1rem">
          <Img src={cellIcon} alt={"cell-icon"} w={{base: "70%", sm: "60%", md:"50%"}} h="100%"/>
          <Heading as="h5" fontSize={{base: "24px", md:"30px"}} textAlign="center" mt="auto">{cellName}</Heading>
        </Flex>
      ) : (
        <Box h="100%" as={motion.div} animate={{rotateY : selected ? 180 : 0,}} padding="1rem" borderRadius="1.5rem" display="flex" gap="1.5rem" justifyContent="center" alignItems="center" bg={bgColor} flexDir="column">
          <Text textAlign="center" fontWeight="semibold">{cellInfo}</Text>
          <Button>View Activities</Button>
        </Box>
      )}
      
    </Box>
  )
}

export default CellCard;