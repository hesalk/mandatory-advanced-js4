import React, { useState, useEffect,useReducer  } from "react";

function con4() {
    const [color,updatecolor] = useState("white")
    const newColor = color === "red" ? "blue" : "red";
    let colstyle = {
    }
    let con4style = {
        width:"100%",
        height:"100%",
        display:"flex",
        flexWrap:"wrap",
        flexDirection: "column-reverse"
    }
    let sqrstyle = {
        width:"90px",
        height:"90px",
        backgroundColor:"white",
        margin:"5px",
        backgroundColor:color
    }
    let row = new Array(42)
    for (let i = 0; i < row.length; i++) {
        const element = row[i];
        row[i]= <div key={i}  style={sqrstyle}></div>
    }

    console.log(row)
    return(
        <div className="con4" style={con4style} >
            <div onClick={()=>{updatecolor(newColor)}} style={colstyle} className="col-1">{row.slice(0,6)}</div>
            <div  className="col-2">{row.slice(6,12)}</div>
            <div  className="col-3">{row.slice(12,18)}</div>
            <div  className="col-4">{row.slice(18,24)}</div>
            <div  className="col-5">{row.slice(24,30)}</div>
            <div  className="col-6">{row.slice(30,36)}</div>
            <div  className="col-6">{row.slice(36,42)}</div>
        </div>
    )
}

export default con4