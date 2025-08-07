let montoTotal = prompt("Ingrese el monto total a pagar:");
montoTotal = Number(montoTotal);

if (isNaN(montoTotal) || montoTotal < 0) {
    alert("❌ Por favor, ingrese un monto válido.");
} else {
    let montoPorAmigo = montoTotal / 3;
    alert(`Cada amigo debe pagar: S/ ${montoPorAmigo.toFixed(2)}`);
    console.log(`Monto total: S/ ${montoTotal.toFixed(2)}\nCada uno paga: S/ ${montoPorAmigo.toFixed(2)}`);
}
