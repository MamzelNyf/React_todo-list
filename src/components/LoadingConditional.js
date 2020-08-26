import React, {Component} from 'react'
import Conditional from './Conditional.js'

class Loading extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount(){
        setTimeout(() => {
            //setTimeout function needs 2 args: (1st param, number)
            this.setState({
                isLoading: false
            })
        }, 1500)
        // after 1.5s, the state changes and the component will rereder with the new state
    }
    render(){
        return(
            <div>
                {/* <Conditional isLoading={this.state.isLoading} /> */}
                {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
            </div>
        )
    }
}

export default Loading