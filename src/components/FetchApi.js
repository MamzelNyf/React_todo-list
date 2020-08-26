import React,{Component} from 'react'

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.dev/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


class FetchApi extends Component{
    constructor(){
        super()
        this.state = {
            //create an empty object because we know that the data coming is an object
            character:{},
            loading:false
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        //chained promises, fetch get the DATA from this Url and return a promise
        fetch("https://swapi.dev/api/people/1/")
            //resolve the promise with a .then and use a function to turn it in js obejct
            .then(response =>response.json())//process the DATA
            // receive the data
            .then(data => {
                console.log(data)
                this.setState({
                    character: data,
                    loading:false
                })
            })//save the DATA
    }

    render(){
        const text = this.state.loading ? 'Loading...' : this.state.character.name
        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default FetchApi