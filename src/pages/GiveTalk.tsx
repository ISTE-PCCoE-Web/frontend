import React from "react";
import { Navbar } from "../components";

import "./styles/givetalks.css";

const GiveTalk = () => {
  return (
    <>
    <Navbar />
    <form className="talk-form">
      <h1 style={{ color: "#fff" }}>
        Speaker <span> suggestion </span>
      </h1>
      <input type="text" name="name" id="" placeholder="Enter your name" />
      <input type="email" name="email" id="" placeholder="Enter your email" />
      <input type="phone" name="phone" id="" placeholder="Enter your phone" />
      <input type="text" name="sname" id="" placeholder="Enter speaker name" />
      <textarea
        name="sdetail"
        id=""
        cols={30}
        rows={10}
        placeholder="Enter speaker detail"
      />
      {/* <textarea name="stopic" id ="" cols={20} rows={10} placeholder='Enter topic'/> */}
      <button className="button" type="submit" name="submit">
        submit
      </button>
    </form>
    </>
  );
};

export default GiveTalk;
