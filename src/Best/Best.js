import React from "react";

export default function Best(props) {

    return (

        <div className="bestdiv">
            <div className="insidebest">
                Personal Best Score: {localStorage.getItem('bassamscore')}
                <div style={{position: "absolute", bottom: "3vh", cursor: "pointer"}}  onClick={() => props.setSection('return')}>return</div>
            </div>
        </div>

    )

}