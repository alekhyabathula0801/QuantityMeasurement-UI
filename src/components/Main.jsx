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
      message:'',
    };
    this.setQuantity = this.setQuantity.bind(this);
    this.setConvertedValueFromFirstUnitToSecondUnit = this.setConvertedValueFromFirstUnitToSecondUnit.bind(this);
    this.setFromUnit = this.setFromUnit.bind(this);
    this.setToUnit = this.setToUnit.bind(this);
    this.setConvertedValueFromSecondUnitToFirstUnit = this.setConvertedValueFromSecondUnitToFirstUnit.bind(this);
  }

  setQuantity(quantity) {
    this.setState(
      {
        currentQuantity: quantity,
        fromValue: 0,
        fromUnit: quantity.units[0],
        toUnit: quantity.units[1],
        message:'',
      },
      () => this.setToValue()
    );
  }

  componentDidMount() {
    this.setToValue();
  }

  setFromUnit = (event) => {
    this.setState({ fromUnit: event.target.value }, () => this.setToValue());
  };

  setToUnit = (event) => {
    this.setState({ toUnit: event.target.value }, () => this.setToValue());
  };

  setConvertedValueFromFirstUnitToSecondUnit = async (event) => {
    let value = event.target.value;
    let result = await this.getResult(
      this.state.fromUnit,
      value,
      this.state.toUnit
    );
    this.setState({ fromValue: value, toValue: result });
  };

  setConvertedValueFromSecondUnitToFirstUnit = async (event) => {
    let value = event.target.value;
    let result = await this.getResult(
      this.state.toUnit,
      value,
      this.state.fromUnit
    );
    this.setState({ fromValue: result, toValue: value });
  };

  async setToValue() {
    let value = this.state.fromValue;
    let result = await this.getResult(
      this.state.fromUnit,
      value,
      this.state.toUnit
    );
    this.setState({ toValue: result });
  }

  async getResult(unit, value, requiredUnit) {
    if(value < 0 && this.state.currentQuantity.measurementType !== "temperature") {
      this.setState({message: this.state.currentQuantity.measurementType + " cannot be negative"});
      return '';
    } else if (value !== "") {
      this.setState({message:""});
      let result = await getConvertedValue(unit, value, requiredUnit);
      this.props.updateHistory(unit, value, requiredUnit, result);
      console.log(unit + " " + value + " " + requiredUnit + " " + result);
      return result;
    } else {
      this.setState({message:""});
      console.log(unit + " " + value + " " + requiredUnit + " ");
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
        <div id="message">{this.state.message}</div>
        <div id="converter">
          <Converter
            name="from"
            units={this.state.currentQuantity.units}
            setUnit={this.setFromUnit}
            setValue={this.setConvertedValueFromFirstUnitToSecondUnit}
            value={this.state.fromValue}
            selectedUnit={this.state.toUnit}
          />

          <Converter
            name="to"
            units={this.state.currentQuantity.units}
            setUnit={this.setToUnit}
            setValue={this.setConvertedValueFromSecondUnitToFirstUnit}
            value={this.state.toValue}
            selectedUnit={this.state.fromUnit}
          />
        </div>
      </div>
    );
  }
}

export default Main;
