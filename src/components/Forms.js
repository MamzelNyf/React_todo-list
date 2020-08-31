import React, { Component } from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state={
            fullName: "",
            preferedName: "",
            contentArea: "",
            isFriendly: false,
            gender: "",
            favColor: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeUpdated = this.handleChangeUpdated.bind(this)
    }

    handleChange(event) {
        // each time an event fires the input box handleChanges runs
        this.setState({
            //target represents the elemnt where the event was fired
            //change the state to be updated with the current value of the input
            //to make this function adaptable to each text element of the form, target the name value instead of the state property
            // wraps it in square brackets to describe a string property name in an object: JS
            [event.target.name]: event.target.value
        })
    }
    handleChangeUpdated(event) {
        //instead of accessing name and value property by drilling the venet poroperty
        //use object destructuring 
        //make a copy of name and value before firing the event
        //for checkbox, no value to look for so look for type and if checked
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({isFriendly: checked}) : this.setState({[name]: value})
    }
    handleSubmit(){
        
    }
    render(){
        return(
            <div class="form">
                <h1>Form</h1>
                {/* handle action of the submit */}
                <form onSubmit={this.handeSubmit}>
                    <input 
                        type="text" 
                        //controlled form: what is displayed in the form matched what is in the state
                        //state should be the only source of truth
                        //Add the property value to force it showing the actual state value  
                        value={this.state.fullName}
                        name="fullName" 
                        placeholder="Full Name" 
                        onChange={this.handleChangeUpdated} 
                    />
                    <input 
                        type="text" 
                        value={this.state.preferedName}
                        name="preferedName" 
                        placeholder="Prefered Name" 
                        onChange={this.handleChangeUpdated} 
                    />
                    <br />
                    <textarea 
                        value={this.state.contentArea} 
                        name="contentArea" 
                        onChange={this.handleChangeUpdated} 
                    />
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isFriendly" 
                            checked={this.state.isFriendly} 
                            onChange={this.handleChangeUpdated} 
                        />Is Friendly?
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="Human" 
                            checked={this.state.gender === "Human"}
                            onChange={this.handleChangeUpdated} 
                        />Human
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="Non-Binary" 
                            checked={this.state.gender === "Non-Binary"}
                            onChange={this.handleChangeUpdated} 
                        />Non-binary
                    </label>
                    <br />
                    <label>What is your fav colour?</label>
                    <br />
                    {/* for select define name, value and onchange on the main component */}
                    <select
                        name="favColor"
                        onChange={this.handleChangeUpdated}
                        value={"this.state.favColor"}
                        >
                        <option value="red">Red</option>
                        <option value="yellow" >Yellow</option>    
                        <option value="blue">Blue</option>
                    </select>
                    

                    <h1>{this.state.fullName} {this.state.preferedName}</h1>
                    <p>{this.state.contentArea}</p>
                    {this.state.gender !== "" ? <p>Hello {this.state.gender}</p> : null}
                    {/* To simplify, empty string always return false so ask if variable is true */}
                    {/* to avoid empty ternary operation use logical &&: if true do this  */}
                    {this.state.favColor && <p>Your fav colour is: {this.state.favColor}</p>}
                    <br />
                    {/* button in form fires onSubmit embedded of the form itself when clicked */}
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default Form