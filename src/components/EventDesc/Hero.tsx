'use client'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container bg={'black'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        paddingTop={{ base: 20, md: 28 }}
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
            Technical Debate   
          </Text>
        </Heading>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          lineHeight={'110%'}>
          <Text maxW={'5xl'} as={'span'} color={'white'}>
            <p>12 Sept</p>
          </Text>
          <Text maxW={'5xl'} as={'span'} color={'white'}>
            <p>2:00 PM - 5:00 PM</p>
          </Text>
        </Heading>
        {/* <Text color={'white'} maxW={'3xl'}>
        </Text> */}
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'cyan'}
            bg={'cyan.500'}
            _hover={{ bg: 'cyan.700' }}>
            Register
          </Button>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.500'}
            _hover={{ bg: 'orange.700' }}>
            Rules and Regulations
          </Button>
        </Stack>
        {/* <Flex w={'full'}>
          <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
        </Flex> */}
      </Stack>
    </Container>
  )
}