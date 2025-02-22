
## 🎁 Sorteio de Amigo Secreto

Este é um projeto simples de sorteio de **Amigo Secreto**, onde os usuários podem adicionar nomes e sortear aleatoriamente um participante.

### 🚀 Funcionalidades

- ✅ Adicionar nomes à lista.
- ✅ Impedir nomes duplicados.
- ✅ Impedir a adição de campos vazios.
- ✅ Sortear um nome aleatório da lista.
- ✅ Exibir o resultado do sorteio.

---

### 📌 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando:

- **HTML** – Para a estrutura do site.  
- **CSS** – Para o estilo da página (pode ser adicionado futuramente).  
- **JavaScript** – Para manipulação da lista e realização do sorteio.  

---

### 📂 Estrutura do Projeto

```
/sorteio-amigo-secreto
│── index.html
│── styles.css
│── script.js
│── README.md
│── assets/
│    ├── amigo-secreto.png
│    ├── play_circle_outline.png
```

---

### 🔧 Como Usar

1️⃣ **Abra o arquivo `index.html` em um navegador.**  
2️⃣ **Digite um nome no campo e clique em "Adicionar".**  
3️⃣ **Repita o processo para todos os participantes.**  
4️⃣ **Clique no botão "Sortear amigo" para escolher aleatoriamente um nome.**  
5️⃣ **O nome sorteado será exibido na tela.** 🎉  

---

### 🖥️ Código Principal

#### **HTML (`index.html`)**
```html
<main class="main-content"> 
    <header class="header-banner">
        <h1 class="main-title">Amigo Secreto</h1>
        <img src="assets/amigo-secreto.png" alt="Imagem representativa de amigo secreto">
    </header>
    
    <section class="input-section">
        <h2 class="section-title">Digite o nome dos seus amigos</h2>
        <div class="input-wrapper">
            <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
            <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
        </div>
       
        <ul id="listaAmigos" class="name-list"></ul>
        <ul id="resultado" class="result-list"></ul>

        <div class="button-container">
            <button class="button-draw" onclick="sortearAmigo()">
                <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
                Sortear amigo
            </button>
        </div>
    </section>
</main>
```

#### **JavaScript (`script.js`)**
```javascript
let listaAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();
    let listaElement = document.getElementById("listaAmigos");

    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar!");
        inputAmigo.focus();
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    
    let li = document.createElement("li");
    li.textContent = nome;
    listaElement.appendChild(li);

    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    let resultadoElement = document.getElementById("resultado");

    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    resultadoElement.innerHTML = `<li>🎉 Amigo sorteado: <strong>${sorteado}</strong></li>`;
}
```
### Captura de tela


https://github.com/user-attachments/assets/87735eb7-8260-4f13-82a5-c599309632e8


---

### 📜 Licença

Este projeto é de código aberto e pode ser usado livremente.
