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
      eatenSushis: []
    }
  }

  changePage = () => {
    this.setState(prevState => {
      return {
        sushisIndex: prevState.sushisIndex + 4
      }
    })
  }

  eatSushi = (event) => {
    const id = event.target.id.split('-')[1]
    let newMoney = this.state.money
    const newlyEatenSushis = [...this.state.eatenSushis]
    const newSushis = this.state.sushis.map(sushi => {
      if (sushi.id == id) {
        if (newMoney - sushi.price >= 0) {
          newMoney -= sushi.price
          sushi.eaten = true
          newlyEatenSushis.push(sushi.id)
        }
      }
      return sushi
    })

    this.setState({
      sushis: newSushis,
      money: newMoney,
      eatenSushis: newlyEatenSushis
    })
  }

  componentDidMount(){
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({sushis: data}))
  }

  render() {
    const {sushis, sushisIndex, money, eatenSushis} = this.state
    return (
      <div className="app">
        <SushiContainer 
          changePage={this.changePage}
          eatSushi={this.eatSushi}
          sushisSet={sushis.slice(sushisIndex, sushisIndex + 4)} />
        <Table money={money} eatenSushis={eatenSushis}/>
      </div>
    );
  }
}

export default App;