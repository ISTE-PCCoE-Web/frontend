import React from 'react';
import { Box, Flex, Img, Stack, Text, Button } from '@chakra-ui/react';

const EventsCard = ({ img, eventTitle, eventDescription, eventType }:any) => {
  return (
    <Flex w="100%" padding="1rem" justifyContent="space-between" alignItems="center">
        <Img src={img} alt="event-poster" width="50%"/>
        <Stack width="50%" justifyContent="center">
            <Text fontSize="28px" fontWeight="bold">{eventTitle}</Text>
            <Text fontSize="18px">{eventDescription}</Text>
            {eventType === "past" ? (
                <Button>View Event</Button>
            ) : (eventType == "ongoing") ? (
                <Button>Register</Button>
            ) : (
                <Button>View Timeline</Button>
            )}
        </Stack>
    </Flex>
  )
}

export default EventsCard