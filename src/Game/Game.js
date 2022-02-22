import React from "react";
import Card from "./Card.js";
import Timer from "./Timer.js";

export default function Game(props) {

    let food = ['apple', 'banana', 'blueberry', 'carrot', 'cherry', 'corn', 'cucumber', 'grape', 'lettuce', 'lime', 'orange', 'peach', 'pear', 'pineapple', 'raspberry', 'strawberry', 'tomato', 'watermelon', 'apple', 'banana', 'blueberry', 'carrot', 'cherry', 'corn', 'cucumber', 'grape', 'lettuce', 'lime', 'orange', 'peach', 'pear', 'pineapple', 'raspberry', 'strawberry', 'tomato', 'watermelon']

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
    
            <div className="returnbutton" onClick={() => props.change('')}>return</div>
            <Timer />
            
            <div className="gamediv">
                {shuffle(food).map(x => <Card food={x} key={x}/>)}
            </div>

        </div>

    )

}