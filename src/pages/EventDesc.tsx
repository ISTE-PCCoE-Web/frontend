//@ts-nocheck
import React from 'react'
import { Hero, Features, Frequent, Counter, Footer, Navbar } from '../components';
import '../components/EventDesc/eventDesc.css';
import debate from '../img/Events/Tark-Vitark Poster 2.png';

type EventDescProps = {
  Desc?: any;
}

export default function EventDesc({Desc} : EventDescProps) {

  // console.log(Desc);
  return (
    <div className="eventDescContainer">
        <Navbar p="1rem 2rem" color="#fff"/>
        <Hero Desc = {Desc}/>
        <img src={Desc.poster} id="poster" alt="" />
        <Features Desc = {Desc}/>
        <div className="horizon"/>
        <Frequent Desc = {Desc}/>
        <Counter/>
        <Footer/>
    </div>
  )
}
