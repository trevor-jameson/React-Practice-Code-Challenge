import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      money: 100,
      sushisIndex: 0,
    }
  }

  componentDidMount(){
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({sushis: data}))
  }

  render() {
    const {sushis, sushisIndex, money} = this.state
    return (
      <div className="app">
        <SushiContainer sushisSet={sushis.slice(sushisIndex, sushisIndex + 4)} />
        <Table />
      </div>
    );
  }
}

export default App;