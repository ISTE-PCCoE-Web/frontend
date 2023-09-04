import React from 'react'
import { Hero, Features, Frequent, Counter } from '../components';
import '../components/EventDesc/eventDesc.css';
import debate from '../img/Events/Debate.png';


export default function EventDesc() {

  return (
    <div className="eventDescContainer">
        {/* <Navbar/> */}
        <Hero/>
        <img src={debate} id="poster" alt="" />
        <Features/>
        <Frequent/>
        <Counter/>
    </div>
  )
}