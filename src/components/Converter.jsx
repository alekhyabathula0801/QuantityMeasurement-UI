import React, { Component } from "react";

class Converter extends Component {
  render() {
    return (
      <div id={this.props.name} onChange={this.props.setToValue}>
        <span id="converter-table-name">{this.props.name}</span>
        <input
          type="text"
          onChange={this.props.setValue}
          value={this.props.value}
          id={`${this.props.name}-input`}
          placeholder={this.props.placeholder}
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
