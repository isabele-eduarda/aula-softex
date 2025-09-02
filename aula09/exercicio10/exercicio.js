document.addEventListener ('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const number = document.getElementById("num");
    const out = document.getElementById("out");

    btn.addEventListener('click', () => {
        const num = Number (number.value.trim());
        out.innerHTML= '';

        for (let i=0; i <= 10 ; i++){
            let tabuada = `${num} x ${i} = ${num * i}`;
            let p = document.createElement('p');
            p.textContent = `${tabuada}`;
            out.appendChild(p);

        }
   
    });
});