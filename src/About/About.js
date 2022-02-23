import React, {useState, useEffect} from "react";

export default function About(props) {

    const [text, setText] = useState('Ideas by:')
    const [start, setStart] = useState(() => false)

    const timedFunction = () => {
        setStart(true)
        setText('Bassam El-Naggar')
    }

    const timedFunction2 = () => {
        setStart(false)
        setText('Animation by:')
    }

    const timedFunction3 = () => {
        setStart(false)
        setText('Code Written by:')
    }

    const timedFunction4 = () => {
        setStart(false)
        setText('This game was created in its entirety by me, Bassam El-Naggar. The objective is to get as low of a score as possible. Thank you very much for taking the time to visit this website and for playing my game!')
    }

    useEffect(() => {
        setTimeout(timedFunction, 3000)
        setTimeout(timedFunction2, 6000)
        setTimeout(timedFunction, 9000)
        setTimeout(timedFunction3, 12000)
        setTimeout(timedFunction, 15000)
        setTimeout(timedFunction4, 20000)
    }, [])

    return (

        <div className={`aboutdiv ${start ? "aboutanime" : ""}`}>
            <div className={`${start ? "abouttextanimation" : ""}`}>
                {text}
            </div>
            <div style={{position: "absolute", bottom: "2vh", left: "2vh", cursor: "pointer", backgroundColor: "rgb(113, 221, 161)", padding: "2vh", borderRadius: "2vh"}} onClick={() => props.setSection('return')}>return</div>
        </div>

    )

}