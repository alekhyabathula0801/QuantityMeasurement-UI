import React, { Component } from "react";
import Button from "./Button";
import Converter from "./Converter";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuantity: this.props.unit[0],
    };
    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(quantity) {
    this.setState({ currentQuantity: quantity });
  }

  render() {
    var quantityTypesButtons = this.props.unit.map((quantity) => (
      <Button quantity={quantity} setQuantity={this.setQuantity} />
    ));
    var converter = this.props.message.map((message) => (
      <Converter name={message} units={this.state.currentQuantity.units} />
    ));
    return (
      <div className="home">
        <div id="home-text">CHOOSE TYPE</div>
        <div id="quantity">{quantityTypesButtons}</div>
        <div id="converter">{converter}</div>
      </div>
    );
  }
}

export default Home;
