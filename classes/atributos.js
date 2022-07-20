class atributo {
  constructor(nome, descricao, sigla, valor) {
    this.nome = nome;
    this.descricao = descricao;
    this.sigla = sigla;
    this.valor = valor;
    this.modificador = Math.floor((valor - 10) / 2);

    let custo = 0;

    switch (this.valor) {
      case 8:
        custo = (this.valor - 8);
        break;

      case 9:
        custo = (this.valor - 8);
        break;

      case 10:
        custo = (this.valor - 8);
        break;

      case 11:
        custo = (this.valor - 8);
        break;

      case 12:
        custo = (this.valor - 8);
        break;

      case 13:
        custo = (this.valor - 8);
        break;

      case 14:
        custo = 7;
        break;

      case 15:
        custo = 9;
        break;

      case 16:
        custo = 11;
        break;

      case 17:
        custo = 13;
        break;

      case 18:
        custo = 15;
        break;

      default:
        break;
    }
    this.custo = custo;
  }

  adicionarValor(valor) {
    this.valor += valor;
    this.modificador = Math.floor((this.valor - 10) / 2);
  }
}

class Forca extends atributo {
  constructor(valor) {
    super("Força", "Força, mede o poder físico", "FOR", valor)
  }
}
class Destreza extends atributo {
  constructor(valor) {
    super("Destreza", "Destreza, mede a agilidade", "DES", valor)
  }
}
class Constituicao extends atributo {
  constructor(valor) {
    super("Constituição", "Constituição, mede a resistência", "CON", valor)
  }
}
class Inteligencia extends atributo {
  constructor(valor) {
    super("Inteligencia", "Inteligência, mede o raciocínio e a memória", "INT", valor)
  }
}
class Sabedoria extends atributo {
  constructor(valor) {
    super("Sabedoria", "Sabedoria, mede a percepção e a intuição", "SAB", valor)
  }
}
class Carisma extends atributo {
  constructor(valor) {
    super("Carisma", "Carisma, mede a força da personalidade", "CAR", valor)
  }
}

class atributos {
  constructor(forca, destreza, constituicao, inteligencia, sabedoria, carisma) {
    this.forca = new Forca(forca);
    this.destreza = new Destreza(destreza);
    this.constituicao = new Constituicao(constituicao);
    this.inteligencia = new Inteligencia(inteligencia);
    this.sabedoria = new Sabedoria(sabedoria);
    this.carisma = new Carisma(carisma);
  }

  get ToString() {
    let atributos = 'Atributos \r';
    atributos += this.forca.sigla + ': ' + this.forca.valor + '(' + this.forca.modificador + ') - custo ' + this.forca.custo + ',<br>';
    atributos += this.destreza.sigla + ': ' + this.destreza.valor + '(' + this.destreza.modificador + ') - custo ' + this.destreza.custo + ',<br>';
    atributos += this.constituicao.sigla + ': ' + this.constituicao.valor + '(' + this.constituicao.modificador + ') - custo ' + this.constituicao.custo + ',<br>';
    atributos += this.inteligencia.sigla + ': ' + this.inteligencia.valor + '(' + this.inteligencia.modificador + ') - custo ' + this.inteligencia.custo + ',<br>';
    atributos += this.sabedoria.sigla + ': ' + this.sabedoria.valor + '(' + this.sabedoria.modificador + ') - custo ' + this.sabedoria.custo + ',<br>';
    atributos += this.carisma.sigla + ': ' + this.carisma.valor + '(' + this.carisma.modificador + ') - custo ' + this.carisma.custo + ',<br>custo total:' + (this.forca.custo + this.destreza.custo + this.constituicao.custo + this.inteligencia.custo + this.sabedoria.custo + this.carisma.custo);
    return atributos;
  }
}

class atributosRaca {
  constructor(forca = 0, destreza = 0, constituicao = 0, inteligencia = 0, sabedoria = 0, carisma = 0) {
    this.forca = forca;
    this.destreza = destreza;
    this.constituicao = constituicao;
    this.inteligencia = inteligencia;
    this.sabedoria = sabedoria;
    this.carisma = carisma;
  }
  get ToString() {
    let atributos = '<br>Atributos de Raça<br>';
    atributos += (this.forca !== 0 ? 'FOR: ' + this.forca + '<br>' : '');
    atributos += (this.destreza !== 0 ? 'DES: ' + this.destreza + '<br>' : '');
    atributos += (this.constituicao !== 0 ? 'CON: ' + this.constituicao + '<br>' : '');
    atributos += (this.inteligencia !== 0 ? 'INT: ' + this.inteligencia + '<br>' : '');
    atributos += (this.sabedoria !== 0 ? 'SAB: ' + this.sabedoria + '<br>' : '');
    atributos += (this.carisma !== 0 ? 'CAR: ' + this.carisma : '');

    return atributos;
  }
}