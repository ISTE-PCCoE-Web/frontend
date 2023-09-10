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
      fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
      lineHeight={'110%'}
      {...rest}
    >
      <Text
        fontSize={{ base: '2.5rem', sm: '2.2rem', md: '2.5rem', lg: '50px' }}
        color="white"
        fontWeight="semi-bold"
      >
        {` ${teamName}`+` Team`}
      </Text>
    </Heading>
  );
};

export default HeadDesign;
