import React from 'react';
import 'tachyons';

const Graph = (props) => {
  console.log("Graph", props.proportions);
  const mainClass = "h-5 ma0 pa2 dib";
  let greenClass = `${mainClass} bg-green`;
  let redClass = `${mainClass} bg-red`;
  console.log("greenClass", greenClass);
  return (
    <div>
      <div className={greenClass} style={{ width: (props.proportions.population) * 3 }}>{props.proportions.population}</div>
      <div className={redClass} style={{ width: (100-props.proportions.population)*3}}>{100-props.proportions.population}</div>
    </div>
  )
}

export default Graph;