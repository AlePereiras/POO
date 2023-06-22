class Passageiro {
    constructor(andarPretendido){
        this._andarPretendido = andarPretendido;
    }
}

class Elevador {
    constructor(){
        this._andarAtual = 0
        this._quantidadePassageiros = 9
        this._listaDePassageiros = []
    }

    adicionarPassageiro(passageiro) {
        if(this._listaDePassageiros.length < this._quantidadePassageiros){
        this._listaDePassageiros.push(passageiro)
        console.log(`1 passageiro que deseja ir ao andar ${passageiro._andarPretendido} entrou no elevador. Agora o elevador tem ${this._listaDePassageiros.length} passageiros.`)
        }else{
            console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima: ${this._quantidadePassageiros.length} passageiros.`)
        }
    }

    movimentar(andarDeDestino){
        this._andarAtual = andarDeDestino;

        console.log("============================ MOVIMENTAÇÃO. Agora o elevador está no andar " + this._andarAtual + ".")
                                           
        const passageirosSaindo = this._listaDePassageiros.filter(passageiro => passageiro._andarPretendido === this._andarAtual);
        const passageirosContinuam = this._listaDePassageiros.filter(passageiro => passageiro._andarPretendido !== this._andarAtual);

        console.log(passageirosSaindo.length + "passageiros saíram do elevador.");
        console.log(passageirosContinuam.length + "passageiros CONTINUAM no elevador.");

        this._listaDePassageiros = passageirosContinuam;

        console.log("Passageiros restantes no elevador");
        console.log(this._listaDePassageiros);
    }

}


