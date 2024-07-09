//has la suma de todos los numeros impares del 0 al 1000 
let sumaImpares = 0;

for (let i = 1; i <= 1000; i += 2) {
    sumaImpares += i;
}

console.log(`La suma de los números impares del 0 al 1000 es: ${sumaImpares}`);
