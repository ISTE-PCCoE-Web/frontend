import React from 'react'
import "../components/Events/events.css"

import { UpcomingEvents, PastEvents} from '../components'

import {
  Box, 
  Badge, 
  Image
} from '@chakra-ui/react';

export default function Events() {
  return (
    <div className="eventContainer">
      <Box position={'fixed'} 
      w={'100%'} 
      h={'100%'}
      bgGradient={'radial(rgba(162, 140, 250, 0.2), rgba(162, 140, 250, 0))'}
      >
      </Box>
      <UpcomingEvents/>
      <hr className="horizon"/>
      <PastEvents/>

    </div>
  )
}
