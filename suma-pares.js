//Realizar un programa que sume todos los números pares del 0 al 1000
let sumaPares = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

console.log(`La suma de todos los numeros pares del 0 al 1000 es: ${sumaPares}`);

 
