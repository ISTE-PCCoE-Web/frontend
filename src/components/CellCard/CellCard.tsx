import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';


const CellCard = ({cellIcon, cellName, cellInfo, ...props} : any) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <Box 
      as={motion.div}
      padding="1rem"
      minWidth="280px"
      minHeight="200px"
      onClick={() => setSelected(!selected)}
      animate= {{
        rotateY : selected ? 180 : 0,
      }}
      borderRadius="1.5rem"
      {...props}
    >
      {!selected ? (
        <Flex justifyContent="center" alignItems="center" flexDir="column">
          <Img src={cellIcon} alt={"cell-icon"} w="50%"/>
          <Heading as="h4">{cellName}</Heading>
        </Flex>
      ) : (
        <Box h="100%" as={motion.div} animate={{rotateY : selected ? 180 : 0,}} display="flex" gap="1.5rem" justifyContent="center" alignItems="center" flexDir="column">
          <Text textAlign="center" fontWeight="semibold">{cellInfo}</Text>
          <Button>View Activities</Button>
        </Box>
      )}
      
    </Box>
  )
}

export default CellCard;