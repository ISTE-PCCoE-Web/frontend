//@ts-nocheck
import { useEffect, useRef } from 'react'
import "../components/Events/events.css"

import { UpcomingEvents, PastEvents, Navbar, Footer } from '../components'

import {
  Box,
  Badge,
  Image
} from '@chakra-ui/react';

type EventsProps = {
  DescArray?: any[];
}

export default function Events({DescArray} : EventsProps){
  return (
    <div className="eventContainer">
      <Navbar color="#fff" p="1rem 2rem"/>
      <UpcomingEvents DescArray = {DescArray}/>
      {/* <div className="horizon"/>
      <PastEvents/> */}
      <Footer/>
    </div>
  )
}
