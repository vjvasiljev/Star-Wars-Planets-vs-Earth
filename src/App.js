import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      earth: {
        name: "Earth",
        rotation_period: 24,
        orbital_period: 365,
        climate: "temperate",
        gravity: "1 standart",
        terrain: "mixed",
        surface_water: 71,
        population: 7637159732,
        diameter: 12742,

      },
      swPlanet: {}
    }
  }
  render() {
    const { earth, swPlanet } = this.state;
    console.log(earth.population);
    return (
      <div className="App tc ">
        <Header />
        <Card earth={earth}/>
        <Card earth={earth}/>
      </div>
    );
  }
}

export default App;
