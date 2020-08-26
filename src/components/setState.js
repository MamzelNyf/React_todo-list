import React from "react"

class SetState extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
        //the handleClick needs to be bond to the context of App
        this.handleClick = this.handleClick.bind(this) 
        this.handleClickDouble = this.handleClickDouble.bind(this) 

    }
    // method handleClick use setState from React.Component
    handleClick(){
        // use the data of the original State
        this.setState(prevState => {
            return { 
                //don't use ++ as the original state should be immuable 
                count: prevState.count + 1
            } 
        })
    }
    handleClickDouble(){
        this.setState (prevState =>{
            return{
                count: prevState.count * 2
            }
        }) 
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change</button>
                <button onClick={this.handleClickDouble}>Double</button>
            </div>
        )
    }
}    

export default SetState