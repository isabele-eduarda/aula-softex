document.addEventListener('DOMContentLoaded', () => {
    const btn= document.getElementById('btn-cnh');
    const input1 = document.getElementById('idade');
    const input2 = document.getElementById('CNH');
    const out = document.getElementById('resultado');

    btn.addEventListener('click', () => {
        const idade = Number(input1.value);
        const cnh = input2.checked;
        if (idade >= 18 && cnh ){
            out.textContent = 'Você pode dirigir';
        }
        else if (idade >= 18 && !cnh){
            out.textContent = 'Você tem idade para dirigir, mas não possui cnh';
        }
        else if (idade <18 && cnh)
            out.textContent = 'Você não tem idade para possuir cnh';
        else {
            out.textContent = 'Você não pode dirigir';
        }
    });
});