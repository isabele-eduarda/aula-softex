class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      alert("Não é possível dividir por zero!");
      return 0;
    }
    return a / b;
  }
}

const calc = new Calculadora();

const n1 = document.getElementById("n1") as HTMLInputElement;
const n2 = document.getElementById("n2") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

document.getElementById("btnSomar")!.addEventListener("click", () => {
  resultado.textContent = `Resultado: ${calc.somar(Number(n1.value), Number(n2.value))}`;
});

document.getElementById("btnSub")!.addEventListener("click", () => {
  resultado.textContent = `Resultado: ${calc.subtrair(Number(n1.value), Number(n2.value))}`;
});

document.getElementById("btnMul")!.addEventListener("click", () => {
  resultado.textContent = `Resultado: ${calc.multiplicar(Number(n1.value), Number(n2.value))}`;
});

document.getElementById("btnDiv")!.addEventListener("click", () => {
  resultado.textContent = `Resultado: ${calc.dividir(Number(n1.value), Number(n2.value))}`;
});
