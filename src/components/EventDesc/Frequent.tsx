//@ts-nocheck

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Frequent({Desc}) {
  return (
    <Flex
      paddingTop={'5em'}
      paddingBottom={'5em'}
      align={'center'}
      justify={'center'}
      bg={"#000018"}>
      <Container alignContent={'center'}>
        <Heading
          fontWeight={600}
          textAlign={'center'}
          paddingBottom={'1em'}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          lineHeight={'110%'}>
          <Text maxW={'5xl'} as={'span'} color={'white'}>
            FAQs
          </Text>
        </Heading>
        <Accordion allowMultiple width="100%" maxW="5xl" bg="#000018" rounded="lg">
          {Desc.FAQs.map((item)=>(<AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'blue.900' }}>
              <Text fontSize="md" color="white">
                {item.question}
              </Text>
              <ChevronDownIcon fontSize="24px" color={'white'} />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white">
              {item.answer}
              </Text>
            </AccordionPanel>
          </AccordionItem>))}
        </Accordion>
      </Container>
    </Flex>
  )
}