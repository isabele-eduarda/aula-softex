class ContaBancaria {
    #saldo=0;

    depositar(valor){
        this.#saldo += valor;
    }
    sacar (valor){
        if (valor<=this.#saldo)
    }
    verSaldo() {
        return `${this.#saldo}`;
    }
}
const conta= new ContaBancaria(100);
