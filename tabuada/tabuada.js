document.addEventListener("DOMContentLoaded", ()=> {
    const btnTable = document.getElementById("btn-tabuada");
    const num = document.getElementById("num");
    const p= document.getElementById("out");
    const title = document.getElementById("titulo");
    btnTable.addEventListener("click", ()=> {
        p.innerHTML= "";
        
        const number = Number (num.value);
        title.textContent = `Tabuada do ${number}`;
        
        for(let i=1;i<=10; i++){
            let x= i*number;
            let paragrafo= document.createElement("p");
            paragrafo.textContent = `${number} x ${i} = ${x}`;
            p.appendChild(paragrafo);
        }
        
    });
});