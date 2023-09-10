//@ts-nocheck
import { useEffect, useRef } from 'react'
import "../components/Events/events.css"

import { UpcomingEvents, PastEvents, Footer } from '../components'

import {
  Box,
  Badge,
  Image
} from '@chakra-ui/react';
export default function Events(){
  return (
    <div className="eventContainer">
      <UpcomingEvents/>
      <div className="horizon"/>
      <PastEvents/>
      <Footer/>
    </div>
  )
}
