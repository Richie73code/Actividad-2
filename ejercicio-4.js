//realizar un programa que muestre una letra de acuerdo ala calificación de un alumno, si el alumno obtuvo de 90 a 100 muestre la letra a
//si el alumno obtuvo de 80 a 89 muestre la letra b
//si el alumno obtuvo de 70 a 79 muestre la letra c
//si el alumno obtuvo de 60 a 69 muestre la letra d
///switch y case

let calificacion = 54; // Puedes cambiar la calificación aquí
let letra;

if (calificacion >= 90 && calificacion <= 100) {
    letra = 'A';
} else if (calificacion >= 80 && calificacion < 90) {
    letra = 'B';
} else if (calificacion >= 70 && calificacion < 80) {
    letra = 'C';
} else if (calificacion >= 60 && calificacion < 70) {
    letra = 'D';
} else if (calificacion >= 50 && calificacion < 60) {
    letra = 'F';
} else {
    letra = 'No válida';
}

console.log(`La letra correspondiente a la calificación ${calificacion} es: ${letra}`);
