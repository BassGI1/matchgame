import React, {useEffect} from "react";

export default function Timer(props) {

    useEffect(() => {
        if (props.seconds === 60) {
            props.setMinutes(x => x + 1)
            props.setSeconds(0)
        }
    }, [props])

    return (
        
        <div className="timer">
            <div className="returnbutton" onClick={() => props.change('return')}>quit</div>
            <div className="topinfo">
                Time
                <h5 style={{marginTop: "-6vh", marginLeft: "0.5vw"}}>{props.minutes === 0 ? `${props.seconds} s` : `${props.minutes}:${props.seconds < 10 ? `0${props.seconds}` : props.seconds}`}</h5>
            </div>
            <div className="topinfo">
                Score
                <h5 style={{marginTop: "-6vh", marginLeft: "0.5vw"}}>0 pts</h5>
            </div>
        </div>

    )

}