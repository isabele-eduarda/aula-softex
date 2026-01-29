class Tarefa {
    descricao: string;

    constructor(descricao: string) {
        this.descricao = descricao;
    }

    criarElemento(): HTMLLIElement {
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

const input = document.getElementById("task") as HTMLInputElement;
const btnAdd = document.getElementById("btn-add") as HTMLButtonElement;
const list = document.getElementById("list") as HTMLUListElement;

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