import React, { Component } from 'react';
import Header from './Header';
import Selector from './Selector';
import CardList from './CardList';
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
      swPlanet: {},
      planetSelectField: ''
    }
  }

  componentDidMount() {
    //connect to SW API
    fetch(`https://swapi.co/api/planets/`)
      .then(resp => resp.json())
      .then(planet => this.setState({ swPlanet: planet.results }));
        // this.setState({swPlanet: planet}));
  }

  onPlanetSelect = (event) => {
    console.log(event.target.value);
    this.setState({ planetSelectField: event.target.value });
  }

  render() {
    const { earth, swPlanet } = this.state;
    // console.log(earth.population);
    return (
      <div className="App tc bg-dark-gray">
        <Header />
        <Selector planets={swPlanet} planetSelect={this.onPlanetSelect}/>
        <CardList planets={this.state} />
      </div>
    );
  }
}

export default App;
