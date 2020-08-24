
import React from "react"

function Joke(props){
    return(
        <div>
            {/* using a ternary operation to display or not the question */}
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            <p style={{color : props.question ? "blue" : "red"}}>Punchline: {props.punchLine}</p>
            <hr />
        </div>
    )
}

export default Joke