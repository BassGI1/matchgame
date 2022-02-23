import React, {useState, useEffect} from "react";
import Game from "./Game/Game.js";
import Timer from "./Game/Timer.js";

export default function Menu(props) {

    const [appear, setAppear] = useState(() => false)
    const [section, setSection] = useState('')
    const [seconds, setSeconds] = useState(() => 0)
    const [minutes, setMinutes] = useState(() => 0)
    const [timing, setTiming] = useState(() => false)

    setTimeout(() => setAppear(true), 2000)

    const gameFunc = () => {
        setSeconds(0)
        setMinutes(0)
        setSection('Game')
        props.setGame(true)
    }

    useEffect(() => {
        if ((section === 'Game') && !timing){
            setInterval(() => setSeconds(x => x + 1), 1000)
            setTiming(true)
        }
        else if (section !== "Game"){
            setSeconds(0)
            setMinutes(0)
        }
    }, [section, timing, seconds])

    return (

        <div>
            {(section === '' || section === 'return') && <h1 className={`title ${!appear ? "titleanimation" : 'titlestatic'}`}>Matches</h1>}
            {appear && (section === '' || section === 'return') && <h6 className="starttext1" onClick={gameFunc}>Start Game</h6>}
            {appear && (section === '' || section === 'return') && <h6 className="starttext2">Personal Best</h6>}
            {appear && (section === '' || section === 'return') && <h6 className="starttext3">About</h6>}
            {appear && (section === '' || section === 'return') && <img src={process.env.PUBLIC_URL + `/banner.png`} alt="uh oh" className="banner"/>}
            {section === 'Game' && <Timer change={setSection} minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} retur={props.setGame}/>}
        </div>

    )

}