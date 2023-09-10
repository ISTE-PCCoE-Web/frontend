import React from 'react'
import { Hero, Features, Frequent, Counter, Footer } from '../components';
import '../components/EventDesc/eventDesc.css';
import debate from '../img/Events/Debate.png';


export default function EventDesc() {

  return (
    <div className="eventDescContainer">
        {/* <Navbar/> */}
        <Hero/>
        <img src={debate} id="poster" alt="" />
        <Features/>
        <div className="horizon"/>
        <Frequent/>
        <Counter/>
        <Footer/>
    </div>
  )
}
