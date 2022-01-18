import "./App.css";
import Element from "./element";

function App() {
  //tablica z danymi
  const data = [
    { name: "git", id: 1, text: "text git", data: [] },
    {
      name: "java script",
      id: 2,
      text: "text js",
      data: [
        {
          name: "tablice",
          id: [2, 1],
          text: "text tablice",
          data: [
            {
              name: "tworzenie nowych tablic",
              id: [2, 1, 1],
              text: "tekst tworzenie",
              data: [],
            },
            {
              name: "kopiowanie tablic",
              id: [2, 1, 2],
              text: "text kopiowanie",
              data: [],
            },
          ],
        },
        { name: "pętle", id: [2, 2], text: "tekst pętle", data: [] },
      ],
    },
  ];

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

  return <>{data.map(mapElement)}</>;
}
export default App;
