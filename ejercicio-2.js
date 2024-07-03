//realizar un programa que realice la función de una calculadora básica, que sume  que reste que multiplique y que divida 
//if else
let operador = '/'; // Puedes cambiar el operador aquí
let num1 = 1000;
let num2 = 5.6;
let resultado;

if (operador === '+') {
    resultado = num1 + num2;
} else if (operador === '-') {
    resultado = num1 - num2;
} else if (operador === '*') {
    resultado = num1 * num2;
} else if (operador === '/') {
    resultado = num1 / num2;
} else {
    console.log('Operador no válido.');
}

console.log(`Resultado: ${resultado}`);

