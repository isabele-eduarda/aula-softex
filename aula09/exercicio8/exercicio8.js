function somar(a,b){
    return a+b;
}
function subtrair(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(a,b){
    return b==0 ? 'divisao por zero': a/b;
}


document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const btn = document.getElementById("btnCalcular");

    const soma = document.getElementById("soma");
    const sub = document.getElementById("subtracao");
    const mult = document.getElementById("multiplicacao");
    const div = document.getElementById("divisao");

    btn.addEventListener('click', () => {
        const a = Number (num1.value.trim());
        const b = Number (num2.value.trim());

        soma.textContent = somar(a,b);
        sub.textContent = subtrair(a,b);
        mult.textContent = multiplicar(a,b);
        div.textContent = dividir(a,b);
    });
});

