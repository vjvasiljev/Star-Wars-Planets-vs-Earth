import React from 'react';
import "tachyons";

const CardCompare = props => {

  const iteratePlanets = (earth, swPlanet) => {
    
  }

  const comparePlanets = (earth, swPlanet) => {
    console.log("ComparePlanets", earth, swPlanet);
    const diffData = {};
    //iterate through planet objects, find same entries, add the diffrence to a new planet Object
    Object.entries(earth).forEach(value => {
      console.log(value[1], swPlanet[value[0]]);
      if (typeof value[1] === "string") {
        diffData[value[0]] = value[1] + swPlanet[value[0]];
      } else if (typeof value[1] === "number") {
        diffData[value[0]] = value[1] - swPlanet[value[0]];
        
        console.log(diffData);
      }
    });
    return diffData;
  }

  const getSliderProportions = (earth, swPlanet) => {
    const proportionData = {};
    Object.entries(earth).forEach(value => {
      console.log(value[1], swPlanet[value[0]]);
      if (typeof value[1] === "number") {
        const total = (value[1] + parseInt(swPlanet[value[0]]));
          console.log(total);
        proportionData[value[0]] = Math.floor(value[1] * 100 / total);
      }
    });
    return proportionData;
  }

  const {
    population,
    diameter,
    name,
    rotation_period,
    orbital_period,
    climate,
    gravity,
    terrain,
    surface_water
  } = comparePlanets(props.planets.earth, props.planets.selectedPlanet);

  const proportions = getSliderProportions(props.planets.earth, props.planets.selectedPlanet);
  console.log("Proportions", proportions.population);
  const x = proportions.population;


  //const populationDiff = population - props.planets.selectedPlanet.population;
  // console.log(population, );
  return (< div className="bg-near-black dib pa3 ma3 bw2 shadow-5 white w-25" >
    <h2 className="f2 yellow">Diffrence</h2>
    <div className={`w-${proportions.population} bg-green h-5 ma0 dib`}>s</div>
    <div className={`w-${100 - proportions.population} bg-red h-5 ma0 dib`}>s</div>
    <p>Population: {population}</p>
    <p>Diameter: {diameter}m</p>
    <p>Rotation Period: {rotation_period}h</p>
    <p>Orbital Period: {orbital_period} days</p>
    <p>Climate: {climate}</p>
    <p>Gravity: {gravity}</p>
    <p>Terrain: {terrain}</p>
    <p>Surface Water: {surface_water}% </p>
  </div>)
}

export default CardCompare;