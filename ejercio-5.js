//switch y case
let otraCalificacion = 66.7; // Puedes cambiar la calificación aquí
let otraLetra;

switch (true) {
    case otraCalificacion >= 90 && otraCalificacion <= 100:
        otraLetra = 'A';
        break;
    case otraCalificacion >= 80 && otraCalificacion < 90:
        otraLetra = 'B';
        break;
    case otraCalificacion >= 70 && otraCalificacion < 80:
        otraLetra = 'C';
        break;
    case otraCalificacion >= 60 && otraCalificacion < 70:
        otraLetra = 'D';
        break;
        case otraCalificacion >= 50 && otraCalificacion < 60:
        otraLetra = 'F';
        break;
    default:
        otraLetra = 'No válida';
}

console.log(`La letra correspondiente a la calificación ${otraCalificacion} es: ${otraLetra}`);
