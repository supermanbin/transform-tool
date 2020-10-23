import React, {useState} from 'react';

function TransfromPage() {
  const [preoperty, setProperty] = useState({
    offsetX: 0,
    offsetY: '0',
    blur: '10',
    spread: '0',
    color: 'rgba(0,0,0,0.1)'
  });
  const boxShadowStyle = {
    height: `100px`,
    width: `100px`,
    'boxShadow': `${preoperty.offsetX}px ${preoperty.offsetY}px ${preoperty.blur}px ${preoperty.spread}px ${preoperty.color}`
  }
  // const onChangeHandle = (e:React.ChangeEvent<HTMLInputElement>, id:string) => {
  //   const a = {id: e.target.value};
  //   console.log(a);
    
  // }
  return (
    <section className="wrap">
      <div className="actions">
        <h3>box-shadow</h3>
        <div className="property">
          <label htmlFor="offsetX">
            offset-x: 
            <input value={preoperty.offsetX}
             type="number" 
             name="" 
             id="offsetX"
             onChange={(e) => {
              setProperty(Object.assign({}, preoperty, {offsetX: e.target.value}));
             }}
             />
          </label>
          <label htmlFor="offsetY">
            offset-y: 
            <input value={preoperty.offsetY}
             type="number" 
             name="" 
             id="offsetY"
             onChange={(e) => {
              setProperty(Object.assign({}, preoperty, {offsetY: e.target.value}));
             }}
             /></label>
          <label htmlFor="blur">
            blur-radius: 
            <input value={preoperty.blur}
             type="number" 
             name="" 
             id="blur"
             onChange={(e) => {
              setProperty(Object.assign({}, preoperty, {blur: e.target.value}));
             }}
             /></label>
          <label htmlFor="spreadRadius">
            spread-radius: 
            <input value={preoperty.spread}
             type="number" 
             name="" 
             id="spreadRadius"
             onChange={(e) => {
              setProperty(Object.assign({}, preoperty, {spread: e.target.value}));
             }}
             /></label>
          <label htmlFor="color">
            color: 
            <input value={preoperty.color}
             type="color" 
             name="" 
             id="color"
             onChange={(e) => {
              setProperty(Object.assign({}, preoperty, {color: e.target.value}));
             }}
             /></label>
        </div>
      </div>
      <div className="right-pannel">
        <div className="result">
          <div className="box" style={boxShadowStyle}></div>
        </div>
        <div className="code">
          <pre>
            <code>
                box-shadow: {preoperty.offsetX}px {preoperty.offsetY}px {preoperty.blur}px {preoperty.spread}px {preoperty.color}
            </code>
          </pre>
        </div>
      </div>
      
    </section>
  );
}

export default TransfromPage;