import React, {useEffect, useState} from "react";

export default function Timer(props) {

    const [stopTime, setStopTime] = useState(false)

    useEffect(() => {
        if (props.seconds === 60) {
            props.setMinutes(x => x + 1)
            props.setSeconds(0)
        }
    }, [props])

    function ret() {
        props.change('return')
        props.retur(false)
        props.setArr(shuffle(props.arr))
        props.setFlipArray([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    }

    function newGame() {
        props.setArr(shuffle(props.arr))
        props.setFlipArray([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    }

    function shuffle(array) {

        var m = array.length, t, i;
    
        while (m) {
    
          i = Math.floor(Math.random() * m--);
      
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }  

    return (
        
        <div className="timer">
            <div className="returnbutton" onClick={ret}>Quit</div>
            <div className="topinfo">
                Time
                <h5 style={{marginTop: "-6vh", marginLeft: "0.5vw"}}>{props.minutes === 0 ? `${props.seconds} s` : `${props.minutes}:${props.seconds < 10 ? `0${props.seconds}` : props.seconds}`}</h5>
            </div>
            <div className="topinfo">
                Score
                <h5 style={{marginTop: "-6vh", marginLeft: "0.5vw"}}>0 pts</h5>
            </div>
            <div className="newbutton" onClick={newGame}>New Game</div>
        </div>

    )

}