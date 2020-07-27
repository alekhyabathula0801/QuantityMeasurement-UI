import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        id={this.props.quantity.measurementType}
        onClick={() => this.props.setQuantity(this.props.quantity)}
      >
        <div id="quantity-image"></div>
        <div id="quantity-name">{this.props.quantity.measurementType}</div>
      </button>
    );
  }
}

export default Button;
