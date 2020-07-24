import React from "react";
import Header from "./components/Header";
import "./css/quantity.scss";
import Main from "./components/Main";

function App() {
  var message = ["from", "to"];
  var unit = [
    {
      measurementType: "Length",
      units: ["Metre", "Inch", "Foot"],
    },
    {
      measurementType: "Temperature",
      units: ["Kelvin", "Celcius", "Fahrenheit"],
    },
    {
      measurementType: "Volume",
      units: ["Litre", "Millilitre", "Gallon"],
    },
  ];

  return (
    <div className="App">
      <Header />
      <Main unit={unit} message={message} />
    </div>
  );
}

export default App;
