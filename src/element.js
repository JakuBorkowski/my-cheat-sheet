import React, { useState } from 'react';

function Element(props) {
  const [active, setActive] = useState(true)

  const handeClick = ()=>{
    setActive(!active)
  }

  return (
   <>
        <button onClick={handeClick}>{ active ? "+" : "-" }</button>
        <h1>{props.name}</h1>
        {active ? null : <div> <p>{props.text}</p> {props.element}  </div>} 
   </>
  );
}
export default Element;
