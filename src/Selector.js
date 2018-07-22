import React from 'react';
import "./Selector.css";
import 'tachyons';

const planetOptions = (planetArray) => {
  if (planetArray.length > 0) {
    return planetArray.map(planet => {
      return <option
        key={planet.name}
        value={planet.name}
      >
        {planet.name}
      </option>
    })
  }
}


const Selector = (props) => {
  console.log("Selector", props);
  return (
    <div className="ma3">
      <select className="pa3 ba b--yellow bg-light-yellow w-25 tc"
        onChange={props.planetSelect}>
        {planetOptions(props.planets)}
      </select>
    </div>
  )
}

export default Selector;