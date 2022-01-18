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
        <p>
        {active ? null : props.text} 
        {active ? null : props.element}
        </p>
   </>
  );
}
export default Element;
