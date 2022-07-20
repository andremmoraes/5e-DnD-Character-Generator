class Dados {
  constructor(lados) {
    this.lados = lados;
  }

  rolagem() {
    return rolar(this.lados);
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

class Nivel {
  constructor(nivel, proficiencia, caracteristicas) { }
}

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

