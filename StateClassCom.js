import React, { Component } from 'react'

class StateClassCom extends Component {
    state={
        color:"red",
        price:234
    }
    handleChange=()=>{this.setState({color:"Plum"})}
  render() {
    return (
      <div>
        <h1>The Color selected is {this.state.color} the price is {this.state.price}</h1>
        <button onClick={this.handleChange}>Click Me</button>
      </div>
    )
  }
}
export default StateClassCom;
