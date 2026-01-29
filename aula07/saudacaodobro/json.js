function saudacao(nome) {
    return `Olá, ${nome}! Bem vindo(a).`;
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("btnSaudar");
    const paragrafo = document.getElementById("pa");
    const input = document.getElementById("nome");

    btn.addEventListener('click', () => {
        const nome = input.value.trim();
        const alvo = nome || 'Visitante';
        paragrafo.textContent = saudacao(alvo);
    });
});

function dobro(x) {
    return x*2;
}

document.addEventListener ('DOMContentLoaded', () => {
    const btnDobro = document.getElementById("btnDobro");
    const out = document.getElementById("out");
    const numero = document.getElementById("num");

    btnDobro.addEventListener ('click', () => {
    const num = numero.value.trim();
     if (isNaN(num)){
        out.textContent = "Digite um valor válido";
        return;
    }
    out.textContent = dobro(num);
    });
});
