class Retangulo {
    constructor(largura, altura){
        this.largura= largura;
        this.altura= altura;
    }
    area(){
        return `Área do retangulo é: ${this.largura * this.altura}`;
    }
    perimetro(){
        return `Perimetro do retangulo é: ${2*(this.largura + this.altura)}`;
    }
}



 const valor = new Retangulo(5,3);

 console.log (valor.area());
 console.log (valor.perimetro());