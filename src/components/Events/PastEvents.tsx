import React from 'react'
import EventCard from './EventCard';
import './pastEvents.css'




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

export default function PastEvents() {
    return (

        <div className='PastContainer'>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                paddingTop={{ base: 0, md: '3em' }}
                paddingBottom={{ base: 10, md: '4em' }}
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}>
                    <Text 
                    maxW={'5xl'} 
                    as={'span'} 
                    color={'white'}
                    fontFamily={'sans-serif'}
                    fontWeight={'100'}
                    letterSpacing={'1px'}
                    >
                        Past Events
                    </Text>
                </Heading>
            </Stack>
            <EventCard />
            <EventCard />
            <EventCard />

        </div>
    )
}
