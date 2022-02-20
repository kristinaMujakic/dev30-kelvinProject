// the forecast today with temperature described in Kelvin
const kelvin = 293;
// Klevin converted to Celsius
const celsius = kelvin - 273;
//equation to calculate fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//rounding temperature number
fahrenheit = Math.floor(fahrenheit);

console.log(`This temperature is ${fahrenheit} de gress Fahrenheit.`);

//The 0 Kelvin is -460 in Fahrenheit.

const newton = Math.floor(celsius * (33 / 100));
console.log(`The ${kelvin} Kelvin is ${newton} in Newton`);
