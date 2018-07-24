import React from 'react';


//Destructure planet object
const Card = ({planet = {name: "Loading..."}}) => {
  // console.log("Earth", planet);
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
  } = planet;
  // const {population} = earth;
  // console.log(earth, population);
  return (

    //TODO check if uknown and remove measurement units
    //insert info about a planet into the Card
    <div className="bg-near-black dib pa3 ma3 bw2 shadow-5 white w-25">
      <h2 className="f2 yellow">{name}</h2>
      <p>Population: {population}</p>
      <p>Diameter: {diameter}m</p> 
      <p>Rotation Period: {rotation_period}h</p>
      <p>Orbital Period: {orbital_period} days</p>
      {/* <p>Climate: {climate}</p>
      <p>Gravity: {gravity}</p>
      <p>Terrain: {terrain}</p> */}
      <p>Surface Water: {surface_water}% </p>
    </div>
  )
}

export default Card;