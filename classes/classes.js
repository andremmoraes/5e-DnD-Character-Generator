class Personagem {
  constructor(raca, classe, atributos, antecedente, nivel, tendencia) {

    this.script = '<br>Inicio do personagem';
    this.script += '<br>Atributos: ' + atributos.ToString;
    this.atributos = atributos;
    this.script += raca.atributos.ToString;

    this.atributos.forca.adicionarValor(raca.atributos.forca);
    this.atributos.destreza.adicionarValor(raca.atributos.destreza);
    this.atributos.constituicao.adicionarValor(raca.atributos.constituicao);
    this.atributos.inteligencia.adicionarValor(raca.atributos.inteligencia);
    this.atributos.sabedoria.adicionarValor(raca.atributos.sabedoria);
    this.atributos.carisma.adicionarValor(raca.atributos.carisma);

    //this.script += 'Raça';
    this.raca = raca;
    //this.script += 'Nome';
    this.nome = raca.retornarNomeRacaPersonagem('f');
    //this.script += 'Classe';
    this.classe = classe;
    //this.script += 'Antecedente';
    this.antecedente = antecedente.nome;
    //this.script += '';
    this.personalidade = antecedente.personalidades[D8.rolar() - 1];
    this.ideal = antecedente.ideais[D6.rolar() - 1];
    this.vinculo = antecedente.vinculos[D6.rolar() - 1];
    this.fraqueza = antecedente.fraquezas[D6.rolar() - 1];
    this.nivel = nivel;
    this.tendencia = tendencia;

    this.deslocamento = raca.deslocamento;

    this.resistenciaFor = 0;
    this.resistenciaDes = 0;
    this.resistenciaCon = 0;
    this.resistenciaInt = 0;
    this.resistenciaSAb = 0;
    this.resistenciaCar = 0;

    this.pericias = pericias;

    this.pontosVida = this.classe.dv.lados + this.atributos.constituicao.modificador;
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
  constructor(nome, descricao, dv, atributoPrimario = [], resistencia = [], proficienciasArmas = [], niveis = []) {
    this.nome = nome;
    this.descricao = descricao;
    this.dv = dv;
    this.atributoPrimario = atributoPrimario;
    this.resistencia = resistencia;
    this.proficienciasArmas = proficienciasArmas;
    this.niveis = niveis;
  }
}

let classes = [
  new Classe(
    'Bárbaro',
    'Um feroz lutador de antecedente primitivo que entra em fúria',
    new D12(),
    [
      new Forca()
    ],
    [
      new Forca(),
      new Constituicao()
    ],
    ['Armaduras leves e Armaduras médias, escudos, armas simples e comuns']
  ),

  new Classe(
    'Bardo',
    'Um inspirador mágico cujo poder ecoa a música da criação',
    new D8(),
    [
      new Carisma()
    ],
    [
      new Destreza(),
      new Carisma()
    ],
    ['Armaduras leves, armas simples, besta de mão, espadas curtas, espadas longas, rapieiras']
  ),

  new Classe(
    'Bruxo',
    'portador de magia oriunda de uma entidade extraplanar',
    new D8(),
    [
      new Carisma()
    ],
    [
      new Sabedoria(),
      new Carisma()
    ],
    ['Armadura leve, armas simples']
  ),

  new Classe('Clérigo',
    'Um campeão sacerdotal que usa magia divina a serviço de causas maiores',
    new D8(),
    [
      new Sabedoria()
    ],
    [
      new Sabedoria(),
      new Carisma()
    ],
    ['Armaduras leves e médias, escudos, armas simples']
  ),

  new Classe('Druida',
    'Um sacerdote da Antiga Fé que usa os poderes da natureza – luz da lua e crescimento de plantas, fogo e eletricidade – e adota formas animais',
    new D8(),
    [
      new Sabedoria()
    ],
    [
      new Inteligencia(),
      new Sabedoria()
    ],
    ['Armaduras leves e médias (não feitas de metais), escudos (não feitos de metais), clava, adaga, dados, azagaias, maças, cajados, cimitarras, foices, fundas e lanças']
  ),

  new Classe('Feiticeiro',
    'Um lançador de magia que a extrai de um dom ou linhagem sanguínea',
    new D6(),
    [
      new Carisma()
    ],
    [
      new Constituicao(),
      new Carisma()
    ],
    ['Adagas, dardos, fundas, cajados, besta leve']
  ),

  new Classe('Guerreiro',
    'Um mestre em combate, versado na utilização de diversas armas e armaduras',
    new D10(),
    [
      new Forca(),
      new Destreza()
    ],
    [
      new Forca(),
      new Constituicao()
    ],
    ['Todas as armaduras, escudos, armas simples e comuns']
  ),

  new Classe('Monge',
    'Um mestre da luta que controla o poder do corpo em busca da perfeição física e espiritual',
    new D8(),
    [
      new Destreza(),
      new Sabedoria()
    ],
    [
      new Forca(),
      new Sabedoria()
    ],
    ['Armas simples, espada curta']
  ),

  new Classe('Ladino',
    'Malandro que usa furtividade e esperteza para superar inimigos e obstáculos',
    new D8(),
    [
      new Destreza()
    ],
    [
      new Destreza(),
      new Inteligencia()
    ],
    ['Armaduras leves, armas simples, besta de mão, espada curta, espada longa, rapineira']
  ),

  new Classe('Paladino',
    'Um combatente santo ligado a um voto sagrado',
    new D10(),
    [
      new Forca(),
      new Carisma()
    ],
    [
      new Sabedoria(),
      new Carisma()
    ],
    ['Todas as armaduras, escudos, armas simples e comuns']
  ),

  new Classe('Patrulheiro',
    'Um combatente que faz uso da magia natural para lidar com as ameaças à civilização',
    new D10(),
    [
      new Destreza(),
      new Sabedoria()
    ],
    [
      new Forca(),
      new Sabedoria()
    ],
    ['Armaduras médias e leves, escudos, armas simples e comuns']
  ),

  new Classe('Mago',
    'Estudante usuário de magia que molda a realidade à sua vontade',
    new D6(),
    [
      new Inteligencia()
    ],
    [
      new Inteligencia(),
      new Sabedoria()
    ],
    ['Adagas, bestas leves, cajados, dardos, fundas']
  )

];