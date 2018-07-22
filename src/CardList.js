import React from 'react';
import Card from './Card';
import CardCompare from './CardCompare';

//create a list of Cards
const CardList = (props) => {
  console.log("CardList", props.selectedPlanet)
  return (
    <div className="bg-dark-gray">
      <Card planet={props.earth} />
      <CardCompare planets={props}/>
      <Card planet={props.selectedPlanet} />
    </div>
  )
}

export default CardList;