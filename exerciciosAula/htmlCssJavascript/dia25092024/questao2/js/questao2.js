document.getElementById("verificar").onclick = function() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (numero % 2 === 0) {
        resultado.innerText = "O número é par.";
    } else {
        resultado.innerText = "O número é ímpar.";
    }
}
