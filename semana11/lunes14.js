let inputProducto = document.getElementById('IdProducto'); // Corregido el ID
let btnAgregar = document.getElementById('btnAgregar');
let ulProductos = document.querySelector(".productos");

let listProductos = [];

function dibujarProductos(){
    let htmlProductos = "";
    listProductos.forEach(function(item){
        htmlProductos += `<li>${item}</li>`;
    });
    ulProductos.innerHTML = htmlProductos;
}

function obtenerProductos(){
    let textoProducto = inputProducto.value; 
    return textoProducto;
}

btnAgregar.addEventListener("click", function() {
    let textoObtenido = obtenerProductos();
    console.log('Texto obtenido:', textoObtenido);
    listProductos.push(textoObtenido);
    console.table(listProductos);
    guardarProductoLS();
    dibujarProductos();
});

function guardarProductoLS() {
    let listaProductosJSON = JSON.stringify(listProductos);
    localStorage.setItem('productos', listaProductosJSON);
}

// Cargar productos desde localStorage al iniciar
let listaProductosJSON = localStorage.getItem('productos');
if (listaProductosJSON) {
    listProductos = JSON.parse(listaProductosJSON);
    dibujarProductos();
}
