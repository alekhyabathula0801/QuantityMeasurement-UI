import React, { Component } from "react";

class MeasurementTypes extends Component {
  render() {
    return (
      <button
        id={
          this.props.isActive
            ? `${this.props.quantity.measurementType}-active`
            : this.props.quantity.measurementType
        }
        onClick={() => this.props.setQuantity(this.props.quantity)}
      >
        <div id="quantity-image"></div>
        <div id="quantity-name">{this.props.quantity.measurementType}</div>
      </button>
    );
  }
}

export default MeasurementTypes;
