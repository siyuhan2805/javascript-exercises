const convertToCelsius = function(tempF) {
  //formula for converting Fahrenheit (F) to Celsius (C): (F - 32) x 5/9

  //rounding to 1 dp
  return Math.round(((tempF - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  //formula for converting Celsius (C) to Fahrenheit (F): (C x 9/5 + 32)

  //rounding to 1 dp
  return Math.round((tempC * 9/5 + 32) * 10) / 10;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
