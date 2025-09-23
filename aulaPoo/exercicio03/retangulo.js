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

// criando os objetos

const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    const lg = Number (document.getElementById('l').value);
    const alt = Number (document.getElementById('h').value);
    const p = document.getElementById('p');
    const p2 = document.getElementById('a');

    const valor1 = new Retangulo(lg,alt);
    p.textContent = valor1.area();
    p2.textContent = valor1.perimetro();

});

// const valor = new Retangulo(5,3);

// console.log (valor.area());
// console.log (valor.perimetro());