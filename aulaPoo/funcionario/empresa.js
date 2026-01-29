class Funcionario {
    constructor (nome,salario){
        this.nome = nome;
        this.salario = salario;
    }
    descricao (){
        return "Funcionário: " + this.nome + ", salário: " + this.salario; 
    }
}

class Gerente extends Funcionario {
    constructor (nome,salario,departamento){
        super (nome,salario);
        this.departamento = departamento;
    }

    descricao(){

        return "Funcionario: " + this.nome + ", salário: " + this.salario
         + ", departamento: " + this.departamento;
    }
}

const func1 = new Funcionario("Maria", 2000);
console.log(func1.descricao());

const geren1 = new Gerente("Luana", 6000, "Administração");
console.log (geren1.descricao());