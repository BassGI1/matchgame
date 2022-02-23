import React from "react";
import Card from "./Card.js";

export default function Game(props) {

    return (

        <div style={{display: "flex", width: "100vw", height: "100vh", justifyContent: "center"}}>
            
            <div className="gamediv">
                {props.arr.map((x, index) => <Card setScore={props.setScore} food={x} key={`${x}${JSON.stringify(index)}`} id={`${JSON.stringify(index)}${x}`} index={index} flipArray={props.flipArray} setFlipArray={props.setFlipArray} currentFlips={props.currentFlips} setCurrentFlips={props.setCurrentFlips}/>)}
                {props.win && <div className="windivbox"> </div>}
            </div>

        </div>

    )

}