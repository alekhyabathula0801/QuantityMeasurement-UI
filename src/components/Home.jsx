import React, { Component } from "react";
import Button from "./Button";
import Converter from "./Converter";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      quantityTypes: ["Length", "Temperature", "Volume"]
    };
  }
  render() {
    var quantityTypesButtons = this.state.quantityTypes.map((quantity) => (
      <Button name={quantity} />
    ));
    return (
      <div className="home">
        <div id="home-text">CHOOSE TYPE</div>
        <div id="quantity">{quantityTypesButtons}</div>
        <div id="converter">
          <Converter name="from" units={["Metre", "Inch"]} />
          <Converter name="to" units={["Metre", "Inch"]} />
        </div>
      </div>
    );
  }
}

export default Home;
