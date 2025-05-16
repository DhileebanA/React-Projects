import React, { useState } from "react";
import PropTypes from "prop-types";

export function Navbar(props) {
    const [color,setColor] = useState("white");

  return (
    <>
      <input type="text" onChange={(e)=>setColor(e.target.value)}/>
      <button></button>
      <div className="box" style={{backgroundColor:color}}/>
    </>
  );
}
