class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome}.`;
  }
}

const input = document.getElementById("nomeInput") as HTMLInputElement;
const botao = document.getElementById("btnApresentar") as HTMLButtonElement;
const mensagem = document.getElementById("mensagem") as HTMLParagraphElement;

botao.addEventListener("click", () => {
  const nomeDigitado = input.value.trim();

  if (nomeDigitado === "") {
    mensagem.textContent = "Digite um nome válido!";
    return;
  }

  const pessoa = new Pessoa(nomeDigitado);
  mensagem.textContent = pessoa.apresentar();
});
