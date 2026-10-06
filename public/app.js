const campoTitulo = document.getElementById("titulo");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

async function carregarTarefas(params) {
    const resposta = await fetch("api/tarefas");
    const tarefas = await resposta.json();

    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa) => {
        const item = document.createElement("li");
        item.textContent = tarefa.titulo;
        listaTarefas.appendChild(item);
    });
}

async function botaoAdicionar(params) {
    
}


carregarTarefas();