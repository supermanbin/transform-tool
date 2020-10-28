import React, { ReactElement } from 'react';
import {useSpring, animated} from 'react-scripts';

const BoxshadowTool = (properties: any):ReactElement => {
  const {
    index,
    offsetX,
    offsetY,
    blur,
    spread,
    color,
    valueChange,
    addShadow
  } = properties;
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <animated.div className="property" onMouseEnter={()=> {
    }}>
      <label htmlFor="offsetX">
        <p>offset-x:</p>
        <input value={offsetX}
          type="number" 
          name="" 
          id="offsetX"
          onChange={(e) => {
            valueChange({offsetX: e.target.value}, index);
          }}
          />
      </label>
      <label htmlFor="offsetY">
        <p>offset-y:</p>
        <input value={offsetY}
          type="number" 
          name="" 
          id="offsetY"
          onChange={(e) => {
            valueChange({offsetY: e.target.value}, index);
          }}
          /></label>
      <label htmlFor="blur">
        <p>blur-radius:</p>
        <input value={blur}
          type="number" 
          name="" 
          id="blur"
          onChange={(e) => {
            valueChange({blur: (parseInt(e.target.value) < 0) ? 0 : e.target.value}, index);
          }}
          /></label>
      <label htmlFor="spreadRadius">
        <p>spread-radius:</p>
        <input value={spread}
          type="number" 
          name="" 
          id="spreadRadius"
          onChange={(e) => {
            valueChange({spread: e.target.value}, index);
          }}
          /></label>
      <label htmlFor="color">
        <p>color:</p>
        <input value={color}
          type="color" 
          name="" 
          id="color"
          onChange={(e) => {
            valueChange({color: e.target.value}, index);
          }}
          /></label>
          <button className="add" onClick={addShadow}><span></span></button>
    </animated.div>
  )
}

export default BoxshadowTool;