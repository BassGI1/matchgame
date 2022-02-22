import React, {useState} from "react";

export default function Card(props) {

    const [flipped, setFlipped] = useState(() => false)

    const flip = () => {
        if (props.flips.length < 2) {

        }
    }

    return (

        <div className={`flip-card ${flipped ? "flip" : ''}`} >
            
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