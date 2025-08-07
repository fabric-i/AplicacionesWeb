let a = prompt("Ingrese la primera cadena:");
let b = prompt("Ingrese la segunda cadena:");

let resultado = "";

if (a.length < b.length) {
    resultado = a + b + a;
} else {
    resultado = b + a + b;
}

alert(`Resultado combinado: ${resultado}`);
console.log("Resultado combinado:", resultado);