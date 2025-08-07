let monto = prompt("Ingrese el monto a pagar:");
monto = Number(monto);

if (isNaN(monto) || monto < 0) {
    alert("Por favor, ingresa un monto válido.");
} else {
    let igv = monto * 0.18;
    let total = monto + igv;

    alert(`😎😎😉😉🤞🤞 Monto original: S/ ${monto.toFixed(2)}\n
        🧾👀😎😎😎😉😉😉 IGV (18%): S/ ${igv.toFixed(2)}\n
        ✅ Total a pagar: S/ ${total.toFixed(2)}`);

    console.log(`Monto: S/ ${monto.toFixed(2)}, IGV: S/ ${igv.toFixed(2)}, Total: S/ ${total.toFixed(2)}`);
}
