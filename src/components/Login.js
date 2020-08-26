import React,{Component} from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state ={
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
            this.setState(prevState=> {
                return{
                    isLoggedIn:  !prevState.isLoggedIn
                }
            })
            console.log(this.state.isLoggedIn)
    }
    render(){
        let textButton = this.state.isLoggedIn ? "Log Out" : "Log In"
        let textH1 = this.state.isLoggedIn ? <h1>Logged In</h1> : <h1>Logged out</h1>
        return (
            <div>
                <button onClick={this.handleClick}>{textButton}</button>
                <h1>{textH1}</h1>
            </div>
        )
    }
}

export default Login