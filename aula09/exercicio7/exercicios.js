function dobro(x){
    return x*2;
}

document.addEventListener ('DOMContentLoaded', () => {
    const btnDobro= document.getElementById("btnDobro");
    const out = document.getElementById("out");
    const dobroNum= document.getElementById("num");

    btnDobro.addEventListener ('click', () => {
        const num = dobroNum.value.trim();
        if (isNaN(num)){
            out.textContent = "Digite um numero valido";
            return;
        }
        out.textContent = dobro(num);
    });
});