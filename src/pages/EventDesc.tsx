import React from 'react'
import { Hero, Features, Frequent, Counter, Footer, Navbar } from '../components';
import '../components/EventDesc/eventDesc.css';
import debate from '../img/Events/Debate.png';


export default function EventDesc() {

  return (
    <div className="eventDescContainer">
        <Navbar p="1rem 2rem" color="#fff"/>
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
