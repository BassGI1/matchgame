import React, {useState} from "react";
import Game from "./Game/Game.js";

export default function Menu(props) {

    const [appear, setAppear] = useState(() => false)
    const [section, setSection] = useState('')

    setTimeout(() => setAppear(true), 2000)

    return (

        <div>
            {section === '' && <h1 className="title">Matches</h1>}
            {appear && section ==='' && <h6 className="starttext1" onClick={() => setSection('Game')}>Start Game</h6>}
            {appear && section ==='' && <h6 className="starttext2">Personal Best</h6>}
            {appear && section ==='' && <h6 className="starttext3">About</h6>}
            {appear && section ==='' && <img src={process.env.PUBLIC_URL + `/banner.png`} alt="uh oh" className="banner"/>}
            {section === 'Game' && <Game />}
        </div>

    )

}