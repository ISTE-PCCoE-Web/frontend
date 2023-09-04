import React from 'react'
import "../components/Events/events.css"

import { UpcomingEvents, PastEvents } from '../components'
export default function Events() {
  return (
    <div>
      <UpcomingEvents/>
      <hr />
      <PastEvents/>
    </div>
  )
}
