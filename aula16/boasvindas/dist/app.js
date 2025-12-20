"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}.`;
    }
}
const input = document.getElementById("nomeInput");
const botao = document.getElementById("btnApresentar");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", () => {
    const nomeDigitado = input.value.trim();
    if (nomeDigitado === "") {
        mensagem.textContent = "Digite um nome válido!";
        return;
    }
    const pessoa = new Pessoa(nomeDigitado);
    mensagem.textContent = pessoa.apresentar();
});
