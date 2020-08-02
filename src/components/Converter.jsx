import React, { Component } from "react";

class Converter extends Component {
  render() {
    return (
      <div id={this.props.name}>
        <span id="converter-table-name">{this.props.name}</span>
        <input
          type="number"
          title="positive numbers"
          onChange={this.props.setValue}
          value={this.props.value}
          id={`${this.props.name}-input`}
          placeholder="Enter Number"
        />
        <select onChange={this.props.setUnit} id={`${this.props.name}-select`}>
          {this.props.units.map((unit) => (
            <option
              key={unit}
              value={unit}
              disabled={this.props.selectedUnit === unit ? true : null}
            >
              {unit}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Converter;
