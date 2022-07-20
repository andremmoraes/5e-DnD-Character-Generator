class NomesRacas {
    constructor(nomesMasculinos = [], nomesFemininos = [], nomesTribos = []) {
        this.nomesMasculinos = nomesMasculinos;
        this.nomesFemininos = nomesFemininos;
        this.nomesTribos = nomesTribos;
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
    constructor(nome, descricao, tipo = '') {
        this.nome = nome;
        this.descricao = descricao;
        this.tipo = tipo;
    }
}

class Raca {
    constructor(nome, descricao, nomesRacas, atributos, tamanho, deslocamento, idioma = [], vantagemRaca = []) {
        this.nome = nome;
        this.descricao = descricao;
        this.nomesRacas = nomesRacas;
        this.atributos = atributos;
        this.tamanho = tamanho;
        this.deslocamento = deslocamento;
        this.idioma = idioma;
        this.vantagemRaca = vantagemRaca;
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


/*
 *Raças base
*/
class Anao extends Raca {
    constructor() {
        super('Anão',
            'São Anões, baixinhos e rabugentos',
            new NomesRacas(
                [
                    'Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg',
                    'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik',
                    'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon',
                    'Travok', 'Ulfgar', 'Veit', 'Vondal'
                ],
                [
                    'Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn',
                    'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa',
                    'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra'
                ],
                [
                    'Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard',
                    'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln',
                    'Torunn', 'Ungart'
                ]
            ), new atributosRaca(0, 0, 2, 0, 0, 0),
            'Medio',
            new Deslocamento(7.5, 'metros'),
            [idiomas[0], idiomas[1]],
            [
                new VantagemRaca('Visão no Escuro', 'Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.'),
                new VantagemRaca('Resiliência Anã', 'Você possui vantagem em testes de resistência contra venenos e resistência contra dano venenoso (explicado no capítulo 9).'),
                new VantagemRaca('Treinamento Anão de Combate', 'Você tem proficiência com machados de batalha, machadinhas, martelos de arremesso e martelos de guerra.'),
                new VantagemRaca('Proficiência em Ferramentas', 'Você tem proficiência em uma ferramenta de artesão à sua escolha entre: ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro.'),
                new VantagemRaca('Especialização em Rochas', 'Sempre que você realizar um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal.')
            ]
        )
    }
}

class Draconato extends Raca {
    constructor() {
        super(
            'Draconato',
            'Nascidos de dragões, como seu nome proclama, os draconatos andam orgulhosamente por um mundo que os cumprimenta com incompreensão temerosa.',
            new NomesRacas(
                [
                    'Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn'
                ],
                [
                    'Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit'
                ],
                [
                    'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit'
                ]
            ), new atributosRaca(2, 0, 0, 0, 0, 1),
            'Medio',
            new Deslocamento(9, 'metros'),
            [idiomas[0], idiomas[10]],
            [
                new VantagemRaca('Ancestral Dracônico', 'Você possui ascendência dracônica. Escolha um tipo de dragão da tabela Ancestral Dracônico. O sopro e a resistência à dano são determinadas pelo tipo de dragão, como mostrado na tabela'),
                new VantagemRaca('Sopro de Dragão', 'Você pode usar sua ação para baforar energia destrutiva. Sua ascendência dracônica determina o tamanho, forma e tipo de dano da baforada. Quando você usa o sopro de dragão, cada criatura na área da baforada deve realizar um teste de resistência, o tipo de teste é determinado pelo seu ancestral dracônico. A CD para esse teste de resistência é igual a 8 + seu modificador de Constituição + seu bônus de proficiência. A criatura sofre 2d6 de dano se falhar no teste de resistência, e metade do dano se passar. O dano aumenta para 3d6 no 6° nível, 4d6 no 11º nível e 5d6 no 16° nível. Depois de usar seu sopro de dragão, você não pode usá-lo de novo até que complete um descanso curto ou longo.'),
                new VantagemRaca('Resistência ao Dano', 'Você possui resistência ao tipo de dano associado com seu ancestral dracônico.')
            ]
        )
    }
}
/* 
*/
class Elfo extends Raca {
    constructor() {
        super(
            'Elfo',
            'Elfos são um povo mágico de graça sobrenatural, vivendo no mundo sem pertencer inteiramente à ele.',
            new NomesRacas(
                ['Adran', ' Aelar', 'Aramil', ' Arannis', ' Aust', ' Beiro', ' Berrian', ' Carric', 'Enialis', ' Erdan', ' Erevan', ' Galinndan', ' Hadarai', ' Heian', 'Himo', ' Immeral', ' Ivellios', ' Laucian', ' Mindartis', 'Paelias', ' Peren', ' Quarion', ' Riardon', ' Rolen', ' Soveliss', 'Thamior', ' Tharivol', ' Theren', ' Varis'],
                ['Adrie', ' Althaea', 'Anastrianna', ' Andraste', ' Antinua', ' Bethrynna', ' Birel', 'Caelynn', ' Drusilia', ' Enna', ' Felosial', ' Ielenia', 'Jelenneth', ' Keyleth', ' Leshanna', ' Lia', ' Meriele', ' Mialee', 'Naivara', ' Quelenna', ' Quillathe', ' Sariel', ' Shanairra', 'Shava', ' Silaqui', ' Theirastra', ' Thia', ' Vadania', ' Valanthe', 'Xanaphia'],
                ['Amakiir (JoiaFlorida)', ' Amastacia (Flor das Estrelas)', ' Galanodel(Sussurro da Lua)', ' Holimion (Orvalho dosDiamantes)', ' Ilphelkiir (Pétala Preciosa)', ' Liadon(Folha de Prata)', ' Meliamne (Calcanhar deCarvalho)', ' Nailo (Brisa da Noite)', ' Siannodel(Córrego Lunar)', ' Xiloscient (Pétala de Ouro)']
            ), new atributosRaca(0, 2, 0, 0, 0, 1),
            tamanhos[2],
            new Deslocamento(9, 'metros'),
            [idiomas[0], idiomas[3]],
            [
                new VantagemRaca('Visão no Escuro', 'Acostumado às florestas crepusculares e ao céu noturno, você possui uma visão superior em condições de escuridão e na penumbra. Você pode enxergar na penumbra a até 18 metros como se fosse na luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.'),
                new VantagemRaca('Sentidos Aguçados', 'Você tem proficiência na perícia Percepção.'),
                new VantagemRaca('Ancestral Feérico', 'Você tem vantagem nos testes de resistência para resistir a ser enfeitiçado e magias não podem colocá-lo para dormir.'),
                new VantagemRaca('Transe', 'Elfos não precisam dormir. Ao invés disso, eles meditam profundamente, permanecendo semiconscientes, durante 4 horas por dia. (A palavra em idioma comum para tal meditação é "transe".) Enquanto medita, um elfo é capaz de sonhar de certo modo. Esses sonhos na verdade são exercícios mentais que se tornam reflexos através de anos de prática. Depois de descansar dessa forma, você ganha os mesmos benefícios que um humano depois de 8 horas de sono.')
            ]
        )
    }
}



class Gnomo extends Raca {
    constructor() {
        super(
            'Gnomo',
            'Um zumbido constante de atividades interessantes permeia as tocas e vizinhanças onde gnomos formam suas comunidades muito unidas.',
            new NomesRacas(
                ['Alston', ' Alvyn', ' Boddynock', 'Brocc', ' Burgell', ' Dimble', ' Eldon', ' Erky', ' Fonkin', ' Frug', 'Gerbo', ' Gimble', ' Glim', ' Jebeddo', ' Kellen', ' Namfoodle', 'Orryn', ' Roondar', ' Seebo', ' Sindri', ' Warryn', ' Wrenn', 'Zook'],
                ['Bimpnottin', ' Breena', ' Caramip', 'Carlin', ' Donella', ' Duvamil', ' Ella', ' Ellyjobell', 'Ellywick', ' Lilli', ' Loopmottin', ' Lorilla', ' Mardnab', 'Nissa', ' Nyx', ' Oda', ' Orla', ' Roywyn', ' Shamil', ' Tana', 'Waywocket', ' Zanna'],
                ['Beren', ' Daergel', ' Folkor', ' Garrick', 'Nackle', ' Murnig', ' Ningel', ' Raulnor', ' Scheppen', 'Timbers', ' Turen']
            ), new atributosRaca(0, 0, 0, 2, 0, 0),
            tamanhos[1],
            new Deslocamento(7.5, 'metros'),
            [idiomas[0], idiomas[4]],
            [
                new VantagemRaca('Visão no Escuro', 'Acostumado a viver no subsolo, você possui uma visão superior em condições de escuridão ou penumbra. Você pode enxergar na penumbra a até 18 metros como se estivesse na luz plena, e pode enxergar na escuridão como se estivesse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.'),
                new VantagemRaca('Astúcia dos Gnomos', 'Você tem vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma realizados contra magias.')
            ]
        )
    }
}


class Halfling extends Raca {
    constructor() {
        super(
            'Halfling',
            'Os confortos de um lar são os objetivos da maioria dos halflings: um lugar para viver em paz e sossego, longe de monstros saqueadores e embates de exércitos, com um fogo aceso e uma refeição generosa, e também uma bebida fina e boa conversa.',
            new NomesRacas(
                ['Alton', ' Ander', ' Cade', ' Corrin', 'Eldon', ' Errich', ' Finnan', ' Garret', ' Lindal', ' Lyle', ' Merric', 'Milo', ' Osborn', ' Perrin', ' Reed', ' Roscoe', ' Wellby'],
                ['Andry', ' Bree', ' Callie', ' Cora', 'Euphemia', ' Jillian', ' Kithri', ' Lavinia', ' Lidda', ' Merla', 'Nedda', ' Paela', ' Portia', ' Seraphina', ' Shaena', ' Trym', 'Vani', ' Verna'],
                ['Cata-Escovas', ' Bom-Barril', 'Garrafa Verde', ' Alta Colina', ' Baixa Colina', ' PratoCheio', ' Folha de Chá', ' Espinhudo', ' Cinto Frouxo', 'Galho Caído']
            ), new atributosRaca(0, 2, 0, 0, 0, 0),
            tamanhos[1],
            new Deslocamento(7.5, 'metros'),
            [idiomas[0], idiomas[6]],
            [
                new VantagemRaca('Sortudo', 'Quando você obtiver um 1 natural em uma jogada de ataque, teste de atributo ou teste de resistência, você pode jogar de novo o dado e deve utilizar o novo resultado.'),
                new VantagemRaca('Bravura', 'Você tem vantagem em testes de resistência contra ficar amedrontado.'),
                new VantagemRaca('Agilidade Halfling', 'Você pode mover-se através do espaço de qualquer criatura que for de um tamanho maior que o seu.')
            ]
        )
    }
}

class Humano extends Raca {
    constructor() {
        super(
            'Humano',
            'Humano.',
            new NomesRacas(
                [
                    'Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn'
                ],
                [
                    'Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit'
                ],
                [
                    'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit'
                ]
            ), new atributosRaca(1, 1, 1, 1, 1, 1),
            tamanhos[2],
            new Deslocamento(9, 'metros'),
            [idiomas[0], idiomas[Math.floor(Math.random() * (idiomas.length - 1)) + 1]],
            []
        )
    }
}

class MeioElfo extends Raca {
    constructor() {
        super(
            'Meio Elfo',
            'Andando em dois mundos, mas não pertencendo verdadeiramente a nenhum dos dois, os meio-elfos combinam o que alguns dizem que são as melhores qualidades de seus pais elfos e humanos: a curiosidade, criatividade e ambição humana, temperada pelos sentidos refinados, pelo amor à natureza e pelos gostos artísticos dos elfos.',
            new NomesRacas(
                [
                    'Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn'
                ],
                [
                    'Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit'
                ],
                [
                    'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit'
                ]
            ), new atributosRaca(0, 0, 0, 0, 0, 2),
            tamanhos[2],
            new Deslocamento(9, 'metros'),
            [idiomas[0], idiomas[2], idiomas[Math.floor(Math.random() * (idiomas.length - 2)) + 2]],
            [
                new VantagemRaca('Visão no Escuro', 'Graças ao seu sangue élfico, você tem uma visão superior em condições de escuridão e de penumbra. Você pode enxergar na penumbra a até 18 metros como se estivesse na luz plena, e pode enxergar na escuridão como se estivesse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza. '),
                new VantagemRaca('Ancestral Feérico', 'Você tem vantagem nos testes de resistência para resistir a ser enfeitiçado e magias não podem colocá-lo para dormir.'),
                new VantagemRaca('Versatilidade em Perícia', 'Você ganha proficiência em duas perícias à sua escolha.')
            ]
        )
    }
}


class MeioOrc extends Raca {
    constructor() {
        super(
            'Meio-Orc',
            'Sejam unidos sob a liderança de um poderoso bruxo, ou lutado até a exaustão após anos de conflito, tribos humanas e orcs algumas vezes formam alianças, unindo forças em uma horda maior para aterrorizar terras civilizadas mais próximas. ',
            new NomesRacas(
                ['Dench', ' Feng', ' Gell', 'Henk', ' Holg', ' Imsh', ' Keth', ' Krusk', ' Mhurren', ' Ront', 'Shump', ' Thokk'],
                ['Baggi', ' Emen', ' Engong', 'Kansif', ' Myev', ' Neega', ' Ovak', ' Ownka', ' Shautha', 'Sutha', ' Vola', ' Volen', ' Yevelda'],
                ['Morte Branca']
            ), new atributosRaca(2, 0, 1, 0, 0, 0),
            tamanhos[2],
            new Deslocamento(9, 'metros'),
            [idiomas[0], idiomas[7]],
            [
                new VantagemRaca('Visão no Escuro', 'Graças ao seu sangue orc, você tem uma visão superior em condições de escuridão e de penumbra. Você pode enxergar na penumbra a até 18 metros como se estivesse na luz plena, e  pode enxergar na escuridão como se estivesse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza'),
                new VantagemRaca('Ameaçador', 'Você ganha proficiência na perícia Intimidação.'),
                new VantagemRaca('Tolerância Implacável', 'Quando você for reduzido a 0 pontos de vida, mas não for morto imediatamente, você pode ficar com 1 ponto de vida ao invés disso. Você não pode usar esse recurso de novo até completar um descanso longo.'),
                new VantagemRaca('Ataques Selvagens', 'Quando você jogar um acerto crítico com um ataque com arma corpo a corpo, você pode jogar um dos dados de dano da arma mais uma vez e adicioná-lo ao dano total do acerto crítico.')
            ]
        )
    }
}


class Tiefling extends Raca {
    constructor() {
        super(
            'Tiefling',
            'Ser recebido com olhares e cochichos, sofrer violência e insultos na rua, ver desconfiança e medo em cada olhar: esse é o destino de um tiefling.',
            new NomesRacas(
                ['Akmenos', 'Amnon', ' Barakas', ' Damakos', ' Ekemon', ' Iados', 'Kairon', ' Leucis', ' Melech', ' Mordai', ' Morthos', ' Pelaios', 'Skamos', ' Therai'],
                ['Akta', ' Anakis', 'Bryseis', ' Criella', ' Damaia', ' Ea', ' Kallista', ' Lerissa', 'Makaria', ' Neméia', ' Orianna', ' Phelaia', ' Rieta'],
                ['Arte', ' Carniça', ' Cântico', 'Credo', ' Desespero', ' Excelência', ' Medo', ' Glória', 'Esperança', ' Ideal', ' Música', ' Lugar Nenhum', ' Aberto', 'Poesia', ' Missão', ' Aleatório', ' Reverência', ' Tristeza', 'Temeridade', ' Tormento', ' Cansado']
            ), new atributosRaca(0, 0, 0, 1, 0, 2),
            tamanhos[2],
            new Deslocamento(9, 'metros'),
            [idiomas[0], idiomas[12]],
            [
                new VantagemRaca('Visão no Escuro', 'Graças à sua herança infernal, você tem uma visão superior em condições de escuridão e de penumbra. Você pode enxergar na penumbra a até 18 metros como se estivesse na luz plena, e pode enxergar na escuridão como se estivesse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.'),
                new VantagemRaca('Resistência Infernal', 'Você tem resistência à dano flamejante.'),
                new VantagemRaca('Legado Infernal', 'Você conhece o truque taumaturgia. Quando alcançar o 3º nível, você pode lançar a magia contragolpe infernal uma vez por dia, como uma magia de 2° nível. Depois de chegar ao 5° nível, você também pode lançar escuridão uma vez por dia. Carisma é seu atributo para lançar essas magias.')
            ]
        )
    }
}


let anaoColina = new Anao;
anaoColina.nome = 'Anão da Colina';
anaoColina.atributos.sabedoria = 2;
anaoColina.vantagemRaca.push(new VantagemRaca('Tenacidade Anã', 'Seus pontos de vida máximos aumentam em 1, e cada vez que o anão da colina sobe um nível, ele recebe 1 ponto de vida adicional.'));

let anaoMontanha = new Anao;
anaoMontanha.nome = 'Anão da Montanha';
anaoMontanha.atributos.forca = 2;
anaoColina.vantagemRaca.push(new VantagemRaca('Treinamento Anão de Armaduras', 'Você adquire proficiência em armaduras leves e médias.'));

let draconatoAzul = new Draconato;
draconatoAzul.nome = 'Draconato(Azul)';
draconatoAzul.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Azul', 'Sopro Elétrico Linha 1,5 x 9 metros (TR* Des)'));
let draconatoBranco = new Draconato;
draconatoBranco.nome = 'Draconato(Branco)';
draconatoBranco.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Branco', 'Sopro Congelante Cone 4,5 metros (TR* Cons)'));
let draconatoBronze = new Draconato;
draconatoBronze.nome = 'Draconato(Bronze)';
draconatoBronze.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Bronze', 'Sopro Elétrico Linha 1,5 x 9 metros (TR* Des)'));
let draconatoCobre = new Draconato;
draconatoCobre.nome = 'Draconato(Cobre)';
draconatoCobre.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Cobre', 'Sopro Ácido Linha 1,5 x 9 metros (TR* Des)'));
let draconatoDourado = new Draconato;
draconatoDourado.nome = 'Draconato(Dourado)';
draconatoDourado.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Dourado', 'Sopro Flamejante Cone 4,5 metros (TR* Des)'));
let draconatoLatão = new Draconato;
draconatoLatão.nome = 'Draconato(Latão)';
draconatoLatão.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Latão', 'Sopro Flamejante Linha 1,5 x 9 metros (TR* Des)'));
let draconatoNegro = new Draconato;
draconatoNegro.nome = 'Draconato(Negro)';
draconatoNegro.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Negro', 'Sopro Ácido Linha 1,5 x 9 metros (TR* Des)'));
let draconatoPrata = new Draconato;
draconatoPrata.nome = 'Draconato(Prata)';
draconatoPrata.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Prata', 'Sopro Congelante Cone 4,5 metros (TR* Cons)'));
let draconatoVerde = new Draconato;
draconatoVerde.nome = 'Draconato(Verde)';
draconatoVerde.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Verde', 'Sopro Venenoso Cone 4,5 metros (TR* Cons)'));
let draconatoVermelho = new Draconato;
draconatoVermelho.nome = 'Draconato(Vermelho)';
draconatoVermelho.vantagemRaca.push(new VantagemRaca('Ancestral Dragão Vermelho', 'Sopro Flamejante Cone 4,5 metros (TR* Des)'));


let altoElfo = new Elfo();
altoElfo.nome = 'Alto Elfo';
altoElfo.atributos.inteligencia = 1;
altoElfo.vantagemRaca.push(new VantagemRaca('Treinamento Élfico de Armas', 'Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.'));
altoElfo.vantagemRaca.push(new VantagemRaca('Truque', 'Você conhece um truque à sua escolha da lista de truques do mago. Inteligência é o atributo usado para lançar este truque.'));
altoElfo.vantagemRaca.push(new VantagemRaca('Idioma Adicional', 'Você pode falar, ler e escrever um idioma adicional à sua escolha.'));

let elfoFloresta = new Elfo();
elfoFloresta.nome = 'Elfo da Floresta';
elfoFloresta.atributos.sabedoria = 1;
elfoFloresta.vantagemRaca.push(new VantagemRaca('Treinamento Élfico de Armas', 'Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.'));
elfoFloresta.vantagemRaca.push(new VantagemRaca('Pés Ligeiros', 'Seu deslocamento base de caminhada aumenta para 10,5 metros.'));
elfoFloresta.vantagemRaca.push(new VantagemRaca('Máscara da Natureza', 'Você pode tentar se esconder mesmo quando estiver apenas em uma área com escuridão leve por folhagem, chuva forte, neve caindo, névoa, ou outro fenômeno natural.'));

let elfoNegro = new Elfo();
elfoNegro.nome = 'Elfo Negro(Drow)';
elfoNegro.atributos.sabedoria = 1;
elfoNegro.vantagemRaca.push(new VantagemRaca('Visão no Escuro Superior', 'Sua visão no escuro é de 36 metros.'));
elfoNegro.vantagemRaca.push(new VantagemRaca('Sensibilidade à Luz do Sol', 'Você tem desvantagem em jogadas de ataque e testes de Sabedoria (Percepção) que dependam da visão quando você, o alvo de seu ataque, ou o que ele esteja tentando perceber estiver exposto à luz direta do sol.'));
elfoNegro.vantagemRaca.push(new VantagemRaca('Magia Drow', 'Você conhece o truque globos de luz. Quando alcançar o 3° nível, você pode lançar a magia fogo das fadas uma vez por dia. Quando alcançar o 5° nível, também pode lançar a magia escuridão uma vez por dia. Carisma é o atributo que você usa para lançar essas magias.'));
elfoNegro.vantagemRaca.push(new VantagemRaca('Treinamento Drow de Armas', 'Você possui proficiência com rapieiras, espadas curtas e bestas de mão.'));


let gnomoFloresta = new Gnomo();
gnomoFloresta.nome = 'Gnomo das Florestas';
gnomoFloresta.atributos.destreza = 1;
gnomoFloresta.vantagemRaca.push(new VantagemRaca('Ilusionista Natural', 'Você conhece o truque ilusão menor. Inteligência é o seu atributo para lançar essa magia.'));
gnomoFloresta.vantagemRaca.push(new VantagemRaca('Falar com Pequenos Animais', 'Através de sons e gestos você pode comunicar ideias simples com animais Pequenos ou menores. Gnomos da floresta amam animais e muitas vezes mantêm esquilos, texugos, coelhos, toupeiras, pica-paus e outras criaturas como amados animais de estimação.'));

let gnomoRocha = new Gnomo();
gnomoRocha.nome = 'Gnomo das Rochas';
gnomoRocha.atributos.constituicao = 1;
gnomoRocha.vantagemRaca.push(new VantagemRaca('Conhecimento do Artífice. Sempre que você realizar um teste de Inteligência (História) relacionado à itens mágicos, objetos alquímicos ou dispositivos tecnológicos, você pode adicionar duas vezes seu bônus de proficiência, ao invés de qualquer bônus de proficiência que você normalmente aplicaria.'));
gnomoRocha.vantagemRaca.push(new VantagemRaca('Inventor. Você tem proficiência com ferramentas de artesão (ferramentas de funileiro). Usando estas ferramentas você pode gastar 1 hora e 10 po em materiais para construir um dispositivo mecânico Miúdo (CA 5, 1 pv). O dispositivo para de funcionar depois de 24 horas (a menos que você gaste mais 1 hora reparando-o para manter seu funcionamento), ou se você desmontá-lo usando uma ação e então recuperar os materiais usados para criá-lo. Você pode possuir até três desses dispositivos ativos ao mesmo tempo. Quando você criar seu dispositivo, escolha uma das seguintes opções:' +
    'Brinquedo Mecânico. Este brinquedo é um animal, monstro ou uma pessoa mecânica de dar corda, como um sapo, rato, pássaro, dragão ou soldado. Quando é posto no chão, o brinquedo se move 1,5 metros pelo chão em cada um de seus turnos uma direção aleatória. Ele faz os barulhos apropriados da criatura que ele representa.' +
    'Isqueiro. Este dispositivo produz uma chama minúscula e que você usá-la para acender uma vela, uma tocha ou uma fogueira. Usar esse dispositivo requer uma ação.' +
    'Caixa de Música. Quando aberta, esta caixa de música toca uma única música com um volume moderado. A caixa para de tocar quando chegar ao fim da música ou quando for fechada.'));



let pesLeves = new Halfling();
pesLeves.nome = 'Halfling Pes Leves';
pesLeves.atributos.carisma = 1;
pesLeves.vantagemRaca.push(new VantagemRaca('Furtividade Natural', 'Você pode tentar se esconder mesmo quando possuir apenas a cobertura de uma criatura que for no mínimo um tamanho maior que o seu.'));

let robustos = new Halfling();
pesLeves.nome = 'Halfling Rousto';
pesLeves.atributos.constituicao = 1;
pesLeves.vantagemRaca.push(new VantagemRaca('Resiliência dos Robustos', 'Você tem vantagem em testes de resistência contra veneno e tem resistência contra dano venenoso.'));


let humano = new Humano();
let meioElfo = new MeioElfo();
let meioOrc = new MeioOrc();
let tiefling = new Tiefling();

