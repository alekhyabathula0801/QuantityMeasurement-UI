import React, { Component } from "react";

class Converter extends Component {
  render() {
    return (
      <div id={this.props.name} onChange={this.props.setToValue}>
        <span id="converter-table-name">{this.props.name}</span>
        <input
          type="number"
          onChange={this.props.setValue}
          value={this.props.value}
          id={`${this.props.name}-input`}
        />
        <select onChange={this.props.setUnit} id={`${this.props.name}-select`}>
          {this.props.units.map((unit) => (
            <option
              key={unit}
              value={unit}
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
