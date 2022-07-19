class atributo {
    constructor(nome, descricao, abreviacao, valor) {
      this.nome = nome;
      this.descricao = descricao;
      this.abreviacao = abreviacao;
      this.valor = valor;
      this.modificador = Math.floor((valor - 10) / 2);
  
      this.custo = 0;
  
      switch (valor) {
        case 9, 10, 11, 12, 13:
          this.custo = valor - 8;
          break;
  
        case 14:
          this.custo = 7;
          break;
  
        case 15:
          this.custo = 8;
          break;
  
        default:
          break;
      }
    }
  }
  class _forca extends atributo {
    constructor(valor) {
      super("Força", "Força, mede o poder físico", "FOR", valor)
    }
  }
  class _destreza extends atributo {
    constructor(valor) {
      super("Destreza", "Destreza, mede a agilidade", "DES", valor)
    }
  }
  class _constituicao extends atributo {
    constructor(valor) {
      super("Constituição", "Constituição, mede a resistência", "CON", valor)
    }
  }
  class _inteligencia extends atributo {
    constructor(valor) {
      super("Inteligencia", "Inteligência, mede o raciocínio e a memória", "INT", valor)
    }
  }
  class _sabedoria extends atributo {
    constructor(valor) {
      super("Sabedoria", "Sabedoria, mede a percepção e a intuição", "SAB", valor)
    }
  }
  class _carisma extends atributo {
    constructor(valor) {
      super("Carisma", "Carisma, mede a força da personalidade", "CAR", valor)
    }
  }
  class atributos {
    constructor(forca, destreza, constituicao, inteligencia, sabedoria, carisma) {
      this.forca = new _forca(forca);
      this.destreza = new _destreza(destreza);
      this.constituicao = new _constituicao(constituicao);
      this.inteligencia = new _inteligencia(inteligencia);
      this.sabedoria = new _sabedoria(sabedoria);
      this.carisma = new _carisma(carisma);
    }
  }
  class atributosRaca {
    constructor(forca=0, destreza=0, constituicao=0, inteligencia=0, sabedoria=0, carisma=0) {
      this.forca = forca;
      this.destreza = destreza;
      this.constituicao = constituicao;
      this.inteligencia = inteligencia;
      this.sabedoria = sabedoria;
      this.carisma = carisma;
    }
  }