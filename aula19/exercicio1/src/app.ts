//criando a classe Pessoa

class Pessoa {

    //criação do metodo 'saudacao' e definindo o parametro

    saudacao(name:string):string {
        return `Olá meu nome é ${name}`; //retorna a frase + o parametro name
    }
}


document.addEventListener ('DOMContentLoaded',() =>{

    const btn = document.getElementById('btnSaudar') as HTMLButtonElement;
    

    //Adicionando um evento ao clicar no botao 
    btn.addEventListener('click',() => {
        
        //cria duas const e atribui a cada uma os elementos nome(input) e out (paragrafo)
        
        const nome = (document.getElementById('name') as HTMLInputElement).value;
        const out = document.getElementById('out') as HTMLParagraphElement;

        //Imprimindo a saudação

        const pessoa1 = new Pessoa(); //cria um novo objeto 
        out.textContent = pessoa1.saudacao(nome); //atribui o objeto no out e chama o metodo informando o nome como parametro
    });

});



//ignore a linha abaixo
//{}``=>