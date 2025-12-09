"use strict";
class Calculadora {
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            alert("Não é possível dividir por zero!");
            return 0;
        }
        return a / b;
    }
}
const calc = new Calculadora();
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const resultado = document.getElementById("resultado");
document.getElementById("btnSomar").addEventListener("click", () => {
    resultado.textContent = `Resultado: ${calc.somar(Number(n1.value), Number(n2.value))}`;
});
document.getElementById("btnSub").addEventListener("click", () => {
    resultado.textContent = `Resultado: ${calc.subtrair(Number(n1.value), Number(n2.value))}`;
});
document.getElementById("btnMul").addEventListener("click", () => {
    resultado.textContent = `Resultado: ${calc.multiplicar(Number(n1.value), Number(n2.value))}`;
});
document.getElementById("btnDiv").addEventListener("click", () => {
    resultado.textContent = `Resultado: ${calc.dividir(Number(n1.value), Number(n2.value))}`;
});
