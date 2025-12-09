class Carro {
    constructor (marca, modelo, ano) {
        this.marca= marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes(){
        return `Carro: ${this.marca}, ${this.modelo}, ${this.ano}`
    }
}

const carro1 = new Carro("Hyundai","Creta",2016);
const carro2 = new Carro ("Renaut", "Sandero", 2007);

console.log (carro1.detalhes());
console.log (carro2.detalhes());
