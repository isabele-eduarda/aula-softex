"use strict";
//calculadora       pega  2 numeros   
// 4 operacoes (sum,sub,mult,div) e 1 botao para cada
//classe calculadora   1 metodo para cada operacao
class Calculadora {
    somar(a, b) {
        return `Resultado da soma de ${a} e ${b}: ${a + b}`;
    }
    subtrair(a, b) {
        return `Resultado da subtração de ${a} e ${b}: ${a - b}`;
    }
    multipicar(a, b) {
        return `Resultado da multiplicação de ${a} e ${b}: ${a * b}`;
    }
    dividir(a, b) {
        return `Resultado da divisão de ${a} e ${b}: ${b == 0 ? "Divisão por zero" : a / b}`;
    }
}
const op = new Calculadora();

const btnSomar = document.getElementById('sum');
const btnSub = document.getElementById('sub');
const btnMult = document.getElementById('mul');
const btnDiv = document.getElementById('div');

const num1 = document.getElementById('num1').valueAsNumber;
    const num2 = document.getElementById('num2').valueAsNumber;
    const out = document.getElementById('out');
    out.textContent = "oi";
    console.log(num1, num2, out);
btnSomar.addEventListener('click', () => {
    
});
//ignore a linha abaixo
//``=> {}
