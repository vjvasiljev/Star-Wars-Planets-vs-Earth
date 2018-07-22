import React from 'react';
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
    <div className="pa2 ma3">
      <select className="ma3">
        {planetOptions(props.planets)}
      </select>
    </div>
  )
}

export default Selector;