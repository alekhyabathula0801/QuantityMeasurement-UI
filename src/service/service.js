import axios from "axios";
let url = process.env.REACT_APP_API_URL;

export async function getConvertedValue(unit, value, requiredUnit) {
  return await axios
    .get(`${url}/${unit}/${value}/${requiredUnit}`)
    .then((response) => {
      return response.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getAvailableMeasurementTypes() {
  return await axios
    .get(url)
    .then((response) => {
      console.log(response.data.result);
      return response.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getUnitsOfGivenMeasurementType(measurementType) {
  return await axios
    .get(`${url}/${measurementType}`)
    .then((response) => {
      console.log(response.data.result);
      return response.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
}
