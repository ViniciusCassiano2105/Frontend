document.getElementById("verificar").onclick = function() {
    const habilidades = document.getElementById("habilidades").value.split(',').map(h => h.trim().toLowerCase());
    const resultado = document.getElementById("resultado");

    if (habilidades.includes("javascript")) {
        resultado.innerText = "Você possui a habilidade 'JavaScript'.";
    } else {
        resultado.innerText = "Você não possui a habilidade 'JavaScript'.";
    }
}
