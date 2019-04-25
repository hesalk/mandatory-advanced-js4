import React, { useState, useEffect,useReducer  } from "react";

let player = "red"
let winer = ""

function equal(element){
    return element === "red"
}

function equalblue(element){
    return element === "blue"
}


function validait(array) {
    console.log(array)
    let colorarray = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let color = element.props.style.backgroundColor
        colorarray.push(color)
    }
    console.log(colorarray)
    for (let j = 0; j < colorarray.length; j++) {
        let testarr = []
        let testarr7 = []
        let testarr5 = []
        let testarr6 = []
        testarr.push(colorarray[j],colorarray[j+1],colorarray[j+2],colorarray[j+3])
        let winarr = [j,j+1,j+2,j+3]
        console.log(winarr)
        if(testarr.every(equal) || testarr.every(equalblue)){
            console.log(testarr)
            console.log("winner")
            //array[0].props.win(testarr[0])
            let obj = {
                arr:winarr,
                color:testarr[0]
            }
            return obj
        }
        testarr7.push(colorarray[j],colorarray[j+7],colorarray[j+14],colorarray[j+21])
        if(testarr7.every(equal) || testarr7.every(equalblue)){
            return testarr7[0]
        }
        testarr5.push(colorarray[j],colorarray[j+5],colorarray[j+10],colorarray[j+15])
        if(testarr5.every(equal) || testarr5.every(equalblue)){
            console.log(testarr5)
            console.log(testarr5.length)
            return testarr5[0]
        }
        testarr6.push(colorarray[j],colorarray[j+6],colorarray[j+12],colorarray[j+18])
        if(testarr6.every(equal) || testarr6.every(equalblue)){
            console.log(testarr6)
            console.log(testarr6.length)
            return testarr6[0]
        }
    }
}

function testco(array){
    let arr = array.reverse()
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        let j = i-1
        console.log(j)
        if(element.props.style.backgroundColor === "white"){
            element.props.function(player)
            player = player === "red" ? "blue" : "red";
            console.log("player is now "+player)
            return 
        }
    }
    
}

function testupdate(element) { 

}

function con4() {
    console.log("render")
    const [winner,updatewinner] = useState("")
    let row = new Array(42)
    useEffect(()=>{
        let test = validait(row)
        if(test === "red" || test === "blue"){
            updatewinner(test+" is the winner")
            alert(test+" is the winner");
            window.location.reload()
        }
    })

    let con4style = {
        width:"100%",
        height:"569px",
        display:"flex",
        flexWrap:"wrap",
        flexDirection: "column-reverse"
    }
    for(let i = 0; i < row.length; i++) {
        const [color,updatecolor] = useState("white")
        let sqrstyle = {
            width:"90px",
            height:"90px",
            borderRadius:"45px",
            margin:"5px",
            backgroundColor:color
        }
        const element = row[i];
        row[i]= <div key={i} function={(x)=>{updatecolor(x)}}  style={sqrstyle}></div>
    }

    return(
        <>
        <div className="winner">
            <p>{winner}</p>
        </div>
        <div className="con4"  win={winner} style={con4style} >
            <div onClick={()=>{testco(row.slice(0,6))}} className="col-1">{row.slice(0,6)}</div>
            <div onClick={()=>{testco(row.slice(6,12))}} className="col-2">{row.slice(6,12)}</div>
            <div onClick={()=>{testco(row.slice(12,18))}} className="col-3">{row.slice(12,18)}</div>
            <div onClick={()=>{testco(row.slice(18,24))}} className="col-4">{row.slice(18,24)}</div>
            <div onClick={()=>{testco(row.slice(24,30))}} className="col-5">{row.slice(24,30)}</div>
            <div onClick={()=>{testco(row.slice(30,36))}} className="col-6">{row.slice(30,36)}</div>
            <div onClick={()=>{testco(row.slice(36,42))}} className="col-7">{row.slice(36,42)}</div>
        </div>
        
        </>
    )
}

export default con4