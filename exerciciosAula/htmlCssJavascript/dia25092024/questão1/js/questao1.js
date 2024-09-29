document.getElementById("verificar").onclick = function() {
    const nota = parseFloat(document.getElementById("nota").value);
    const resultado = document.getElementById("resultado");

    if (nota >= 7) {
        resultado.innerText = "Aprovado!";
    } else {
        resultado.innerText = "Reprovado!";
    }
}
