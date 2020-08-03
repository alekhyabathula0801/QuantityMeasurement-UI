import React, { Component } from "react";
import MeasurementTypes from "./MeasurementTypes";
import Converter from "./Converter";
import { getConvertedValue } from "../service/service";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuantity: this.props.unit[0],
      fromValue: 0,
      fromUnit: this.props.unit[0].units[0],
      toUnit: this.props.unit[0].units[1],
      toValue: 0,
    };
    this.setQuantity = this.setQuantity.bind(this);
    this.setFromValue = this.setFromValue.bind(this);
    this.setFromUnit = this.setFromUnit.bind(this);
    this.setToUnit = this.setToUnit.bind(this);
    this.setToValue = this.setToValue.bind(this);
  }

  setQuantity(quantity) {
    this.setState(
      {
        currentQuantity: quantity,
        fromValue: 0,
        fromUnit: quantity.units[0],
        toUnit: quantity.units[1],
      },
      () => this.getToResult()
    );
  }

  componentDidMount() {
    this.getToResult();
  }

  setFromUnit = async (event) => {
    this.setState({ fromUnit: event.target.value });
    await this.getToResult();
  };

  setToUnit = async (event) => {
    this.setState({ toUnit: event.target.value });
    await this.getToResult();
  };

  setFromValue = async (event) => {
    let value = event.target.value;
    let result = await this.getResult(
      document.getElementById("from-select").value,
      value,
      document.getElementById("to-select").value
    );
    this.setState({ fromValue: value, toValue: result });
  };

  setToValue = async (event) => {
    let value = event.target.value;
    let result = await this.getResult(
      document.getElementById("to-select").value,
      value,
      document.getElementById("from-select").value
    );
    this.setState({ fromValue: result, toValue: value });
  };

  async getToResult() {
    let value = document.getElementById("from-input").value;
    let result = await this.getResult(
      document.getElementById("from-select").value,
      value,
      document.getElementById("to-select").value
    );
    this.setState({ toValue: result });
  }

  async getResult(unit, value, requiredUnit) {
    console.log(unit + " " + value + " " + requiredUnit);
    if (value !== "") {
      let result = await getConvertedValue(unit, value, requiredUnit);
      this.props.updateHistory(unit, value, requiredUnit, result);
      return result;
    } else {
      return "";
    }
  }

  render() {
    let measurementTypesButtons = this.props.unit.map((quantity) => (
      <MeasurementTypes
        key={quantity.measurementType}
        quantity={quantity}
        setQuantity={this.setQuantity}
        isActive={
          this.state.currentQuantity.measurementType ===
          quantity.measurementType
        }
      />
    ));

    return (
      <div className="main">
        <div id="main-text">CHOOSE TYPE</div>
        <div id="quantity">{measurementTypesButtons}</div>
        <div id="converter">
          <Converter
            name="from"
            units={this.state.currentQuantity.units}
            setUnit={this.setFromUnit}
            setValue={this.setFromValue}
            value={this.state.fromValue}
            selectedUnit={this.state.toUnit}
          />

          <Converter
            name="to"
            units={this.state.currentQuantity.units}
            setUnit={this.setToUnit}
            setValue={this.setToValue}
            value={this.state.toValue}
            selectedUnit={this.state.fromUnit}
          />
        </div>
      </div>
    );
  }
}

export default Main;
