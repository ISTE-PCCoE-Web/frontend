//@ts-nocheck
'use client'
import debate from '../../img/Events/Debate.png'
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Button,
  Link,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  background,
} from '@chakra-ui/react'

export default function EventCard(props) {
  console.log(props);
  const keys = Object.keys(props.CardData);
  console.log(keys);
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
        src={props.CardData.poster}
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
          >
            {props.CardData.eventTitle}
          </Heading>

          <Text
            py='4'
            fontWeight={'100'}
            letterSpacing={'1px'}
          >
            {props.CardData.eventDesc}
          </Text>
        </CardBody>

        <CardFooter>
          <Link href={"events/"+ props.CardData.eventSlug}>
            <Button
              marginRight={'1em'}
              colorScheme='cyan'
              _hover={{
                background: 'rgba(0,0,0,0.2)',
              }}
            >
              About Event
            </Button>
          </Link>
          <Link href={props.CardData.registration} isExternal>
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
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  )
}
