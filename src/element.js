import React, { useState } from 'react';

function Element(props) {
  const [active, setActive] = useState(true)

  const handeClick = ()=>{
    setActive(!active)
  }

  return (
   <>
   <div className='element'>
        <div className='elementName'><button onClick={handeClick}>{ active ? "+" : "-" }</button>
        <h1>{props.name}</h1></div>
        {active ? null : <div className='context'> <p>{props.text}</p><br/>{props.element}  </div>} 
    </div>
   </>
  );
}
export default Element;
