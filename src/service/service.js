import axios from "axios";

var url = "http://localhost:8080/quantity-measurement";

export function getConvertedValue(unit, value, requiredUnit) {
  return axios.get(`${url}/${unit}/${value}/${requiredUnit}`);
}

export function getAvailableMeasurementTypes() {
  return axios.get(url);
}

export function getUnitsOfGivenMeasurementType(measurementType) {
  return axios.get(`${url}/${measurementType}`);
}
