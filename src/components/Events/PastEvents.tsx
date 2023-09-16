//@ts-nocheck
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


export default function PastEvents({DescArray}) {
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
                        fontSize={{ base: "2.5rem", sm: "2.2rem", md: "2.5rem", lg: "50px" }}
                        color = "white"
                        fontWeight="bold"
                    >
                        Past Events
                    </Text>
                </Heading>
            </Stack>
            {/* {DescArray!=undefined && DescArray.map((Desc)=>(
                // <EventCard cardData = {Desc}/>
            ))} */}
        </div>
    )
}
