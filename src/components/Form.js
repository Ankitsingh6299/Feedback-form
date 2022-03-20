import React, { Component } from 'react'
import "./Form.css";
class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         email:"",
         contact:"",
         message:""
      }
    }

    handleUsernameChange = event =>{
        this.setState({
            username:event.target.value
        })
    }
    handleEmailChange = event =>{
        this.setState({
            email:event.target.value
        })
    }
    handleContactChange = event =>{
        this.setState({
            contact:event.target.value
        })
    }
    
    handleMessageChange = event =>{
        this.setState({
            message:event.target.value
        })
        
    }
    handleSubmit = event =>{
console.log(`${this.state.username} ${this.state.email} ${this.state.contact} ${this.state.message} `)
event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="mainClass"> 
            <div >
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
            </div>
            <div>
                <label>E-mail</label>
                <input type='email' value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
                <label>Contact</label>
                <input type='tel' value={this.state.contact} onChange={this.handleContactChange} />
            </div>
            
            <div>
                <label>Message</label>
                <textarea value={this.state.message} onChange={this.handleMessageChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    
    )
  }
}

export default Form