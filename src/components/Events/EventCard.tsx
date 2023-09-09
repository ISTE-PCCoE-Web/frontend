'use client'
import debate from '../../img/Events/Debate.png'
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  background,
} from '@chakra-ui/react'

export default function EventCard() {

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      maxW={'800px'}
      marginLeft={'auto'}
      marginRight={'auto'}
      marginBottom={'3em'}
      borderColor={'rgba(255, 255, 255, 0.1)'}
      bg={'rgba(43,241,251,0.05)'}
      color={'white'}
      backdropFilter={'auto'}
      backdropBlur={'4px'}
      bgGradient={'linear(to-br, rgba(15, 100, 155, 0.1), rgba(15, 100, 155, 0.05))'}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '300px' }}
        src={debate}
        m={'1em'}
        borderRadius={'5px'}
        alt='Image'
      />

      <Stack >
        <CardBody>
          <Heading
            size='md'
            fontWeight={'bold'}
            letterSpacing={'1px'}
          >Tark Vitark</Heading>

          <Text
            py='4'
            fontWeight={'100'}
            letterSpacing={'1px'}
          >
            Talk your Mind out for this special event [Debate]. Don't be shy.
            Dont be shy. dont be shyyyyyy. Over & Out...
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            marginRight={'1em'}
            colorScheme='cyan'
            _hover={{
              background: 'rgba(0,0,0,0.2)',
            }}
          >
            About Event
          </Button>
          <Button
            variant='outline'
            marginRight={'1em'}
            colorScheme='cyan'
            _hover={{
              background: 'rgba(0,0,0,0.2)',
            }}
          >
            Register
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
