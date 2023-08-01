const convertToCelsius = function(temperature) {
  let res = (temperature - 32) / 1.8;
  res = Math.round(res * 10) / 10;
  return res;
};

const convertToFahrenheit = function(temperature) {

  let result = temperature * 1.8 + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
