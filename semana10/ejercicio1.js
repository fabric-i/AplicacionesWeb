const autos = [
    {marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang', year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro', year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang', year: 2016, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];

// EJERCICIO 1: Autos con año mayor a 2012
console.log("=== Autos con año mayor a 2012 ===");
const autosMayores2012 = autos.filter(auto => auto.year > 2012);
console.table(autosMayores2012);
console.log(`Total: ${autosMayores2012.length} autos\n`);

// EJERCICIO 2: Autos entre 2015 y 2018 
console.log("=== Autos entre los años 2015 y 2018 ===");
const autosEntre2015y2018 = autos.filter(auto => auto.year >= 2015 && auto.year <= 2018);
console.table(autosEntre2015y2018);
console.log(`Total: ${autosEntre2015y2018.length} autos`);

// EJERCICIO 3: Autos del modelo "Clase C"
console.log('=== Autos del modelo "Clase C" ===');
const autosClaseC = autos.filter(auto => auto.modelo === 'Clase C');
console.table(autosClaseC);
console.log(`Total: ${autosClaseC.length} autos\n`);

// EJERCICIO 4: Autos de la marca "Audi" y año mayor a 2012
console.log('=== Autos de la marca "Audi" y año mayor a 2012 ===');
const autosAudiDesde2013 = autos.filter(auto => auto.marca === 'Audi' && auto.year > 2012);
console.table(autosAudiDesde2013);
console.log(`Total: ${autosAudiDesde2013.length} autos\n`);

// EJERCICIO 5: Promedio total de los precios
console.log("=== Promedio total de los precios ===");
const totalPrecios = autos.reduce((suma, auto) => suma + auto.precio, 0);
const promedio = totalPrecios / autos.length;
console.log(`Promedio de precios: $${promedio.toFixed(2)}\n`);

// EJERCICIO 6: Promedio de precios de autos con transmisión manual
console.log("=== Promedio de precios de autos con transmisión manual ===");
const autosManual = autos.filter(auto => auto.transmision === 'manual');

if (autosManual.length > 0) {
    const totalManual = autosManual.reduce((suma, auto) => suma + auto.precio, 0);
    const promedioManual = totalManual / autosManual.length;
    console.table(autosManual);
    console.log(`Promedio de precios (transmisión manual): $${promedioManual.toFixed(2)}\n`);
} else {
    console.log("No hay autos con transmisión manual.\n");
}

// EJERCICIO 7: Autos con precio mayor a $45,000
console.log("=== Autos con precio mayor a $45,000 ===");
const autosCaros = autos.filter(auto => auto.precio > 45000);
console.table(autosCaros);
console.log(`Total de autos con precio > 45000: ${autosCaros.length}\n`);
