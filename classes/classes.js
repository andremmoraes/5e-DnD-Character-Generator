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

    this.pericias = [];

    this.adicionaPericias(classe, classe.qtdPericias);
    //console.log(classe.niveis[4].proeficiencia);

    this.mensagemsaida = (this.classe.dv.rolagem(mult));

    //this.pericias = classe.pericias;


    /*
        for (let index = 0; index < this.nivel-1; index++) {
          this.pontosVida += this.classe.dv.rolar() + this.atributos.constituicao.modificador;
        }
    */
  }

  adicionaPericias(objeto, qtdpericias = 0) {
    console.log(qtdpericias);
    let pericias = this.pericias;

    if (qtdpericias === 0) {
      objeto.pericias.forEach(
        function (pericia) {
          pericias.push(pericia);
        }
      )
      this.pericias = pericias;
    }
    else {
      for (let i = 0; i < qtdpericias; i++) {
        let n = Math.floor(Math.random() * objeto.pericias.length);
        let _pericia = objeto.pericias[n];

        if (this.pericias.indexOf(_pericia) < 0) {
          this.pericias.push(_pericia);
        }
      }
    }
    console.log(this.pericias);
  }
  /* 
    adicionaPericias(objeto, qtdpericias = 0)
    {
      if (qtdpericias !== 0)
      {
  
  
        if (this.pericias.indexOf(_pericia) < 0)
        {
          this.pericias.push(_pericia);
        }
  
  
        console.log();
        //if ()
  
        console.log(_pericia.nome);
  //      objeto.periciaClasse
      }
      else{
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          
        }
      }
  /*
      person.pericias.forEach(
        function (periciaClasse) {
            if (periciaClasse.nome === nomepericia) {
                nomepericia = '<b>' + nomepericia + '</b>';
                exit;
            }
        }
    );    
      objeto.pericias.
      this.pericias.push();
     
    } */
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
    pericias = []) {
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

class Barbaro extends Classe {
  constructor() {
    super(
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
      [adestrarAnimais, atletismo, intimidacao, natureza, persuasao, sobrevivencia]
    )
  }
}
class Bardo extends Classe {
  constructor() {
    super(
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
      [atletismo, acrobacia, furtividade, prestidigitacao, arcanismo, historia, investigacao, natureza, religiao, adestrarAnimais, intuicao, medicina, percepcao, sobrevivencia, atuacao, enganacao, intimidacao, persuasao]

    )
  }
}
class Bruxo extends Classe {
  constructor() {
    super(
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
      [arcanismo, historia, intimidacao, investigacao, natureza, religiao]
    )
  }
}
class Clerigo extends Classe {
  constructor() {
    super(
      'Clérigo',
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
      [historia, intimidacao, medicina, persuasao, religiao]
    )
  }
}
class Druida extends Classe {
  constructor() {
    super(
      'Druida',
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
      [arcanismo, adestrarAnimais, intimidacao, medicina, natureza, percepcao, religiao, sobrevivencia]
    )
  }
}
class Feiticeiro extends Classe {
  constructor() {
    super(
      'Feiticeiro',
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
      [arcanismo, enganacao, intuicao, intimidacao, persuasao, religiao]
    )
  }
}
class Guerreiro extends Classe {
  constructor() {
    super('Guerreiro',
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
      [acrobacia, adestrarAnimais, atletismo, historia, intuicao, intimidacao, percepcao, sobrevivencia]
    )
  }
}
class Ladino extends Classe {
  constructor() {
    super(
      'Ladino',
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
      [acrobacia, atletismo, atuacao, enganacao, furtividade, intimidacao, intuicao, percepcao, persuasao, prestidigitacao]
    )
  }
}
class Mago extends Classe {
  constructor() {
    super(
      'Mago',
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
      [arcanismo, historia, intuicao, investigacao, medicina, religiao]
    )
  }
}
class Monge extends Classe {
  constructor() {
    super(
      'Monge',
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
      [acrobacia, atletismo, historia, intimidacao, religiao, furtividade]
    )
  }
}
class Paladino extends Classe {
  constructor() {
    super(
      'Paladino',
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
      [atletismo, intimidacao, intuicao, medicina, persuasao, religiao]
    )
  }
}
class Patrulheiro extends Classe {
  constructor() {
    super(
      'Patrulheiro',
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
      [adestrarAnimais, atletismo, intuicao, investigacao, natureza, percepcao, furtividade, sobrevivencia]
    )
  }
}

let barbaro = new Barbaro();
let bardo = new Bardo();
let bruxo = new Bruxo();
let clerigo = new Clerigo();
let druida = new Druida();
let feiticeiro = new Feiticeiro();
let guerreiro = new Guerreiro();
let ladino = new Ladino();
let mago = new Mago();
let monge = new Monge();
let paladino = new Paladino();
let patrulheiro = new Patrulheiro();

/*
class XXX extends Classe{
  constructor()
  {
    super(
      
    )
  }
}
class XXX extends Classe{
  constructor()
  {
    super(
      
    )
  }
}
class XXX extends Classe{
  constructor()
  {
    super(
      
    )
  }
}
class XXX extends Classe{
  constructor()
  {
    super(
      
    )
  }
}
class XXX extends Classe{
  constructor()
  {
    super(
      
    )
  }
}
class XXX extends Classe{
  constructor()
  {
    super(
      
    )
  }
}
class XXX extends Classe{
  constructor()
  {
    super(
      
    )
  }
}
*/