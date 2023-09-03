'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Frequent() {
  return (
    <Flex
      paddingTop={'5em'}
      paddingBottom={'5em'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('black', 'gray.800')}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" bg="black" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.900' }}>
              <Text fontSize="md" color="white">
                What is Technical debate about?
              </Text>
              <ChevronDownIcon fontSize="24px" color={'white'}/>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white">
                It's just a regular debate.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.900' }}>
              <Text fontSize="md" color="white">
                What are the prizes?
              </Text>
              <ChevronDownIcon fontSize="24px" color={'white'}/>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white">
                Goodies 
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.900' }}>
              <Text fontSize="md" color="white">
                What is the judging criteria?
              </Text>
              <ChevronDownIcon fontSize="24px" color={'white'}/>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white">
                Judges aren't decided yet.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}