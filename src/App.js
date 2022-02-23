import React, {useState, useEffect} from "react";
import Menu from "./Menu.js";
import Game from "./Game/Game.js";

export default function App() {

  let food = ['apple', 'banana', 'blueberry', 'carrot', 'cherry', 'corn', 'cucumber', 'grape', 'lettuce', 'lime', 'orange', 'peach', 'pear', 'pineapple', 'raspberry', 'strawberry', 'tomato', 'watermelon', 'apple', 'banana', 'blueberry', 'carrot', 'cherry', 'corn', 'cucumber', 'grape', 'lettuce', 'lime', 'orange', 'peach', 'pear', 'pineapple', 'raspberry', 'strawberry', 'tomato', 'watermelon']
  const [flipArray, setFlipArray] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
  const [arr, setArr] = useState(() => shuffle(food))
  const [currentFlips, setCurrentFlips] = useState(() => [])
  const [anime, setAnime] = useState(() => false)
  const [stage2, setStage2] = useState(() => false)
  const [stage3, setStage3] = useState(() => false)
  const [check, setCheck] = useState(() => false)
  const [final, setFinal] = useState(() => false)
  const [app, setApp] = useState(() => false)
  const [renderGame, setRenderGame] = useState(() => false)
  const [score, setScore] = useState(0)
  const [win, setWin] = useState(() => false)

  useEffect(() => {
    if (localStorage.length === 0){
      localStorage.setItem('score', 'no runs yet')
    }
  }, [])

  useEffect(() => {
    if (!flipArray.includes(false)){
      setWin(true)
    }
  }, [flipArray])

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

  function start() {
    if (!final){
      setAnime(true)
      setTimeout(() => second(), 2000)
    }
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
    setTimeout(() => setApp(true), 2000)
  }

  return (

    <div className={`father ${anime ? stage3 ? "expand third" : "expand" : ''} ${final ? "end" : ''}`} onClick={start}>
      {anime || final ? '' : "Start"}
      {stage2 && <div className={`child ${stage2 ? "second" : ""}`}></div>}
      {check && "Enjoy!"}
      {app && <Menu win={win} setWin={setWin} score={score} setScore={setScore} setGame={setRenderGame} setArr={setArr} arr={arr} setFlipArray={setFlipArray} flipArray={flipArray}/>}
      {renderGame && <Game win={win} score={score} setScore={setScore} food={food} flipArray={flipArray} setFlipArray={setFlipArray} arr={arr} currentFlips={currentFlips} setCurrentFlips={setCurrentFlips}/>}
    </div>

  )

}