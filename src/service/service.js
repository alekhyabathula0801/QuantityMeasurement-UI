import axios from "axios";
let url = process.env.REACT_APP_API_URL;

export function getConvertedValue(unit, value, requiredUnit) {
  return axios
    .get(`${url}/${unit}/${value}/${requiredUnit}`)
    .then((response) => {
      return response.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAvailableMeasurementTypes() {
  return axios
    .get(url)
    .then((response) => {
      console.log(response.data.result);
      return response.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getUnitsOfGivenMeasurementType(measurementType) {
  return axios
    .get(`${url}/${measurementType}`)
    .then((response) => {
      console.log(response.data.result);
      return response.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
}
