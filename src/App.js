import React, { Component } from "react";
import Header from "./components/Header";
import "./css/quantity.scss";
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
      quantiyTypes: [],
      measurementUnits: [
        {
          measurementType: "LENGTH",
          units: [
            "INCH",
            "FEET",
            "MILLIMETRE",
            "YARD",
            "METRE",
            "CENTIMETRE",
            "KILOMETRE",
          ],
        },
      ],
    };
  }

  async componentDidMount() {
    await this.getMeasurementType();
    console.log(this.state.quantiyTypes[0]);
    this.state.quantiyTypes.forEach((element) => {
      this.getUnits(element);
    });
  }

  async getMeasurementType() {
    await getAvailableMeasurementTypes()
      .then((response) => {
        this.setState(
          {
            quantiyTypes: response.data.result,
          },
          () => console.log(this.state.quantiyTypes)
        );
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ measurementUnits: [] });
  }

  async getUnits(measure) {
    await getUnitsOfGivenMeasurementType(measure)
      .then((res) => {
        let measurementAndUnit = {
          measurementType: measure,
          units: res.data.result,
        };
        console.log(
          measurementAndUnit.measurementType +
            " units are " +
            measurementAndUnit.units
        );
        this.setState(
          {
            measurementUnits: [
              ...this.state.measurementUnits,
              measurementAndUnit,
            ],
          },
          () => console.log(this.state.measurementUnits)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route
            path="/"
            exact
            render={() => <Main unit={this.state.measurementUnits} />}
          />
          <Route path="/history" component={History} />
        </Router>
      </div>
    );
  }
}

export default App;
