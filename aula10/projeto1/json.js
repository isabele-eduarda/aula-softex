document.addEventListener ("DOMContentLoaded", () => {
    //MAtriz: notas dos  alunos em 3 provas
    

    const btn = document.getElementById('btnTab');
    const input1 = document.getElementById('nome');
    const input2 = document.getElementById('nota1');
    const input3 = document.getElementById('nota2');
    const input4 = document.getElementById('nota3');
    
    btn.addEventListener('click', () => {
    
    const aluno = input1.value.trim();
    const nota1 = Number (input2.value.trim());
    const nota2 = Number (input3.value.trim());    
    const nota3 = Number (input4.value.trim());


   

    let dados = ["Nome", "notas", "media", "situacao"];

    const tabela = document.querySelector("#tabelaNotas");
    const linhas = document.createElement('tr');

    dados.forEach (texto => {
        let th = document.createElement('th');
        th.textContent = texto;
        linhas.appendChild(th);
    });
    tabela.appendChild(linhas);


    let notaAlunos = [`${nota1}`, `${nota2}`, `${nota3}`];

    function soma(){
        return
    }
    
    for (let i=0; i < notaAlunos.length; i++) {
        let linha = document.createElement("tr");

        // nome do aluno
        let celAluno= document.createElement("td");
        celAluno.textContent = `${aluno}`;
        linha.appendChild(celAluno);

        //notas e soma
        let soma=0; 
        for (let j=0; j <notaAlunos[i].length; j++){
            let celNota= document.createElement("td");
            celNota.textContent = notaAlunos[i][j];
            linha.appendChild(celNota);
            soma += notaAlunos[i][j];
        }
        //media
        let media = soma / notaAlunos[i].length;
        let celMedia = document.createElement("td");
        celMedia.textContent = media.toFixed(2);
        linha.appendChild(celMedia);
        
        //aprovado ou reprovado
        let celSituacao = document.createElement("td");
        if (media>=7){
            celSituacao.textContent= "aprovado";
            celSituacao.className= "aprovado";
        }
        else {
            celSituacao.textContent= "reprovado";
            celSituacao.className="reprovado";
        }
        linha.appendChild(celSituacao);

        tabela.appendChild(linha);
        
    }

    });
});