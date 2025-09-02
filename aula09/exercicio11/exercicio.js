document.addEventListener('DOMContentLoaded', () =>{
    const btn = document.getElementById('btnContar');
    
    btn.addEventListener('click', () => {
        
    })
    let i=10;
    
    while (i==1){
        let p = document.createElement('p');
        p.textContent= `${i}`;
        out.appendChild(p);
        i--;
    }
})