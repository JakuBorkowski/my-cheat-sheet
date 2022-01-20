import { useEffect, useState } from "react";
import "./App.css";
import Element from "./element";

function App() {

  const [data, setData] = useState([])

  useEffect( ()=>{
    fetch("data.json")
    .then(response => {

      if (response.ok){
        return response.json()
      }
      throw response;
    })
    .then(data=>{
      setData(data);
    })
  },
  []
  )
  const mapElement = (data) => {
    return (
      <Element
        name={data.name}
        text={data.text}
        key={data.id}
        element={data.data.map(mapElement)}
      />
    );
  };

  return <>{data.map(mapElement)} 
  </>;
}
export default App;
