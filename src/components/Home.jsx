import React, { Component } from "react";
import Button from "./Button";

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
        <text>CHOOSE TYPE</text>
        <div id="quantity">{quantityTypesButtons}</div>
      </div>
    );
  }
}

export default Home;
