document.getElementById("verificar").onclick = function() {
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = document.getElementById("resultado");

    if (idade >= 18) {
        resultado.innerText = "Você pode acessar o site.";
    } else {
        resultado.innerText = "Você não pode acessar o site.";
    }
}
