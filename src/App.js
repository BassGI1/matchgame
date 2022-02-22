import React, {useState} from "react";

export default function App() {

  const [anime, setAnime] = useState(() => false)
  const [stage2, setStage2] = useState(() => false)
  const [stage3, setStage3] = useState(() => false)
  const [check, setCheck] = useState(() => false)
  const [final, setFinal] = useState(() => false)

  function start() {
    setAnime(true)
    setTimeout(() => second(), 2000)
  }

  //timing in second is +2

  function second() {
    setStage2(true)
    setTimeout(() => third(), 3000)
  }

  function third() {
    setStage2(false)
    setStage3(true)
    setTimeout(() => setCheck(true), 2000)
    setTimeout(() => finale(), 4000)
  }

  function finale() {
    setCheck(false)
    setAnime(false)
    setStage2(false)
    setStage3(false)
    setFinal(true)
  }

  return (

    <div className={`father ${anime ? stage3 ? "expand third" : "expand" : ''} ${final ? "end" : ''}`} onClick={start}>
      {anime || final ? '' : "Start"}
      {stage2 && <div className={`child ${stage2 ? "second" : ""}`}></div>}
      {check && "✔"}
    </div>

  )

}