
// EJERCICIO 1 //
//Productos mayores a 17 soles
console.log("=== EJERCICIO 01 ===");
let productos = [
    { nombre: "Chocolates", precio: 30 },
    { nombre: "Arroz de 5kg", precio: 18 },
    { nombre: "Pasta dental", precio: 12 },
    { nombre: "Frutos secos", precio: 16 },
    { nombre: "Crema de Habas - caja", precio: 25 },
    { nombre: "Azucar 5kg", precio: 21 },
    { nombre: "Caja de Galletas", precio: 17 },
];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 17) {
        console.log(`Producto: ${productos[i].nombre} - Precio: S/ ${productos[i].precio}`);
    }
}

console.log("                                                      ");
// EJERCICIO 2 //
//Calcular el promedio de notas de los alumnos
console.log("=== EJERCICIO 02 ===");
let alumnos = [
    { nombre: "Joel", notas: [18, 16, 17] },
    { nombre: "Aleja", notas: [12, 14, 10] },
    { nombre: "Juan", notas: [13, 12, 9] },
    { nombre: "Maicol", notas: [11, 12, 10] },
    { nombre: "Dina", notas: [8, 5, 4] },
    { nombre: "Poldy", notas: [16, 15, 20] },
    { nombre: "Luan", notas: [16, 18, 15] },
];

for (let i = 0; i < alumnos.length; i++) {
    let suma = 0;
    for (let j = 0; j < alumnos[i].notas.length; j++) {
        suma += alumnos[i].notas[j];
    }
    let promedio = suma / alumnos[i].notas.length;
    console.log(`${alumnos[i].nombre}: ${promedio.toFixed(2)}`);
}
