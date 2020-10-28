import React, {ReactElement, useState} from 'react';
import BoxshadowTool from '../Components/BoxshadowTool';


function TransfromPage():ReactElement {
  interface Shadow {
    offsetX?: string,
    offsetY?: string,
    blur?: string,
    spread?: string,
    color?: string,
  }

  const [shadows, setShadows] = useState([{
    offsetX: '0',
    offsetY: '0',
    blur: '10',
    spread: '0',
    color: '#f1f1f1'
  }]);

  const style = shadows.map((item: Shadow) => `${item.offsetX}px ${item.offsetY}px ${item.blur}px ${item.spread}px ${item.color}`);

  let boxShadowStyle = {
    height: `100px`,
    width: `100px`,
    boxShadow: style.toString()
  }

  /**
   * 
   * @param val 
   */
  const valueChangeHandle = (val: Shadow, index: number) => {
    setShadows([...shadows].map((item, subIndex) => index === subIndex ? Object.assign(item, val) : item));
  }

  const addShadowHandle = () => {
    setShadows([...shadows, {
      offsetX: '0',
      offsetY: '0',
      blur: '10',
      spread: '0',
      color: '#f1f1f1'
    }]);
  }

  return (
    <section className="wrap">
      <div className="actions">
        <h3>box-shadow</h3>
        {
          shadows.map((item:any, index) => <BoxshadowTool
             key={`s-${index}`}
             index={index} 
             offsetX={item.offsetX}
             offsetY={item.offsetY}
             blur={item.blur}
             spread={item.spread}
             color={item.color}
             valueChange={valueChangeHandle}
             addShadow={addShadowHandle} />)
        }
        
      </div>
      <div className="right-pannel">
        <div className="result">
          <div className="box" style={boxShadowStyle}></div>
        </div>
        <div className="code">
        <code>
          <pre>box-shadow: {style.toString()};</pre>
        </code>
        </div>
      </div>
      
    </section>
  );
}

export default TransfromPage;