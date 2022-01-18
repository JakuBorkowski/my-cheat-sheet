import './App.css';
import Element from './element';

function App() {
  //tablica z danymi
  const data = [
    {name:"git", id:1,text:"lorem", data:[] },
    {name: "java script", id:2, text:"też lorem", data:[
      {name: "tablice", id:[2,1], text:"jeszcze inne lorem", data:[]},
      {name: "pętle", id:[2,2], text:"to samo lorem", data:[]}
    ]}
  ]

  return (
   <>
   {/*mapa danych która przypisuje przy użyciu propsów dane z tablicy*/}
  {data.map((data)=>{return <Element name={data.name} text={data.text} key={data.id} 
  element={data.data.map((dat)=>{return <Element name={dat.name} text={dat.text} key={dat.id} element={null}/>})
  }/>})}
   </>
  );
}



export default App;
