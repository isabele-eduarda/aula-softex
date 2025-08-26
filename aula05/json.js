document.addEventListener ("DOMContentLoaded", () => {
    //MAtriz: notas dos  alunos em 3 provas
    let notaAlunos = [
        [7, 8, 6],
        [9, 5, 8],
        [6, 7, 7],
        [9, 8, 9],
    ];
    const tabela = document.querySelector("#tabelaNotas tbody");

    for (let i=0; i < notaAlunos.length; i++) {
        let linha = document.createElement("tr");

        // nome do aluno
        let celAluno= document.createElement("td");
        celAluno.textContent = `Aluno ${i+1}`;
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
            celSituacao.textContent= "Passasse visse";
            celSituacao.className= "aprovado";
        }
        else {
            celSituacao.textContent= "Eita repetiu";
            celSituacao.className="reprovado";
        }
        linha.appendChild(celSituacao);

        tabela.appendChild(linha);
    }
});