let numero = prompt("Ingresa un número:");
numero = Number(numero);

if (numero > 0) {
    console.log("El número es positivo.");
    alert("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
    alert("El número es negativo.");
} else if (numero === 0) {
    console.log("El número es cero.");
    alert("El número es cero.");
} else {
    console.log("Eso no es un número válido.");
    alert("Eso no es un número válido.");
}
