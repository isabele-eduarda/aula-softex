class Produto {
    nome:string;
    preco:number;

    constructor(nome:string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }

    desconto(porcentagem:number):number{
        return this.preco -= (this.preco * (porcentagem/100));
    }
    resultado():string {
        return `O produto ${this.nome} tem o valor de ${this.preco} após o desconto`; 
    }
}

const prod1 = new Produto("ventilador",200);
prod1.desconto(10);
console.log (prod1.resultado());
//{}``=>
