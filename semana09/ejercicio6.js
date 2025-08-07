
let base1 = Number(prompt("Ingrese la base del primer triángulo:"));
let altura1 = Number(prompt("Ingrese la altura del primer triángulo:"));

let base2 = Number(prompt("Ingrese la base del segundo triángulo:"));
let altura2 = Number(prompt("Ingrese la altura del segundo triángulo:"));

// Validación
if ([base1, altura1, base2, altura2].some(val => isNaN(val) || val <= 0)) {
    alert("❌ Por favor, ingrese valores válidos y positivos.");
} else {
    let area1 = (base1 * altura1) / 2;
    let area2 = (base2 * altura2) / 2;

    let mensaje = `Área del triángulo 1: ${area1.toFixed(2)}\nÁrea del triángulo 2: ${area2.toFixed(2)}\n`;

    if (area1 > area2) {
        mensaje += "🔺 El primer triángulo tiene mayor área.";
    } else if (area2 > area1) {
        mensaje += "🔻 El segundo triángulo tiene mayor área.";
    } else {
        mensaje += "🔸 Ambos triángulos tienen la misma área.";
    }

    alert(mensaje);
    console.log(mensaje);
}
