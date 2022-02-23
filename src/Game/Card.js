import React from "react";

export default function Card(props) {

    function flip() {
        props.setFlipArray(x => {
            let temp = [...x]
            temp[props.index] = !temp[props.index]
            return temp
        })
    }

    return (

        <div className={`flip-card ${props.flipArray[props.index] ? "flip" : ''}`} onClick={flip}>
            
            <div className="flip-card-inner">

                <div className="flip-card-front">

                </div>

                <div className="flip-card-back">

                    <img src={process.env.PUBLIC_URL + `../${props.food}.png`} alt="uh oh" style={{maxWidth: "80%", maxHeight: "90%"}}/>

                </div>

            </div>

        </div>

    )

}