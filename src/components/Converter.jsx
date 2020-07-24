import React, { Component } from "react";

class Converter extends Component {
  render() {
    return (
      <div id={this.props.name}>
        <span id="converter-table-name">{this.props.name}</span>
        <input type="text" />
        <select>
          {this.props.units.map((unit) => (
            <option>{unit}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Converter;
