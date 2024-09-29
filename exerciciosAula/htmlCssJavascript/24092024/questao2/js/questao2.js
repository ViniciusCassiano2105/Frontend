let curtidas = 0;

document.getElementById("botaoCurtir").onclick = function() {
    curtidas++;
    document.getElementById("curtidas").innerText = curtidas;
}

document.getElementById("botaoDescurtir").onclick = function() {
    if (curtidas > 0) {
        curtidas--;
    }
    document.getElementById("curtidas").innerText = curtidas;
}
