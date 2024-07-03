//switch y case
let operador = '/'; // Puedes cambiar el operador aquí
let num1 = 73;
let num2 = 5;
let resultado;

switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
        break;
    default:
        console.log('Operador no válido.');
}

console.log(`Resultado: ${resultado}`);



