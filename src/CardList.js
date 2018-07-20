import React from 'react';
import Card from './Card';

const CardList = ({planets}) => {
  console.log("CardList", planets.earth)
  return (
    <div>
      <Card planet={planets.earth} />
      <Card planet={planets.swPlanet} />
    </div>
  )
}

export default CardList;