let numero = Number(prompt("Ingrese un número:"));
let suma = 0;

if (isNaN(numero) || numero <= 1) {
    alert("❌ Ingrese un número mayor que 1");
} else {
    for (let i = 1; i < numero; i++) {
        suma += i;
    }
    alert(`✅ La suma de los números menores a ${numero} es: ${suma}`);
    console.log("Suma:", suma);
}