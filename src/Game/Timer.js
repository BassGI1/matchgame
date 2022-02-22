import React, {useState, useEffect} from "react";

export default function Timer(props) {

    const [seconds, setSeconds] = useState(() => 0)
    const [minutes, setMinutes] = useState(() => 0)

    const time = () => {
        setInterval(() => setSeconds(x => x + 1), 1000)
    }

    useEffect(() => time(), [])
    useEffect(() => {
        if (seconds === 60) {
            setMinutes(x => x + 1)
            setSeconds(0)
        }
    }, [seconds])

    return (
        
        <div className="timer">
            <div className="topinfo">
                Time
                <h5 style={{marginTop: "-6vh", marginLeft: "0.5vw"}}>{minutes === 0 ? `${seconds} s` : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</h5>
            </div>
            <div className="topinfo">
                Score
                <h5 style={{marginTop: "-6vh", marginLeft: "0.5vw"}}>0 pts</h5>
            </div>
        </div>

    )

}