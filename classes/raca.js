class NomesRacas {
    constructor(nomesMasculinos = [], nomesFemininos = [], nomesTribos = []) {
        this.nomesMasculinos = nomesMasculinos;
        this.nomesFemininos = nomesFemininos;
        this.nomesTribos = nomesTribos;
    }
}

class Tamanho {
    constructor(nome = '', descricao = '', bonus = 0, espaco) {
        this.nome = nome;
        this.descricao = descricao;
        this.bonus = bonus;
    }
}

class Deslocamento {
    constructor(deslocamento, tipoDelocamento) {
        switch (tipoDelocamento) {
            case 'quadrado':
                this.quadrados = deslocamento;
                this.metros = deslocamento * 1.5;
                this.pes = this.metros * 0.3;
                break;

            case 'pes':
                this.pes = deslocamento;
                this.metros = deslocamento * 0.3;
                this.quadrados = this.metros / 1.5;
                break;

            case 'metros':
                this.metros = deslocamento;
                this.quadrados = deslocamento / 1.5;
                this.pes = deslocamento / 0.3;
                break;

            default:
                this.metros = deslocamento;
                this.quadrados = deslocamento;
                this.pes = deslocamento;
                break;
        }
    }
}

class VantagemRaca {
    constructor(nome, descricao, tipo, idioma = []) {
        this.nome = nome;
        this.descricao = descricao;
        this.tipo = tipo;
        this.idioma = idioma;
    }
}

class Raca {
    constructor(nome, descricao, nomesRacas, atributos, tamanho, deslocamento) {
        this.nome = nome;
        this.descricao = descricao;
        this.nomesRacas = nomesRacas;
        this.atributos = atributos;
        this.tamanho = tamanho;
        this.deslocamento = deslocamento;
    }

    retornarNomeRacaPersonagem(sexo = 'masculino') {
        let nomeRacial = '';
        let qtdnomes = 0;
        let i = 0;

        if (sexo === 'masculino') {
            qtdnomes = this.nomesRacas.nomesMasculinos.length;
            i = Math.floor(Math.random() * qtdnomes);
            nomeRacial = this.nomesRacas.nomesMasculinos[i];
        }
        else {
            qtdnomes = this.nomesRacas.nomesFemininos.length;
            i = Math.floor(Math.random() * qtdnomes);
            nomeRacial = this.nomesRacas.nomesFemininos[i];

        }

        qtdnomes = this.nomesRacas.nomesTribos.length;
        i = Math.floor(Math.random() * qtdnomes);

        nomeRacial += ' ' + this.nomesRacas.nomesTribos[i];

        return nomeRacial;
    }

}
