import React from 'react';
import Card from './Card';

//create a list of Cards
const CardList = ({planets}) => {
  console.log("CardList", planets.earth)
  return (
    <div className="bg-dark-gray">
      <Card planet={planets.earth} />
      <Card planet={planets.swPlanet} />
    </div>
  )
}

export default CardList;