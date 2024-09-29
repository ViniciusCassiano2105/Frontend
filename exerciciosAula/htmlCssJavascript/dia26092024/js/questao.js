document.getElementById("adicionar").onclick = function() {
    const item = document.getElementById("item").value;
    const listaCompras = document.getElementById("listaCompras");

    if (item.trim() !== "") {  // Verifica se o campo não está vazio
        const li = document.createElement("li"); // Cria um novo elemento <li>
        li.innerText = item; // Adiciona o nome do item ao <li>
        listaCompras.appendChild(li); // Adiciona o <li> à lista de compras
        document.getElementById("item").value = ""; // Limpa o campo de entrada
    } else {
        alert("Por favor, insira o nome de um item.");
    }
}
