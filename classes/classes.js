class Personagem {
  constructor(raca, classe, atributos, antecedente, nivel, tendencia) {

    this.script = 'Inicio do personagem<br>';
    this.script += atributos.ToString;
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

    this.script += 'Pontos de Vida:<br>';
    this.pontosVida = this.classe.dv.lados + this.atributos.constituicao.modificador;
    this.script += "&emsp;1º Nivel&emsp;" + this.pontosVida + "(" + this.classe.dv.lados + "+" + this.atributos.constituicao.modificador + ")<br>";
    let mult = this.nivel - 1;
    this.script += "&emsp;Somatoria dos multiplicadores apos o 1º Nivel(ModCon * (nivel-1):&emsp;" + (mult * this.atributos.constituicao.modificador) + "(" + this.atributos.constituicao.modificador + " * (" + this.nivel + "-1)<br>";
    this.pontosVida += (mult * this.atributos.constituicao.modificador);
    this.classe.dv.rolagem(mult);
    this.pontosVida += this.classe.dv.resultadoRolagem;
    this.script += "&emsp;Rolagem de DV para cada nivel apos o primeiro:&emsp;" + this.classe.dv.resultadoRolagem + "(" + this.classe.dv.resultados + ")<br>";

    this.resultados;

    console.log((niveis[4]).proeficiencia);

    this.mensagemsaida = (this.classe.dv.rolagem(mult));

    this.pericias=classe.pericias;

    /*
        for (let index = 0; index < this.nivel-1; index++) {
          this.pontosVida += this.classe.dv.rolar() + this.atributos.constituicao.modificador;
        }
    */
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
  constructor(nome, livro, pg, descricao, dv, atributoPrimario = [], resistencia = [], proficienciasArmaduras = [], proficienciasArmas = [], qtdPericias,
    pericias = [], niveis = []) {
    this.nome = nome;
    this.descricao = descricao;
    this.dv = dv;
    this.atributoPrimario = atributoPrimario;
    this.resistencia = resistencia;
    this.proficienciasArmaduras = proficienciasArmaduras;
    this.proficienciasArmas = proficienciasArmas;
    this.niveis = niveis;
    this.livro = livro;
    this.pagina = pg;
    this.qtdPericias = qtdPericias;
    this.pericias = pericias;
  }
}

let classes = [
  new Classe(
    'Bárbaro',
    'Livro do Jogador',
    46,
    'Um feroz lutador de antecedente primitivo que entra em fúria',
    new D12(),
    [
      new Forca()
    ],
    [
      new Forca(),
      new Constituicao()
    ],
    ['leve', 'média', 'escudo'],
    ['simples', 'comuns'],
    2,
    ['Adestrar Animais', 'Atletismo', 'Intimidação', 'Natureza', 'Percepção', 'Sobrevivência']
  ),

  new Classe(
    'Bardo',
    'Livro do Jogador',
    51,
    'Um inspirador mágico cujo poder ecoa a música da criação',
    new D8(),
    [
      new Carisma()
    ],
    [
      new Destreza(),
      new Carisma()
    ],
    ['leve'],
    ['simples', 'besta de mão', 'espada curta', 'espada longa', 'rapieiras'],
    3,
    ['Atletismo', 'Acrobacia', 'Furtividade', 'Prestidigitação', 'Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião', 'Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência', 'Atuação', 'Enganação', 'Intimidação', 'Persuasão']
  ),

  new Classe(
    'Bruxo',
    'Livro do Jogador',
    57,
    'portador de magia oriunda de uma entidade extraplanar',
    new D8(),
    [
      new Carisma()
    ],
    [
      new Sabedoria(),
      new Carisma()
    ],
    ['leve'],
    ['simples'],
    2,
    ['Arcanismo', 'História', 'Intimidação', 'Investigação', 'Natureza', 'Religião']
  ),

  new Classe('Clérigo',
    'Livro do Jogador',
    66,
    'Um campeão sacerdotal que usa magia divina a serviço de causas maiores',
    new D8(),
    [
      new Sabedoria()
    ],
    [
      new Sabedoria(),
      new Carisma()
    ],
    ['leve', 'média', 'escudo'],
    ['simples'],
    2,
    ['História', 'Intuição', 'Medicina', 'Persuasão', 'Religião']
  ),

  new Classe('Druida',
    'Livro do Jogador',
    76,
    'Um sacerdote da Antiga Fé que usa os poderes da natureza – luz da lua e crescimento de plantas, fogo e eletricidade – e adota formas animais',
    new D8(),
    [
      new Sabedoria()
    ],
    [
      new Inteligencia(),
      new Sabedoria()
    ],
    ['leve', 'média', 'escudo'],
    ['clava', 'adaga', 'dados', 'azagaias', 'maça', 'cajado', 'cimitarra', 'foice', 'fundas', 'lança'],
    2,
    ['Arcanismo', 'Adestrar Animais', 'Intuição', 'Medicina', 'Natureza', 'Percepção', 'Religião', 'Sobrevivência']
  ),

  new Classe('Feiticeiro',
    'Livro do Jogador',
    83,
    'Um lançador de magia que a extrai de um dom ou linhagem sanguínea',
    new D6(),
    [
      new Carisma()
    ],
    [
      new Constituicao(),
      new Carisma()
    ],
    [],
    ['adaga', 'dardo', 'funda', 'cajado', 'besta leve'],
    2,
    ['Arcanismo', 'Enganação', 'Intuição', 'Intimidação', 'Persuasão', 'Religião']
  ),

  new Classe('Guerreiro',
    'Livro do Jogador',
    90,
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
    ['leve', 'média', 'pesada', 'escudo'],
    ['simples', 'comum'],
    2,
    ['Acrobacia', 'Adestrar Animais', 'Atletismo', 'História', 'Intuição', 'Intimidação', 'Percepção', 'Sobrevivência']
  ),

  new Classe('Monge',
    'Livro do Jogador',
    113,
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
    [],
    ['simples', 'espada curta'],
    2,
    ['Acrobacia', 'Atletismo', 'Historia', 'Intuição', 'Religião', 'Furtividade']
  ),

  new Classe('Ladino',
    'Livro do Jogador',
    97,
    'Malandro que usa furtividade e esperteza para superar inimigos e obstáculos',
    new D8(),
    [
      new Destreza()
    ],
    [
      new Destreza(),
      new Inteligencia()
    ],
    ['leve'],
    ['simples', 'besta de mão', 'espada curta', 'espada longa', 'rapineira'],
    4,
    ['Acrobacia', 'Atletismo', 'Atuação', 'Enganação', 'Furtividade', 'Intimidação', 'Intuição', 'Percepção', 'Persuasão', 'Prestidigitação']
  ),

  new Classe('Paladino',
    'Livro do Jogador',
    121,
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
    ['leve', 'média', 'pesada', 'escudo'],
    ['simples', 'comum'],
    2,
    ['Atletismo', 'Intimidação', 'Intuição', 'Medicina', 'Persuasão', 'Religião']
  ),

  new Classe('Patrulheiro',
    'Livro do Jogador',
    129,
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
    ['leve', 'média', 'escudo'],
    ['simples', 'comum'],
    3,
    ['Adestrar Animais', 'Atletismo', 'Sentir Motivação', 'Investigação', 'Natureza', 'Percepção', 'Furtividade', 'Sobrevivência']
  ),

  new Classe('Mago',
    'Livro do Jogador',
    103,
    'Estudante usuário de magia que molda a realidade à sua vontade',
    new D6(),
    [
      new Inteligencia()
    ],
    [
      new Inteligencia(),
      new Sabedoria()
    ],
    [],
    ['Adaga', 'besta leve', 'cajado', 'dardo', 'funda'],
    2,
    ['Arcanismo', 'História', 'Intuição', 'Investigação', 'Medicina', 'Religião']
  )
];