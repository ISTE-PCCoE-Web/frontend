import React from 'react';
import { Box, Flex, Img, Stack, Text, Button, Show } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const EventsCard = ({ img, eventTitle, eventDescription, eventType }:any) => {
  const navigate = useNavigate();
    return (
    <Flex w={{base: "100%", lg:"80%"}} mx="auto" gap="1.5rem" flexDir={{base: "column", md: "row"}} borderRadius="1.5rem" justifyContent="space-between" padding="1.5rem" alignItems="center" background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(43,241,251,1) 25%, rgba(0,145,255,1) 59%, rgba(43,241,251,1) 91%)">
        <Img src={img} alt="event-poster" width={{base: "90%", md:"50%"}}/>
        <Stack width={{base: "100%", md:"50%"}} justifyContent="center">
            <Text fontSize="28px" fontWeight="bold" textAlign={{base: "center", md: "left"}}>{eventTitle}</Text>
            <Show above="md">
                <Text fontSize="16px">{eventDescription}</Text>
            </Show>
            {eventType === "past" ? (
                <Button>View Event</Button>
            ) : (eventType == "ongoing" || eventType == "upcoming") ? (
                <Button onClick={() => navigate("/feedback")}>Register</Button>
            ) : (
                <Button>View Timeline</Button>
            )}
        </Stack>
    </Flex>
  )
}

export default EventsCard