import React, { Component } from "react";
import Header from "./components/Header";
import "./css/quantity.scss";
import Main from "./components/Main";

class App extends Component {
  render() {
    // var message = ["from", "to"];
    var unit = [
      {
        measurementType: "Length",
        units: ["Metre", "Inch", "Feet","Millimetre"],
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
        <Main unit={unit} />
      </div>
    );
  }
}

export default App;
