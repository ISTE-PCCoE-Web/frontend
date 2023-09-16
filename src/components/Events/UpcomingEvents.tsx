//@ts-nocheck
import React from 'react'
import EventCard from './EventCard';
import './upcomingEvents.css'
import {UpEventsDesc} from '../../data/UpEventsDesc'

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

export default function UpcomingEvents({DescArray}) {
    // console.log(UpEventsDesc);
    const keys = Object.keys(UpEventsDesc[0]);
    console.log(keys);
    UpEventsDesc.map((desc)=>{
        console.log(desc);
    })

    return (

        <div className='UpcomingContainer'>
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
                        Upcoming Events
                    </Text>
                </Heading>
            </Stack>
            {UpEventsDesc.map((Desc)=>(
                <EventCard CardData = {Desc}/>
            ))}

        </div>
    )
}