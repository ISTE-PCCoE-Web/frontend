//@ts-nocheck
'use client'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Link, 
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';

export default function Hero({Desc}) {

  console.log(Desc);
  return (
    <Container bg={'#000018'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        paddingTop={{ base: 10, md: 18 }}
        paddingBottom={{ base: 10, md: 20 }}
        >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl'}}
          lineHeight={'110%'}>
          <Text maxW={'5xl'} as={'span'} color={'white'}>
            ISTE PCCOE Presents  
          </Text>
        </Heading>
        <Heading
          fontWeight={600}
          fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }}
          lineHeight={'110%'}>
          <Text maxW={'5xl'} as={'span'} color={'white'}>
            {Desc.eventTitle}
          </Text>
        </Heading>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          lineHeight={'110%'}>
          <Text maxW={'5xl'} as={'span'} color={'white'}>
            <p>{Desc.eventDay}</p>
          </Text>
          <Text maxW={'5xl'} as={'span'} color={'white'}>
            <p>{Desc.eventTime}</p>
          </Text>
        </Heading>
        {/* <Text color={'white'} maxW={'3xl'}>
        </Text> */}
        <Stack spacing={6} direction={'row'}>
          <Link href="https://forms.gle/xBPHrrTHdogEmV4W6" isExternal>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'cyan'}
            bg={'cyan.500'}
            _hover={{ bg: 'cyan.700' }}>
            Register
          </Button>
          </Link>
          <Link  href="https://forms.gle/68SA5WWtzWoyFPax5" isExternal>
          <Button
            variant={'outline'}
            rounded={'full'}
            px={6}
            colorScheme={'cyan'}
            _hover={{ bg: 'cyan.900' }}>
            Rules and Regulations
          </Button>
          </Link>
        </Stack>
        {/* <Flex w={'full'}>
          <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
        </Flex> */}
      </Stack>
    </Container>
  )
}