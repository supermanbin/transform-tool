import React, {useState} from 'react';

const BoxshadowTool = (properties: any) => {
  // const [properties, setProperty] = useState({...properties});
  // const 
  console.log(properties);
  const {offsetX} = properties;
  return (
    <div className="property">
      <label htmlFor="offsetX">
        <p>offset-x:</p>
        <input value={properties.offsetX}
          type="number" 
          name="" 
          id="offsetX"
          onChange={(e) => {
          }}
          />
      </label>
      <label htmlFor="offsetY">
        <p>offset-y:</p>
        <input value={properties.offsetY}
          type="number" 
          name="" 
          id="offsetY"
          onChange={(e) => {
          }}
          /></label>
      <label htmlFor="blur">
        <p>blur-radius:</p>
        <input value={properties.blur}
          type="number" 
          name="" 
          id="blur"
          onChange={(e) => {
          }}
          /></label>
      <label htmlFor="spreadRadius">
        <p>spread-radius:</p>
        <input value={properties.spread}
          type="number" 
          name="" 
          id="spreadRadius"
          onChange={(e) => {
          }}
          /></label>
      <label htmlFor="color">
        <p>color:</p>
        <input value={properties.color}
          type="color" 
          name="" 
          id="color"
          onChange={(e) => {
          }}
          /></label>
    </div>
  )
}

export default BoxshadowTool;