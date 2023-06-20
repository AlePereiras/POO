//Criação de: 4 objetos da classe Passageiro e 1 objeto da classe
var passageiro1 = new Passageiro(2);
var passageiro2 = new Passageiro(2);
var passageiro3 = new Passageiro(2);
var passageiro4 = new Passageiro(3);
var elevador1 = new Elevador();
//Embarque de passageiros no elevador ainda no térreo (andar 0).
elevador1.adicionarPassageiro(passageiro1);
elevador1.adicionarPassageiro(passageiro2);
elevador1.adicionarPassageiro(passageiro3);
elevador1.adicionarPassageiro(passageiro4);
elevador1.movimentar(1); //Movimentando o elevador para o andar 1.
elevador1.movimentar(2); //Movimentando o elevador para o andar 2.
elevador1.movimentar(3); //Movimentando o elevador para o andar 3.