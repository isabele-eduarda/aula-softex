//calculadora       pega  2 numeros   
// 4 operacoes (sum,sub,mult,div) e 1 botao para cada
//classe calculadora   1 metodo para cada operacao

class Calculadora {

    somar (a:number,b:number):number|string {
        return `Resultado da soma de ${a} e ${b}: ${a+b}`;
    }

    subtrair(a:number,b:number):number|string {
        return `Resultado da subtração de ${a} e ${b}: ${a-b}`;
    }

    multipicar (a:number,b:number):number|string {
        return `Resultado da multiplicação de ${a} e ${b}: ${a*b}`;
    }

    dividir (a:number,b:number):number|string {
        return `Resultado da divisão de ${a} e ${b}: ${b==0 ? "Divisão por zero": a/b}`;
    }

}

const op = new Calculadora();



    const btnSomar =  document.getElementById ('sum')  as HTMLButtonElement;
    const btnSub =    document.getElementById ('sub')  as HTMLButtonElement;
    const btnMult =   document.getElementById ('mul')  as HTMLButtonElement;
    const btnDiv =    document.getElementById ('div')  as HTMLButtonElement;
   

    btnSomar.addEventListener('click',() => {

        const num1 = (document.getElementById ('num1') as HTMLInputElement).valueAsNumber;
        const num2 = (document.getElementById ('num2') as HTMLInputElement).valueAsNumber;
        const out =   document.getElementById ('out' ) as HTMLParagraphElement;
        
        out.textContent = "oi";
        console.log(num1,num2,out);
    });



//ignore a linha abaixo
//``=> {}