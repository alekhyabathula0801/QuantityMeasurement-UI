import React, { Component } from "react";
import Header from "./components/Header";
import "./css/quantity.scss";
import "./css/history.scss";
import Main from "./components/Main";
import {
  getAvailableMeasurementTypes,
  getUnitsOfGivenMeasurementType,
} from "./service/service";
import { BrowserRouter as Router, Route } from "react-router-dom";
import History from "./components/History";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoding: true,
      quantiyTypes: [],
      historyData:
        JSON.parse(localStorage.getItem("quantityMeasurementHistory")) || [],
      measurementUnits: [],
    };
    this.updateHistory = this.updateHistory.bind(this);
  }

  async componentDidMount() {
    await this.getMeasurementType();
    console.log(this.state.quantiyTypes);
    for (let index in this.state.quantiyTypes) {
      await this.getUnits(this.state.quantiyTypes[index]);
    }
    this.setState({ isLoding: false });
  }

  async getMeasurementType() {
    let measurementTypes = await getAvailableMeasurementTypes();
    this.setState(
      {
        quantiyTypes: measurementTypes,
      },
      () => console.log(this.state.quantiyTypes)
    );
    this.setState({ measurementUnits: [] });
  }

  async getUnits(measurement) {
    let units = await getUnitsOfGivenMeasurementType(measurement);
    let measurementAndUnit = {
      measurementType: measurement,
      units: units,
    };
    console.log(
      measurementAndUnit.measurementType +
        " units are " +
        measurementAndUnit.units
    );
    this.setState(
      {
        measurementUnits: [...this.state.measurementUnits, measurementAndUnit],
      },
      () => console.log(this.state.measurementUnits)
    );
  }

  updateHistory(unit, value, requiredUnit, result) {
    let data = {
      unit: unit,
      value: value,
      requiredUnit: requiredUnit,
      result: result,
    };
    this.setState(
      {
        historyData: [...this.state.historyData, data],
      },
      () => console.log(this.state.historyData),
      localStorage.setItem(
        "quantityMeasurementHistory",
        JSON.stringify(this.state.historyData)
      )
    );
  }

  render() {
    if (this.state.isLoding) {
      return <div id="loader">Loading ........</div>;
    } else {
      return (
        <div className="App">
          <Router>
            <Header />
            <Route
              path="/"
              exact
              render={() => (
                <Main
                  unit={this.state.measurementUnits}
                  updateHistory={this.updateHistory}
                />
              )}
            />
            <Route
              path="/history"
              render={() => <History historyData={this.state.historyData} />}
            />
          </Router>
        </div>
      );
    }
  }
}

export default App;
