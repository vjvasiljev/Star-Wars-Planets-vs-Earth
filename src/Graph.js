import React from 'react';
import 'tachyons';

const Graph = (props) => {
  console.log("Graph", props);
  const mainClass = "h-5 ma0 pa2 dib";
  let greenClass = `${mainClass} bg-green`;
  let redClass = `${mainClass} bg-red`;
  console.log("greenClass", greenClass);
  return (
    <div className ="ma1">
      <div className={greenClass} style={{ width: (props.proportions) * 3 }}>{props.proportions}</div>
      <div className={redClass} style={{ width: (100-props.proportions)*3}}>{100-props.proportions}</div>
    </div>
  )
}

export default Graph;