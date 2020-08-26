import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            unreadMessages: [
                // "Call me maybe",
                // "Hello"
            ]
        }
    }

    render(){
        return(
            <div>
                {/* {
                    this.state.unreadMessages.length > 0 ?
                    <h2> You have {this.state.unreadMessages.length} messages</h2>:
                    null
                } */}
                {
                    this.state.unreadMessages.length > 0 &&
                    <h2> You have {this.state.unreadMessages.length} messages</h2>
                    //render nothing if it is false with && operator
                }
            </div>
        )
    }
}

export default Message