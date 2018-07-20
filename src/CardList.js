import React from 'react';
import Card from './Card';

const CardList = ({planets}) => {
  console.log("CardList", planets.earth)
  return (
    <div>
      <Card planet={planets.earth} />
    </div>
  )
}

export default CardList;