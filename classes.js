class nomesRacas{
  constructor(nomesMasculinos=[], nomesFemininos=[], nomesTribos=[])
  {
    this.nomesMasculinos=nomesMasculinos;
    this.nomesFemininos=nomesFemininos;
    this.nomesTribos=nomesTribos;
  }
}

class tamanhoRaca{
  constructor(nome='', descricao='', bonus=0)
  {
    this.nome=nome;
    this.descricao=descricao;
    this.bonus=bonus;
  }
}

class deslocamento{
  constructor(deslocamento, tipoDelocamento)
  {
    this.metros;
    this.quadrados;
    this.pes;

    switch (tipoDelocamento) {
      case 'quadrado':
        this.quadrados = deslocamento;
        this.metros =  deslocamento*1,5;
        this.pes =  0;               
        break;
    
//        case 'pes':        
//        this.pes = deslocamento;
//        this.metros =  deslocamento/5;
//        this.quadrados =  deslocamento*1,5*5;               
//        break;
    
        case 'metros':        
        this.metros =  deslocamento;
        this.quadrados = deslocamento/1,5;
        this.pes =  0;               
        break;
    
      default:
        this.metros =  deslocamento;
        this.quadrados = deslocamento;
        this.pes =  deslocamento;               
        break;
    }
  }
}

class vantagemRaca{
  constructor(nome, descricao,tipo, idioma=[])
  {
    this.nome=nome;
    this.descricao=descricao;
    this.tipo=tipo;
    this.idioma=idioma;
  }
}

class raca{
  constructor(nome='', descricao='', nomesRacas, atributos, tamanho, deslocamento)
  {
    this.nome=nome;
    this.descricao=descricao;
    this.nomesRacas=nomesRacas;
    this.atributos=atributos;
    this.tamanho=tamanho;
    this.deslocamento=deslocamento;
  }

  RetornarRacaPersonagem(sexo='masculino') {
    var qtdnomes = 0;
    var i = 0;
    
    if (sexo==='masculino'){
      qtdnomes = this.nomesRacas.nomesMasculinos.length;
      i = Math.floor(Math.random() * qtdnomes);
      this.nome = this.nomesRacas.nomesMasculinos[i];
    }
    else{
      qtdnomes = this.nomesRacas.nomesFemininos.length;
      i = Math.floor(Math.random() * qtdnomes);
      this.nome = this.nomesRacas.nomesFemininos[i];

    }

    qtdnomes = this.nomesRacas.nomesTribos.length;
    i = Math.floor(Math.random() * qtdnomes);

    this.nome += ' '+this.nomesRacas.nomesTribos[i];

    return this.nome;
  }

}


class personagem {
  constructor(raca, classe, atributos, antecedente) {
    this.raca =raca;
    this.nome = raca.RetornarRacaPersonagem('f'); 
    this.classe =classe;
    this.atributos =atributos;
    this.antecedente = antecedente;
  }
}