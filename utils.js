class dados {
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
  
  class D2 extends dados {
    constructor() {
      super(2);
    }
  
    static rolar() {
      return super.rolar(2);
    }
  }
  
  class D4 extends dados {
    constructor() {
      super(4);
    }
    static rolar() {
      return super.rolar(4);
    }
  }
  
  class D6 extends dados {
    constructor() {
      super(6);
    }
    static rolar() {
      return super.rolar(6);
    }
  }
  
  class D8 extends dados {
    constructor() {
      super(8);
    }
    static rolar() {
      return super.rolar(8);
    }
  }
  
  class D10 extends dados {
    constructor() {
      super(10);
    }
    static rolar() {
      return super.rolar(10);
    }
  }
  class D12 extends dados {
    constructor() {
      super(12);
    }
    static rolar() {
      return super.rolar(12);
    }
  }
  
  class D20 extends dados {
    constructor() {
      super(20);
    }
    static rolar() {
      return super.rolar(20);
    }
  }
  
  class D100 extends dados {
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
      
      return soma - menorValor;
    }
  }