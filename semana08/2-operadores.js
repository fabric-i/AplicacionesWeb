let monitor= 400;
let cpu= 300;
let memoria= 200;

//suma
let precioTotal = monitor + cpu + memoria;
console.log("El precio total es:", precioTotal + "€");

let adicional = 50+20;
console.log("El precio adicional es:", adicional + "€");

//resta
let descuento = 25;
let precioDescuento = precioTotal - descuento;
console.log("El precio con descuento es:", precioDescuento + "€");

//division en cuotas
let cuotas= precioDescuento / 2;
console.log("El precio en 2 cuotas es:", cuotas + "€");   

//multiplicacion
let totalPorDos= precioDescuento * 2;
console.log("El precio con Descuento por 2 es:", totalPorDos + "€");

//porcentaje
let ganacia=1.15;
let precioFinal=(totalPorDos+adicional)*ganacia;
console.log("El precio final es:", precioFinal + "€");

//modulo
let modulo=1000 %300;
console.log("El modulo de 1000 y 300 es:", modulo + "€");

//incremento
let a=10;
a++;
console.log("El valor de a incrementado es:", a);

let b=20;
b+=5;
console.log("El valor de b incrementado es:", b);

//decremento
let c=30;
c--;
console.log("El valor de c decrementado es:", c);

let d=40;
d-=7;
console.log("El valor de d decrementado es:", d);

//concatenacion
let nombre = "Jorge";
let apellido = "Antonio";
let nombreCompleto = nombre + " " + apellido;
console.log("El nombre completo es:", nombreCompleto);

let nombre1= "Ana";
let apellido1 = "Gomez";
let saludo = "Hola, " + nombre1 + " " + apellido1 + "!";
console.log(saludo);

let num=20;
let num1="10";
let totalNum = num + num1;
console.log(totalNum);

let despedida = Nos vemos
${nombre} ${apellido}
hasta luego ${10-20};
console.log("Despedida: ", despedida);