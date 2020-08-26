import React from 'react'

function Conditional(props) {
    // console.log(props.isLoading)

    //if else statement to return content
    // if (props.isLoading === true){
    //     return (
    //         <h1> Loading...</h1>
    //     )
    // } else {
    //     return (
    //         <h1>Text rendered after loading</h1>
    //     )
    // }

    //if with implicit else, when validating a conditionnal no need === true 
    // if (props.isLoading ){
    //     return (
    //         <h1> Loading...</h1>
    //     )
    // }
    //  return (
    //     <h1>Text rendered after loading</h1>
    //  )

    //ternary operation, has to be in a return, curly braces to be interpreted
    // return(
    //     <div>
    //         {props.isLoading ? <h1>Loading...</h1> : <h1>Content Loaded</h1>}
    //     </div>
    // )

    //Loading phase back in the main component
    return(
        <div>
            <h1>Content Loaded</h1>
        </div>
    )
}

export default Conditional