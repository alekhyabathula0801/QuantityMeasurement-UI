import axios from "axios";

var url = "http://localhost:8080/quantity-measurement";

export async function getConvertedValue(unit, value, requiredUnit) {
  return await axios.get(`${url}/${unit}/${value}/${requiredUnit}`);
}

export async function getMeasurementTypes() {
  return await axios.get(url);
}

export async function getUnitsOfGivenMeasurementType(measurementType) {
  return await axios.get(`${url}/${measurementType}`);
}
