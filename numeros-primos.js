//realizar un programa que muestre todos los números primos en el rango que el usuario digite en 
let rangoInic = 1
let rangoFn = 100

console.log(`Números primos entre ${rangoInic} y ${rangoFn}:`);

for (let num = rangoInic; num <= rangoFn; num++) {
    let esPrimo = true;

    if (num <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    switch (esPrimo) {
        case true:
            console.log(num);
            break;
        default:
            // No hacemos nada si no es primo
            break;
    } 
}
