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
        toValue: 0,
        fromUnit: quantity.units[0],
        toUnit: quantity.units[1],
      },
      () => this.setToValue()
    );
  }

  componentDidMount() {
    this.setToValue();
  }

  setFromUnit(event) {
    this.setState({ fromUnit: event.target.value });
  }

  setToUnit(event) {
    this.setState({ toUnit: event.target.value });
  }

  setFromValue(event) {
    this.setState({ fromValue: event.target.value });
  }

  async setToValue() {
    var unit = document.getElementById("from-select").value;
    var value = document.getElementById("from-input").value;
    var requiredUnit = document.getElementById("to-select").value;
    console.log(unit + " " + value + " " + requiredUnit);
    var result = await getConvertedValue(unit, value, requiredUnit).then(
      (response) => {
        this.setState({ toValue: response.data.result });
        return response.data.result;
      }
    ).catch((error) => {
      console.log(error)
    });
    console.log(result + "is result");
  }

  render() {
    var measurementTypesButtons = this.props.unit.map((quantity) => (
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
            key="from"
            name="from"
            units={this.state.currentQuantity.units}
            setUnit={this.setFromUnit}
            setValue={this.setFromValue}
            setToValue={this.setToValue}
            value={this.state.fromValue}
            selectedUnit={this.state.toUnit}
          />

          <Converter
            key="to"
            name="to"
            units={this.state.currentQuantity.units}
            setUnit={this.setToUnit}
            setValue={this.setToValue}
            setToValue={this.setToValue}
            value={this.state.toValue}
            selectedUnit={this.state.fromUnit}
          />
        </div>
      </div>
    );
  }
}

export default Main;
