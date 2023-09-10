import React from 'react';
import {
  Heading,
  Text,
  BoxProps,
} from '@chakra-ui/react'; // Import necessary Chakra UI components

interface HeadDesignProps {
  teamName: string;
}

const HeadDesign: React.FC<HeadDesignProps & BoxProps> = ({ teamName, ...rest }) => {
  return (
    <Heading
      fontWeight={300}
      textAlign={'center'}
      p={'4em 1em 2em 1em'}
      fontSize={{ base: '15px', sm: '20px', md: '1em' }}
      // lineHeight={'110%'}
      {...rest}
    >
      <Text
        color="white"
        fontWeight="bold"
      >
        {` ${teamName}`+` Team`}
      </Text>
    </Heading>
  );
};

export default HeadDesign;
