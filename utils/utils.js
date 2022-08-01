/*
class Dado{
}
*/

class Dados{
  constructor(lados) {
    this.lados = lados;
  }

  rolagem (qtdRolagem = 1)
  {
    this.resultados = "[";
    this.resultadoRolagem = 0;
    for (let i = 0; i < qtdRolagem; i++) {
      let res = Dados.rolar(this.lados);
      
      if (i!==0){
        this.resultados +="; ";
      }

      this.resultados +=res;
      this.resultadoRolagem += res;
      
    }
    this.resultados +="]";
    return this.resultadoRolagem;
  }

  static rolar(lados = null) {
    if (lados <= 0) {
      lados = 1;
    }

    return Math.floor(Math.random() * lados) + 1;
  }  
}

class D2 extends Dados {
  constructor() {
    super(2);
  }

  static rolar() {
    return super.rolar(2);
  }
}

class D4 extends Dados {
  constructor() {
    super(4);
  }
  static rolar() {
    return super.rolar(4);
  }
}

class D6 extends Dados {
  constructor() {
    super(6);
  }
  static rolar() {
    return super.rolar(6);
  }
}

class D8 extends Dados {
  constructor() {
    super(8);
  }
  static rolar() {
    return super.rolar(8);
  }
}

class D10 extends Dados {
  constructor() {
    super(10);
  }
  static rolar() {
    return super.rolar(10);
  }
}
class D12 extends Dados {
  constructor() {
    super(12);
  }
  static rolar() {
    return super.rolar(12);
  }
}

class D20 extends Dados {
  constructor() {
    super(20);
  }
  static rolar() {
    return super.rolar(20);
  }
}

class D100 extends Dados {
  constructor() {
    super(100);
  }
  static rolar() {
    return super.rolar(100);
  }
}

class RolagemAtributos {
  static RolarAtributo4d6() {

    let rolagem = [D6.rolar(), D6.rolar(), D6.rolar(), D6.rolar()];
    let menorValor = Math.min(...rolagem);

    let soma = rolagem.reduce(function (soma, i) {
      return soma + i;
    });

    soma -= menorValor;
    if (soma < 8) {
      soma = this.RolarAtributo4d6();
    }

    return soma;
  }
}

class Idioma {
  constructor(nome, exotico = false) {
    this.nome = nome;
    this.exotico = exotico;
  }
}


class Moralidade {
  constructor(nome) {
    this.nome = nome;
    this.carctere = nome[0];
  }
}

class Lealdade {
  constructor(nome) {
    this.nome = nome;
    this.carctere = nome[0];
  }
}

class Tendencia {
  constructor(lealdade, moralidade, descricao) {
    this.descricao = descricao;
    this.moralidade = moralidade;
    this.lealdade = lealdade;
    this.nome = lealdade.nome + " e " + moralidade.nome;
    this.sigla = lealdade.carctere + moralidade.carctere;
  }

}

//class Nivel {
//  constructor(nivel, proficiencia, caracteristicas) { }
//}

class Tamanho {
  constructor(nome = '', descricao = '', bonus = 0, espaco) {
    this.nome = nome;
    this.descricao = descricao;
    this.bonus = bonus;
    this.espaco = espaco;
  }
}

class Pericia {
  constructor(atributobase, nome, descricao, proeficiente = false) {
    this.nome = nome;
    this.descricao = descricao;
    this.atributobase = atributobase;
    this.proeficiente = proeficiente;
  }
}

class Atletismo extends Pericia{constructor(){super('FOR','Atletismo')}}
class Acrobacia extends Pericia{constructor(){super('DES','Acrobacia')}}
class Furtividade extends Pericia{constructor(){super('DES','Furtividade')}}
class Prestidigitacao extends Pericia{constructor(){super('DES','Prestidigitação')}}

class Arcanismo extends Pericia{constructor(){super('INT','Arcanismo')}}
class Historia extends Pericia{constructor(){super('INT','História')}}
class Investigacao extends Pericia{constructor(){super('INT','Investigação')}}
class Natureza extends Pericia{constructor(){super('INT','Natureza')}}
class Religiao extends Pericia{constructor(){super('INT','Religião')}}
	
class AdestrarAnimais extends Pericia{constructor(){super('SAB','Adestrar Animais')}}
class Intuicao extends Pericia{constructor(){super('SAB','Intuição')}}
class Medicina extends Pericia{constructor(){super('SAB','Medicina')}}
class Percepcao extends Pericia{constructor(){super('SAB','Percepção')}}
class Sobrevivencia extends Pericia{constructor(){super('SAB','Sobrevivência')}}

class Atuacao extends Pericia{constructor(){super('CAR','Atuação')}}
class Enganacao extends Pericia{constructor(){super('CAR','Enganação')}}
class Intimidacao extends Pericia{constructor(){super('CAR','Intimidação')}}
class Persuasao extends Pericia{constructor(){super('CAR','Persuasão')}}

let atletismo = new Atletismo();
let acrobacia = new Acrobacia();
let furtividade = new Furtividade();
let prestidigitacao = new Prestidigitacao();

let arcanismo = new Arcanismo();
let historia = new Historia();
let investigacao = new Investigacao();
let natureza = new Natureza();
let religiao = new Religiao();
	
let adestrarAnimais = new AdestrarAnimais();
let intuicao = new Intuicao();
let medicina = new Medicina();
let percepcao = new Percepcao();
let sobrevivencia = new Sobrevivencia();

let atuacao = new Atuacao();
let enganacao = new Enganacao();
let intimidacao = new Intimidacao();
let persuasao = new Persuasao();

