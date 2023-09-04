import React from 'react';
import { Box, Flex, Img, Stack, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const EventsCard = ({ img, eventTitle, eventDescription, eventType }:any) => {
  const navigate = useNavigate();
    return (
    <Flex w="80%" mx="auto" gap="1.5rem" borderRadius="1.5rem" justifyContent="space-between" padding="1.5rem" alignItems="center" background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(43,241,251,1) 25%, rgba(0,145,255,1) 59%, rgba(43,241,251,1) 91%)">
        <Img src={img} alt="event-poster" width="50%"/>
        <Stack width="50%" justifyContent="center">
            <Text fontSize="28px" fontWeight="bold">{eventTitle}</Text>
            <Text fontSize="16px">{eventDescription}</Text>
            {eventType === "past" ? (
                <Button>View Event</Button>
            ) : (eventType == "ongoing" || eventType == "upcoming") ? (
                <Button onClick={() => navigate("/events")}>Register</Button>
            ) : (
                <Button>View Timeline</Button>
            )}
        </Stack>
    </Flex>
  )
}

export default EventsCard