function mostrarSaudacao(){
    let nome= "isabele";
    
    const saudacao = document.getElementById("mensagem");
    const msg1 = document.getElementById("msg1");
    const msg2 = document.getElementById("msg2");
    const msg3 = document.getElementById("msg3");
    const msg4 = document.getElementById("msg4");

    saudacao.textContent = "Olá "+nome+" seja bem vinda!"; 
    msg1.textContent = "Isabele Eduarda B Macedo";
    msg2.textContent = "18 anos";
    msg3.textContent = "Estudante em Analise e Desenvolvimento de Sistemas";
    msg4.textContent = "Gosta de ler manhwas e assistir vídeos";
}
function entrarLink(){
    const link = document.getElementById("link");
    link.textContent = "Clique aqui";
}