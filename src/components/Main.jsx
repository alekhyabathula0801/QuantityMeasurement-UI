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
      () => this.setToValue()
    );
  }

  componentDidMount() {
    this.setToValue();
  }

  setFromUnit = (event) => {
    this.setState({ fromUnit: event.target.value });
  };

  setToUnit = (event) => {
    this.setState({ toUnit: event.target.value });
  };

  setFromValue = async (event) => {
    this.setState({ fromValue: event.target.value });
  };

  setToValue = async () => {
    let unit = document.getElementById("from-select").value;
    let value = document.getElementById("from-input").value;
    let requiredUnit = document.getElementById("to-select").value;
    console.log(unit + " " + value + " " + requiredUnit);
    if (value !== "") {
      let result = await getConvertedValue(unit, value, requiredUnit);
      this.setState({ toValue: result });
      console.log(result + "is result");
      this.props.updateHistory(unit, value, requiredUnit, result);
    } else {
      this.setState({ toValue: '' });
    }
  };

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
      <div className="home">
        <div id="home-text">CHOOSE TYPE</div>
        <div id="quantity">{measurementTypesButtons}</div>
        <div id="converter">
          <Converter
            name="from"
            units={this.state.currentQuantity.units}
            setUnit={this.setFromUnit}
            setValue={this.setFromValue}
            setToValue={this.setToValue}
            value={this.state.fromValue}
            selectedUnit={this.state.toUnit}
            placeholder="Enter Number"
          />

          <Converter
            name="to"
            units={this.state.currentQuantity.units}
            setUnit={this.setToUnit}
            setValue={this.setToValue}
            setToValue={this.setToValue}
            value={this.state.toValue}
            selectedUnit={this.state.fromUnit}
            placeholder="Result"
          />
        </div>
      </div>
    );
  }
}

export default Main;
