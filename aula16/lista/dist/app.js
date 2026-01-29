"use strict";
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
    }
    criarElemento() {
        const li = document.createElement("li");
        li.textContent = this.descricao;
        const btnDone = document.createElement("button");
        btnDone.textContent = "Concluir";
        btnDone.addEventListener("click", () => {
            li.classList.toggle("done");
        });
        li.appendChild(btnDone);
        return li;
    }
}
const input = document.getElementById("task");
const btnAdd = document.getElementById("btn-add");
const list = document.getElementById("list");
btnAdd.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto === "") {
        alert("Digite algo!");
        return;
    }
    const tarefa = new Tarefa(texto);
    const li = tarefa.criarElemento();
    list.appendChild(li);
    input.value = "";
    input.focus();
});
//{}
