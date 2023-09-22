// import React from 'react'
import { useState, CSSProperties } from "react";

import { Grid } from 'react-loader-spinner'
const override: CSSProperties = {
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    margin: "0 auto",
    borderColor: "red",
  };

export default function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <>
{/* <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
  /> */}
{/* <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/> */}
{/* <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel="falling-lines-loading"
/> */}
<Grid
  height="80"
  width="80"

  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </>
  )
}
