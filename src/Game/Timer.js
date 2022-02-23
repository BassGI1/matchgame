import React, {useEffect, useState} from "react";

export default function Timer(props) {

    const [mins, setMins] = useState(() => 0)
    const [secs, setSecs] = useState(() => 0)
    const [load, setLoad] = useState(() => false)
    let stopTimer = !props.flipArray.includes(false)

    if (stopTimer && !load) {
        setMins(props.minutes)
        setSecs(props.seconds)
        setLoad(true)
        props.setScore(x => x + props.seconds + props.minutes*60)
        if ((localStorage.getItem('score') === 'no runs yet') || (parseInt(localStorage.getItem('score')) >= props.score)){
            localStorage.setItem('score', JSON.stringify(props.score + props.seconds + props.minutes*60))
        }
    }

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
        props.setScore(0)
        props.setWin(false)
    }

    function newGame() {
        props.setArr(shuffle(props.arr))
        props.setFlipArray([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
        props.setMinutes(0)
        props.setSeconds(0)
        props.setScore(0)
        props.setWin(false)
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
            {props.win && <div className="windivouter"></div>}
            <div className="returnbutton" onClick={ret}>Quit</div>
            <div className="topinfo">
                Time
                <h5 style={{marginTop: "-6vh", marginLeft: "0.5vw"}}>{stopTimer ? `${mins}:${secs < 10 ? `0${secs}` : secs}` : props.minutes === 0 ? `${props.seconds} s` : `${props.minutes}:${props.seconds < 10 ? `0${props.seconds}` : props.seconds}`}</h5>
            </div>
            <div className="topinfo">
                Score
                <h5 style={{marginTop: "-6vh", marginLeft: "0.5vw"}}>{props.score} pts</h5>
            </div>
            <div className="newbutton" onClick={newGame}>New Game</div>
        </div>

    )

}