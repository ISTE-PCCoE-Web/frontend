//@ts-nocheck
import { useEffect, useRef } from 'react'
import "../components/Events/events.css"

import { UpcomingEvents, PastEvents } from '../components'

import {
  Box,
  Badge,
  Image
} from '@chakra-ui/react';
export default function Events(){
  return (
    <div className="eventContainer">
      <section className='eventGradient1'/>
      <Box position={'fixed'}
      w={'100%'}
      h={'100%'}
      >
      </Box>
      
      <UpcomingEvents/>
      <div className="horizon"/>
      <PastEvents/>
    </div>
  )
}
