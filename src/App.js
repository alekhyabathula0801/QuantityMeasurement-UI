import React from "react";
import Header from "./components/Header";
import "./css/quantity.scss";
import Home from "./components/Home";

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
      <Home unit={unit} message={message} />
    </div>
  );
}

export default App;
