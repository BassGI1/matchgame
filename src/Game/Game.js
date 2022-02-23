import React, {useState} from "react";
import Card from "./Card.js";

export default function Game(props) {

    let food = ['apple', 'banana', 'blueberry', 'carrot', 'cherry', 'corn', 'cucumber', 'grape', 'lettuce', 'lime', 'orange', 'peach', 'pear', 'pineapple', 'raspberry', 'strawberry', 'tomato', 'watermelon', 'apple', 'banana', 'blueberry', 'carrot', 'cherry', 'corn', 'cucumber', 'grape', 'lettuce', 'lime', 'orange', 'peach', 'pear', 'pineapple', 'raspberry', 'strawberry', 'tomato', 'watermelon']
    const [flipArray, setFlipArray] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    const [arr, setArr] = useState(() => shuffle(food))

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

        <div style={{display: "flex", width: "100vw", height: "100vh", justifyContent: "center"}}>
            
            <div className="gamediv">
                {arr.map((x, index) => <Card food={x} key={`${x}${JSON.stringify(index)}`} id={`${JSON.stringify(index)}${x}`} index={index} flipArray={flipArray} setFlipArray={setFlipArray}/>)}
            </div>

        </div>

    )

}