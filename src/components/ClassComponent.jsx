import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // state
    constructor(props){
        super(props);
        this.state = {counter:0}
    }

    //this.setState({counter:2134123})
    increment = ()=>{
        this.setState({counter:this.state.counter+1})
    }

    decrement = ()=>{
        this.setState({counter:this.state.counter-1})
    }
   

    //life cycle method
    componentDidMount(){
        fetch('')
    }

  render() {
    return (
      <div>
        <h1>Class component</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quia asperiores eligendi aliquid impedit nemo. At possimus non, sed velit eos dolorem sequi, asperiores harum beatae consectetur fugiat! Unde, cum.</p>
      </div>
    )
  }
}
