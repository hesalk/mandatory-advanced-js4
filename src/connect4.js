import React, { useState, useEffect,useReducer  } from "react";

function testco(arr){
    console.log(arr);
    arr[1].props.function()
    
}


function con4() {

    let testcolot = (array)=> {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(element.props.style.backgroundColor)
            if(element.props.style.backgroundColor === "white"){
                console.log("xx");
                return "red"
            }
        }
        
    }
    let test = (s)=>{
        if(s === "white"){
            return "red"
        }
        else{return "blue"}
    }
    let colstyle = {
    }
    let con4style = {
        width:"100%",
        height:"100%",
        display:"flex",
        flexWrap:"wrap",
        flexDirection: "column-reverse"
    }

    let row = new Array(42)

    for (let i = 0; i < row.length; i++) {
        const [color,updatecolor] = useState("white")
        let sqrstyle = {
            width:"90px",
            height:"90px",
            backgroundColor:"white",
            margin:"5px",
            backgroundColor:color
        }
        const element = row[i];
        row[i]= <div key={i} function={()=>{updatecolor(test(color))}} onClick={console.log("clicked")} style={sqrstyle}></div>
    }

    console.log(row[1].key)
    console.log(row)
    return(
        <div className="con4" style={con4style} >
            <div onClick={()=>{testco(row.slice(0,6))}} style={colstyle} className="col-1">{row.slice(0,6)}</div>
            <div onClick={()=>{}} className="col-2">{row.slice(6,12)}</div>
            <div  className="col-3">{row.slice(12,18)}</div>
            <div  className="col-4">{row.slice(18,24)}</div>
            <div  className="col-5">{row.slice(24,30)}</div>
            <div  className="col-6">{row.slice(30,36)}</div>
            <div  className="col-7">{row.slice(36,42)}</div>
        </div>
    )
}

export default con4