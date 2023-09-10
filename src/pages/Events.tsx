//@ts-nocheck
import { useEffect, useRef } from 'react'
import "../components/Events/events.css"

import { UpcomingEvents, PastEvents, Navbar } from '../components'

import {
  Box,
  Badge,
  Image
} from '@chakra-ui/react';
export default function Events(){
  return (
    <div className="eventContainer">
      <Navbar color="#fff" p="1rem 2rem"/>
      <UpcomingEvents/>
      <div className="horizon"/>
      <PastEvents/>
    </div>
  )
}
