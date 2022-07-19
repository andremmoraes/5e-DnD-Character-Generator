class Personagem {
  constructor(raca, classe, atributos, antecedente, nivel) {
    this.raca = raca;
    this.nome = raca.retornarNomeRacaPersonagem('f');
    this.classe = classe;
    this.atributos = atributos;
    this.antecedente = antecedente.nome;
    this.personalidade = antecedente.personalidades[D8.rolar()-1];
    this.ideal = antecedente.ideais[D6.rolar()-1];
    this.vinculo = antecedente.vinculos[D6.rolar()-1];
    this.fraqueza = antecedente.fraquezas[D6.rolar()-1];
    this.nivel = nivel;
  }
}

/*
Bárbaro 2d4 x10 po
Bardo 5d4 x10 po
Bruxo 4d4 x10 po
Clérigo 5d4 x10 po
Druida 2d4 x10 po
Feiticeiro 3d4 x10 po
Guerreiro 5d4 x10 po
Mago 4d4 x10 po
Monge 5d4 po
Ladino 4d4 x10 po
Paladino 5d4 x10 po
Patrulheiro 5d4 x10 po
 */
class Classe {
  constructor(nome, descricao, dv, atributoPrimario, resistencia=[], proficiencias=[]) {
  }
}



