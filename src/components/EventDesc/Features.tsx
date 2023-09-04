'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

interface FeatureProps {
  title: string
  icon: ReactElement
}

const Feature = ({ title, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        margin={'auto'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'cyan.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} margin={'auto'} color={'white'}>{title}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box p={4} bg={'black'}
    paddingTop={'3em'}
    paddingBottom={'3em'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} margin={'auto'} maxW={'5xl'} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Improve your Presentation skills'}
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Free participation'}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Win exciting Goodies'}
        />
      </SimpleGrid>
    </Box>
  )
}