import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className={this.props.name}>
        <div id="quantity-image"></div>
        <div id="quantity-name">{this.props.name}</div>
      </button>
    );
  }
}

export default Button;
