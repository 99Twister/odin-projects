const convertToCelsius = function(number) {

  return Math.round(((number - 32) * 5/9) * 10) / 10;

};

const convertToFahrenheit = function(number) {

  return Math.round((number * 9/5 + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
