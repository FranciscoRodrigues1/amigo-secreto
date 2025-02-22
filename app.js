let listaAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();
    let listaElement = document.getElementById("listaAmigos");

    // Validação: campo vazio
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar!");
        inputAmigo.focus();
        return;
    }

    // Validação: nome duplicado
    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    // Adicionar à lista
    listaAmigos.push(nome);
    
    // Criar elemento na lista
    let li = document.createElement("li");
    li.textContent = nome;
    listaElement.appendChild(li);

    // Limpar campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    let resultadoElement = document.getElementById("resultado");

    // Validação: lista vazia
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    // Sortear um nome aleatório
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Exibir resultado
    resultadoElement.innerHTML = `<li>🎉 Amigo sorteado: <strong>${sorteado}</strong></li>`;
}


