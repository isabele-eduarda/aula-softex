const somar = (a,b) => a+b;
const subtrair = (a,b) => a-b;
const multiplicar = (a,b) => a*b;
function dividir (a,b){
    return b===0 ? 'divisao por zero': a/b;
}

document.addEventListener ('DOMContentLoaded', () => {
    const bnt= document.getElementById('btnCalcular');
    const A = document.getElementById("num1");
    const B = document.getElementById('num2');

    const outsoma = document.getElementById("soma");
    const outsub = document.getElementById('subtracao');
    const outmult = document.getElementById('multiplicacao');
    const outdiv = document.getElementById('divisao');

    bnt.addEventListener ('click', () => {
        const a = Number (A.value);
        const b = Number (B.value);
        if (isNaN(a)||isNaN(b)){
            outsoma.textContent = outsub.textContent = outmult.textContent = '';
            outdiv.textContent = "Informe numeros validos.";
            outdiv.classList.add('error');
            return
        }
        outsoma.textContent = somar(a,b);
        outsub.textContent = subtrair (a,b);
        outmult.textContent = multiplicar(a,b);
        outdiv.textContent = dividir(a,b);

    });
});