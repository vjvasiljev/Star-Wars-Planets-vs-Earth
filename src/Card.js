import React from 'react';

const Card = ({ earth }) => {
  console.log("Earth", earth.population);
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
  } = earth;
  // const {population} = earth;
  // console.log(earth, population);
  return (
    <div className="bg-near-black dib pa3 ma2 bw2 shadow-5 white">
      <h2 className="f2 yellow">{name}</h2>
      <p>Population: {population}</p>
      <p>Diameter: {diameter}m</p>
      <p>Rotation Period: {rotation_period}h</p>
      <p>Orbital Period: {orbital_period} days</p>
      <p>Climate: {climate}</p>
      <p>Gravity: {gravity}</p>
      <p>Terrain: {terrain}</p>
      <p>Surface Water: {surface_water}% </p>
    </div>
  )
}

export default Card;