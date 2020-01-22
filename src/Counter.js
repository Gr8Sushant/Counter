import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  add = () => {
    this.setState({count: this.state.count+1})
  }

  sub = () => {
    this.setState({count: this.state.count-1})
  }

  render() {
    const style = {
      margin: 10,
      fontSize: 50,
      padding: 10
    }
    return(
      <div>
        <h1>Counter:{this.state.count}</h1>
        <button style={style} onClick={this.sub}className="counter">-</button>
        <button style={style} onClick={this.add}className="counter">+</button>
      </div>
    )
  }
}

export default Counter
