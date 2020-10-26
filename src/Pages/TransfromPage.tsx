import React, {useState} from 'react';
import BoxshadowTool from '../Components/BoxshadowTool';

function TransfromPage() {
  const [tools, setTools] = useState([{
    offsetX: 0,
    offsetY: '0',
    blur: '10',
    spread: '0',
    color: 'rgba(0,0,0,0.1)'
  }]);
  const style = tools.map(item => `${item.offsetX}px ${item.offsetY}px ${item.blur}px ${item.spread}px ${item.color}`);
  let boxShadowStyle = {
    height: `100px`,
    width: `100px`,
    boxShadow: style.toString()
  }

  return (
    <section className="wrap">
      <div className="actions">
        <h3>box-shadow</h3>
        {
          tools.map(item => <BoxshadowTool key='s' properties={item} />)
        }
        
      </div>
      <div className="right-pannel">
        <div className="result">
          <div className="box" style={boxShadowStyle}></div>
        </div>
        <div className="code">
          <pre>
            <code>
                box-shadow: {style.toString()}
            </code>
          </pre>
        </div>
      </div>
      
    </section>
  );
}

export default TransfromPage;