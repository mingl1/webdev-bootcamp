// Lucas and Petter are trying to compare their BMI (Body Mass Index), which is calculated using the
// formula:
// BMI = mass / (height * height)
// mass in kg, height in meter
// Steps:
// 1. Store two persons' mass and height in variables,
// 2. Calculate their BMI accordingly
// 3. Compare their BMI, store the result in a variable lucasHigherBMI, Log blew message to console:
// “The BMI of Petter is ? ,The BMI of Lucas is ? , Petter’s BMI is higher than Lucas’s BMI that is True/False”
// Test data:
// Lucas: 78kg 1.69m tall
// Petter: 92kg 1.95m tall
let roundIt = (val) => {return Math.round(val*100)/100;}
// A
const lucasMass = 78;
const petterMass = 92;
const lucasH=1.69;
const petterH=1.95;
const petterBMI = petterMass/(petterH*petterH);
const lucasBMI = lucasMass/(lucasH*lucasH);
console.log(`The BMI of Petter is ${roundIt(petterBMI)} , The BMI of Lucas is ${roundIt(lucasBMI)} , Petter's BMI is higher than Lucas's BMI that is ${petterBMI>lucasBMI}`);

// The Temperature Converter - Let's make a converter based on the steps here and display the coverted
// result. -Use template literals Only to display the result
// • Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
// • Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is
// NN°C."

// B
const celsiusTemp = 67;
console.log(`${celsiusTemp}°C is ${roundIt(celsiusTemp*(9/5)+32)}°F`);
const fahrenheitTemp = 101;
console.log(`${fahrenheitTemp}°F is ${roundIt((5/9)*(fahrenheitTemp-32))}°C`)


// Improve the code you wrote for the BMI example from part A:
// Print a nice output to the console, saying who has the higher BMI using template literals
// Outputs Example: "Lucas' BMI (28.3) is higher than Peter’s (23.9)!"
// HINT: Use an if/else statement or conditional operator or switch statement

//C
if (lucasBMI>petterBMI){
    console.log(`Lucas's BMI (${roundIt(lucasBMI)}) is higher than Peter’s (${roundIt(petterBMI)})!`);
}
else if (petterBMI>lucasBMI){
    console.log(`Petter's BMI (${roundIt(petterBMI)}) is higher than Lucas’s (${roundIt(lucasBMI)})!`);

}


// Create 2 functions (Arrow Function Preferred) to convert temperature:
// One function is called CovertCelsiusToFahrenheit. When calling the function, pass a Celsius temperature value
// (argument) to the function, the function can convert it to Fahrenheit temperature and log a message to.
// Eg: "NN°C is NN°F".
// TEST DATA: 100°C 0°C 10°C
// The other function is called CovertFahrenheitToCelsius. It can convert Fahrenheit to Celsius and log "NN°F is
// NN°C." to Console.
// TEST DATA: 32°F 10°F 102°F

//D
// let myFunction = (a, b) => a * b; 
let CovertCelsiusToFahrenheit = (cel) => console.log(`${cel}°C is ${Math.round((cel*(9/5)+32)*100)/100}°F`);
let CovertFahrenheitToCelsius =(fah)=> console.log(`${fah}°F is ${Math.round((fah-32)*(5/9)*100)/100}°C`);
CovertCelsiusToFahrenheit(100);
CovertCelsiusToFahrenheit(0);
CovertCelsiusToFahrenheit(10);
CovertFahrenheitToCelsius(32);
CovertFahrenheitToCelsius(10);
CovertFahrenheitToCelsius(102);
