import React from "react";

export default function Card(props) {

    function flip() {
        props.setScore(x => x + 1)
        props.setCurrentFlips(x => {
            let temp = [...x]
            temp.push(props.id)
            return temp
        })

        if (props.currentFlips.length < 2){
            props.setFlipArray(x => {
                let temp = [...x]
                temp[props.index] = !temp[props.index]
                return temp
            })
        }

        if ((props.currentFlips.length > 1) && (props.currentFlips[0].substring(JSON.stringify(parseInt(props.currentFlips[0])).length) === props.currentFlips[1].substring(JSON.stringify(parseInt(props.currentFlips[1])).length))){
            props.setCurrentFlips([])
        }

        if ((props.currentFlips.length === 2) && (props.currentFlips[0].substring(JSON.stringify(parseInt(props.currentFlips[0])).length) !== props.currentFlips[1].substring(JSON.stringify(parseInt(props.currentFlips[1])).length))){
            props.setFlipArray(x => {
                let temp = [...x]
                temp[parseInt(props.currentFlips[0])] = false
                temp[parseInt(props.currentFlips[1])] = false
                return temp
            })
            props.setCurrentFlips([])
        }
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