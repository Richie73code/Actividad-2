//realizar un programa que determine si un triangulo es equilatero, isoseles o escaleno según las longitudes de sus lados 
//se debe de usar la estructura de control if- else en js que haga lo que se solicita

let a = 6;
let b = 9;
let c = 6;

if (a === b && b === c) {
    console.log('El triángulo es equilátero.');
} else if (a === b || b === c || a === c) {
    console.log('El triángulo es isósceles.');
} else {
    console.log('El triángulo es escaleno.');
}

