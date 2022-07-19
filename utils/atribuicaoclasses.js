let tendencias = [
	new Tendencia(
		new Lealdade('Leal'),
		new Moralidade('Bom'),
		'é a tendência de criaturas que se pode contar para fazer o que é correto como é esperado pela sociedade. Dragões dourados, paladinos e muitos anões são leais e bondosos'
	),
	new Tendencia(
		new Lealdade('Neutro'),
		new Moralidade('Bom'),
		'é a tendência do povo que faz o melhor que pode para ajudar outros de acordo com suas necessidades. Muitos celestiais, alguns gigantes das nuvens, e grande parte dos gnomos são neutros e bondosos'
	),
	new Tendencia(
		new Lealdade('Caótico'),
		new Moralidade('Bom'),
		'é a tendência de criaturas que agem de acordo com sua própria consciência, se importando pouco com as expectativas dos outros. Dragões de cobre, muitos elfos e unicórnios são caóticos e bondosos'
	),
	new Tendencia(
		new Lealdade('Leal'),
		new Moralidade('Neutro'),
		'é a tendência dos indivíduos que agem de acordo com as leis, tradições ou códigos pessoais. Muitos monges e alguns magos são leais e neutros'
	),
	new Tendencia(
		new Lealdade('Neutro'),
		new Moralidade('Neutro'),
		'é a tendência daqueles que preferem manter distância de questões morais e não tomar partido, fazendo o que aparenta ser melhor conforme a situação. O povo lagarto, muitos druidas e diversos humanos são neutros'
	),
	new Tendencia(
		new Lealdade('Caótico'),
		new Moralidade('Neutro'),
		'é a tendência das criaturas que seguem seus caprichos, mantendo sua liberdade pessoal acima de tudo. Muitos bárbaros e ladinos, e alguns bardos, são caóticos e neutros'
	),
	new Tendencia(
		new Lealdade('Leal'),
		new Moralidade('Mau'),
		'é a tendência das criaturas que conseguem metodicamente tudo o que querem, dentro dos limites de uma tradição, lei ou ordem. Diabos, dragões azuis e hobgoblins são leais e malignos'
	),
	new Tendencia(
		new Lealdade('Neutro'),
		new Moralidade('Mau'),
		'é a tendência daqueles que farão tudo o que quiserem, sem compaixão ou remorso. Muitos drows, alguns gigantes das nuvens e yugoloths são neutros e malignos'
	),
	new Tendencia(
		new Lealdade('Caótico'),
		new Moralidade('Mau'),
		'é a tendência de criaturas que agem com violência arbitrária, estimulada por sua ganância, ódio ou sede de sangue. Demônios, dragões vermelhos e orcs são caóticos e malignos'
	)
];
let antecedentes = [
	new Antecedente(
	'ACÓLITO',
	'Você viveu a serviço de um templo de algum deus especifico ou de um panteão de deuses. Você age como um intermediário entre o reino divino e o reino dos mortais, realizando rituais e ofertando sacrifícios para conduzir cada vez mais pessoas a adorarem a divindade. Você não é necessariamente um clérigo – realizar ritos sagrados não é a mesma coisa que canalizar poder divino. Escolha um deus, um panteão de deuses ou outro ser quase divino entre aqueles descritos no apêndice B ou outro especificado pelo seu Mestre para detalhar a natureza do seu serviço religioso. Você foi um serviçal menor no templo, criado desde a infância para auxiliar os sacerdotes em ritos sagrados? Ou você foi um alto sacerdote que repentinamente sentiu o chamado para servir seu deus de uma maneira diferente? Talvez você foi o líder de um pequeno culto não associado a templo algum, ou mesmo uma seita secreta que servia a uma entidade demoníaca que agora você nega.',
	['Intuição', 'Religião'],
	['Dois à sua escolha'],
	['Um símbolo sagrado (um presente dado quando você entrou no templo)', 'um livro de preces ou uma roda de preces', '5 palitos de incenso', 'vestimentas', 'um conjunto de roupas comuns', 'uma algibeira contendo 15 peças de ouro'],
	'ABRIGO DOS FIÉIS Como um acólito, você detém o respeito daqueles que compartilham de sua fé, e você pode realizar cerimônias de sua divindade. Você e seus companheiros de aventura podem até receber cura e caridade de um templo, santuário ou outra posto de sua fé, embora devam fornecer quaisquer componentes materiais necessários para as magias. Aqueles que compartilham de sua religião vão garantir a você (mas apenas você), custeando um estilo de vida modesto. Você também pode possuir laços com um templo específico devotado a sua divindade ou panteão, e fixar residência nele. Pode ser o templo que você está acostumado a servir, se ainda tiver boas relações com ele, ou um templo no qual você encontrou um novo lar. Enquanto frequentar as redondezas desse templo, você pode solicitar os sacerdotes para assisti-lo, desde que essa assistência não seja de alguma forma perigosa e que você sempre esteja em uma boa relação com seu templo.',
	'Acólitos são moldados pela sua experiência em templos ou comunidades religiosas. Seu estudo da história e dogmas de sua fé, e sua relação com os templos, santuários ou hierarquias afetam seus maneirismos e ideais. Suas fraquezas podem ser uma hipocrisia oculta ou ideias hereges, ou um ideal ou vínculo visto como fanatismo.',
	[
		'Eu idolatro um herói particular da minha fé, e constantemente me refiro a seus feitos e exemplos.',
		'Eu consigo encontrar semelhanças mesmo entre os inimigos mais violentos, com empatia e sempre trabalhando pela paz.',
		'Eu vejo presságios em cada evento e ação.Os deuses estão falando conosco, nós apenas temos de ouvi-los.',
		'Nada pode abalar minha atitude otimista.',
		'Eu cito (corretamente ou não) textos sagrados e provérbios em quase qualquer situação.',
		'Eu sou tolerante (ou intolerante) a qualquer outra fé, e respeito (ou condeno) a adoração a outros deuses.',
		'Eu aprecio comida requintada, bebidas e a alta sociedade entre o alto escalão de meu templo. Minha vida dura me fornece isso.',
		'Eu passei tanto tempo no templo que possuo pouca prática em lidar com as pessoas mundo a fora'
	],
	[
		'Tradição. As tradições ancestrais de adoração e sacrifício devem ser preservadas e perpetradas.(Leal)',
		'Caridade. Eu sempre tento ajudar aqueles em necessidade, não importando o custo pessoal.(Bom)',
		'Mudança. Nós devemos ajudar a conduzir as mudanças que os deuses estão constantemente trabalhando para o mundo.(Caótico)',
		'Poder. Eu espero que um dia eu consiga chegar ao topo na hierarquia da minha religião.(Leal)',
		'Fé.Eu acredito que minha divindade guia minhas ações. Eu tenho fé que, se eu trabalhar duro, coisas boas acontecerão.(Leal)',
		'Aspiração. Eu busco ser digno da graça do meu deus ao corresponder minhas ações aos seus ensinamentos.(Qualquer)'
	],
	[
		'Eu morreria para recuperar uma relíquia ancestral de minha fé perdida há muito tempo.',
		'Eu ainda terei minha vingança contra o templo corrupto que me acusou de heresia.',
		'Eu devo minha vida ao sacerdote que me acolheu quando meus pais morreram.',
		'Tudo o que faço, faço pelo povo.',
		'Eu farei qualquer coisa para proteger o templo que sirvo.',
		'Eu busco guardar um texto sagrado que meus inimigos dizem ser herege e buscam destrui-lo.'
	],
	[
		'Eu julgo os outros severamente, e a mim mesmo mais ainda.',
		'Eu deposito muita confiança naqueles que detêm o poder na hierarquia de meu templo.',
		'Minha devoção às vezes me cega perante aqueles que professam a fé do meu deus.',
		'Meu pensamento é inflexível.',
		'Eu suspeito de estranhos e sempre espero o pior deles.',
		'Depois escolher um objetivo, eu fico obcecado em cumpri-lo, até mesmo em detrimento de qualquer outra coisa em minha vida.'
	]
),
new Antecedente(
	'ARTESÃO DE GUILDA',
	'Você é membro de uma guilda de artesãos, hábil em um ofício específico e com uma relação bem próximo com outros artesãos. Você é uma parte bem consolidada do mundo mercantil, liberto pelo talento e riqueza de uma ordem social feudal repressora. Você aprendeu suas habilidades como um aprendiz de um mestre artesão, sob o patrocínio de sua guilda, até se tornar um mestre por direito.',
	['Intuição', 'Persuasão'],
	['Um à sua escolha'],
	['Um conjunto de ferramentas de artesão (à sua escolha)', 'uma carta de apresentação da sua guilda', 'um conjunto de trajes de viajante e uma algibeira contendo 15 po.'],
	'NEGÓCIO DA GUILDA<br>' +
	'Guildas são geralmente encontradas em cidades grandes cidades o bastante para apoiar vários artesãos que praticam o mesmo ofício. Entretanto, sua guilda pode ser uma rede de artesãos livres, onde cada um trabalha em uma aldeia diferente dentro de um reino maior. Converse com seu Mestre para determinar a natureza de sua guilda. Você pode selecionar os negócios da sua guilda da tabela Negócios da Guilda ou jogar aleatoriamente. Como membro da sua guilda, você conhece as habilidades necessárias para criar itens acabados a partir das matérias primas (refletida na sua proficiência com um certo tipo de ferramentas de artesão), bem como os princípios do comércio e práticas de bons negócios. A questão agora é saber se você abandonou o seu comércio por aventura ou assumiu o esforço de se aventurar e comercializar ao mesmo tempo.<br>' +
	'MEMBRO DE GUILDA Como um membro consolidado e respeitado da guilda, você pode contar com alguns benefícios. Seus companheiros membros da guilda fornecerão a você hospedagem e alimentação se necessário, e pagarão por seu funeral se precisar. Em algumas vilas e cidades, o salão da guilda é um posto central para encontrar outros membros de sua profissão, e pode ser um bom lugar para encontrar consumidores potenciais, aliados ou prestadores de serviços.<br>' +
	'<br>' +
	'd20 Negócio da Guilda' + '<br>' +
	'1 Alquimistas e boticários' + '<br>' +
	'2 Armeiros, chaveiros e refinadores ' + '<br>' +
	'3 Calígrafos, escribas e escrivães ' + '<br>' +
	'4 Carpinteiros, instaladores de telhados e rebocadores ' + '<br>' +
	'5 Carpinteiros navais e construtores de velas para navios ' + '<br>' +
	'6 Cartógrafos, topógrafos e gráficos ' + '<br>' +
	'7 Ceramistas e oleiros ' + '<br>' +
	'8 Cervejeiros, destiladores e vinicultores ' + '<br>' +
	'9 Coureiros, esfoladores e curtidores de couro ' + '<br>' +
	'10 Cozinheiros e padeiros ' + '<br>' +
	'11 Entalhadores, tanoeiros, e fabricantes de arcos ' + '<br>' +
	'12 Fabricantes de carroças e fabricantes de rodas ' + '<br>' +
	'13 Fabricantes de vidro e vidraceiros ' + '<br>' +
	'14 Ferreiros e forjadores de metal ' + '<br>' +
	'15 Funileiros, latoeiros e folheiros ' + '<br>' +
	'16 Joalheiros e ourives ' + '<br>' +
	'17 Pedreiros e cortadores de pedras ' + '<br>' +
	'18 Pintores, decoradores e letristas ' + '<br>' +
	'19 Sapateiros ' + '<br>' +
	'20 Tecelões e tintureiros As guildas muitas vezes exercem um enorme poder político<br>' + '<br>' +
	'Se você for acusado de um crime, sua guilda irá apoiá-lo se houver um bom motivo para provar sua inocência ou se seu crime for justificável. Você também pode ter acesso a poderosas figuras políticas através da guilda, se você for um membro com boas posições. Tais ligações podem requerer doações de dinheiro ou itens mágicos para os cofres da guilda. Você deve pagar a quota de 5 po por mês para a guilda. Se você esquecer o pagamento, você deve repor o valor da dívida para permanecer nas boas graças da guilda.<br>',
	'Artesãos de guilda estão entre as pessoas mais comuns do mundo – até aposentarem suas ferramentas e assumirem uma carreira de aventuras. Eles entendem o valor do trabalho duro e da importância da comunidade, mas são vulneráveis aos pecados da ganância e da cobiça.',
	['Eu acredito que tudo que for feito, deve ser bem feito. Não vou negar – sou perfeccionista.',
		'Eu sou esnobe e menosprezo aqueles que não sabem apreciar uma boa arte.',
		'Eu sempre quero saber como as coisas funcionam e o que motiva as pessoas.',
		'Eu sou cheio de aforismos e tenho um provérbio para cada ocasião.',
		'Eu sou rude com pessoas que não tem compromisso com o trabalho duro e honesto.',
		'Eu gosto conversar muito sobre a minha profissão.',
		'Eu não me separo do meu dinheiro facilmente e irei pechinchar incansavelmente para conseguir o melhor negócio possível.',
		'Eu sou bem conhecido pelo meu trabalho e quero ter certeza que todo mundo o aprecia. Eu fico desconcertado quando as pessoas não ouviram falar de mim',
	],
	[
		'Comunidade. É dever de todos os povos civilizados fortalecer os laços da comunidade e a segurança da civilização.(Leal)',
		'Generosidade. Meus talentos foram dados a mim para que eu pudesse usá-los em benefício do mundo. (Bom)',
		'Liberdade. Todos devem ser livres para buscar o seu próprio sustento. (Caótico)',
		'Ganância. Eu estou nisso somente pelo dinheiro. (Mau)',
		'Povo. Eu sou comprometido com as pessoas que eu me preocupo, não com ideais. (Neutro)',
		'Aspiração. Esforço-me para ser o melhor no meu trabalho.',
	],
	[
		'A loja onde eu aprendi meu ofício é o lugar mais importante do mundo para mim.',
		'Eu fiz um grande trabalho para alguém, e então o achei indigno de recebê-lo. Ainda procuro por alguém digno.',
		'Devo muito à minha guilda por me forjar em quem sou hoje.',
		'Eu busco riqueza para conseguir o amor de alguém.',
		'Um dia eu retornarei a minha guilda e provarei que sou o melhor artesão de todos.',
		'Eu irei me vingar das forças malignas que destruíram meu local de trabalho e arruinaram a minha vida.',
	],
	[
		'Eu faço qualquer coisa para por as mãos em algo raro ou inestimável.',
		'Sou rápido em perceber que alguém está tentando me trapacear.',
		'Ninguém deve saber que um dia eu roubei dinheiro dos cofres da guilda.',
		'Eu nunca estou satisfeito com o que tenho – eu sempre quero mais.',
		'Eu mataria para adquirir um titulo de nobreza.',
		'Eu tenho ciúmes terríveis de qualquer pessoa que possa ofuscar minha obra. Aonde quer que eu vá, estou cercado de rivais.'
	]
),
new Antecedente(
	'ARTISTA',
	'Você se sobressai em frente a uma plateia. Você sabe como arrebatá-los, entretê-los e até inspirá-los. Suas poesias podem agitar os corações daqueles que o ouvem, despertar tristeza ou alegria, riso ou fúria. Sua música levanta seus espíritos ou capta sua tristeza. Seus passos de dança cativam, seu humor ofende. Qualquer que seja a técnica que você usa, sua arte é sua vida.',
	['Acrobacia', 'Atuação', 'Proficiências em Ferramentas: kit de disfarce, um tipo de instrumento musical'],
	'',
	['Um instrumento musical (à sua escolha)', 'um item de um admirador(a) (carta de amor, mecha de cabelo ou bugiganga)', 'uma algibeira contendo 15 po.'],
	'ROTINAS DO ARTISTA Um bom artista é versátil, apimentando cada apresentação com uma variedade de rotinas diferentes.<br>' +
	'Escolha entre uma e três rotinas ou jogue na tabela abaixo para definir sua experiência como artista..<br>' +
	'Rotina do Artista d10.<br>' +
	'1 Acrobata .<br>' +
	'2 Ator .<br>' +
	'3 Bobo da Corte .<br>' +
	'4 Cantor .<br>' +
	'5 Contador de Histórias .<br>' +
	'6 Dançarino .<br>' +
	'7 Engolidor de Fogo .<br>' +
	'8 Instrumentista .<br>' +
	'9 Malabarista .<br>' +
	'10 Poeta .<br>' +
	'PELA DEMANDA POPULAR Você pode sempre encontrar um lugar para se apresentar, geralmente em uma estalagem ou taverna, mas possivelmente em um circo, um teatro, ou mesmo em uma corte nobre. Em qualquer lugar, você recebe hospedagem e comida sem custo, em um padrão modesto ou confortável (dependendo da qualidade do estabelecimento), enquanto estiver se apresentando a cada noite. Além disso, sua atuação o torna uma espécie de figura local. Quando estranhos o reconhecem em uma cidade onde você se apresentou, eles normalmente começam a gostar de você.',
	'Artistas de sucesso têm que ser capaz de capturar e prender a atenção do público, então eles tendem a ter personalidades extravagantes ou contundentes. Eles são inclinados para o romantismo e muitas vezes se apegam aos ideais de mentes elevadas sobre a prática da arte e da apreciação da beleza.',
	[
		'Eu conheço uma história relevante para quase todas as situações.',
		'Sempre que venho a um lugar novo, coleciono rumores locais e espalho boatos.',
		'Eu sou um romântico incurável, sempre procurando por "alguém especial".',
		'Ninguém fica com raiva de mim ou ao meu redor por muito tempo, já que eu posso acalmar os ânimos.',
		'Eu adoro um bom insulto, mesmo um insulto que é dirigido a mim.',
		'Eu fico amargo quando não sou o centro das atenções.',
		'Eu não me contentarei com nada menos do que a perfeição.',
		'Eu mudo meu humor ou de ideia tão rápido quanto mudo uma nota em uma canção.',
	],
	['Beleza.Quando eu atuo, eu faço o mundo ser melhor. (Bom)',
		'Tradição.As histórias, lendas e canções do passado nunca serão esquecidas, pois elas nos ensinam a ser quem somos.(Leal)',
		'Criatividade.O mundo está necessitado de novas ideias e ações ousadas. (Caótico)',
		'Ganância.Eu estou nisso somente pelo dinheiro e pela fama. (Mau)',
		'Povo.Eu gosto de ver sorrisos nos rostos das pessoas quando atuo. Isso é tudo o que importa. (Neutro)',
		'Honestidade. A arte deve refletir a alma. Ela deve vir de dentro e revelar quem realmente somos. (Qualquer)'
	],
	['Meu instrumento é o meu bem mais precioso e ele me lembra de alguém que eu amo.',
		'Alguém roubou meu precioso instrumento e algum dia vou recuperá-lo.',
		'Eu quero ser famoso, custe o que custar.',
		'Eu idolatro um herói de lendas antigas e avalio meus atos pelos dessa pessoa.',
		'Eu farei qualquer coisa para provar minha superioridade sobre meu odiado rival.',
		'Eu farei qualquer coisa pelos outros membros da minha velha trupe.'
	], ['Eu farei qualquer coisa para ganhar fama e renome.',
	'Sou um otário quando o assunto é um rosto bonito.',
	'Um escândalo sempre me impede de voltar para casa. Esse tipo de problema parece me perseguir.',
	'Uma vez eu satirizei um nobre que ainda quer minha cabeça. Foi um erro que provavelmente vai se repetir.',
	'Eu tenho problemas para manter meus sentimentos verdadeiros ocultos. Minha língua afiada me mete em problemas.',
	'Apesar dos meus melhores esforços, eu não sou confiável para os meus amigos.']
),
new Antecedente(
	'CHARLATÃO',
	'Você sempre soube lidar com pessoas. Você sabe aquilo que os toca, você pode trazer à tona os desejos de seus corações após alguns minutos de conversa, e com algumas perguntas-chave você pode lê-los como se fossem livros infantis. É um talento útil e que você está perfeitamente disposto a usar para sua vantagem. Você sabe o que as pessoas querem e você entrega, ou melhor, você promete entregar. O bom senso diz às pessoas para ficar longe das coisas que parecem boas demais para ser verdade, mas esse bom senso parece estar em falta quando você está por perto. A garrafa com líquido rosa certamente vai curar esse furúnculo inconveniente, esta pomada – nada mais do que um pouco de gordura com uma pitada de pó de prata – pode restaurar a juventude e o vigor, e há uma ponte na cidade que, de repente, está à venda. Essas maravilhas soam improváveis, mas você as faz soar como um negócio real.',
	['Enganação', 'Prestidigitação', 'Ferramentas: kit de disfarce, kit de falsificação'],
	'',
	['Um conjunto de roupas finas', 'um kit de disfarce', 'ferramentas para enganação à sua escolha (dez garrafas com líquidos coloridos fechadas com rolha, um conjunto de dados viciados, um baralho de cartas marcadas ou um anel de sinete de um duque imaginário)', 'uma algibeira contendo 15 po'],
	'ESQUEMAS FAVORITOS Cada charlatão tem um esquema preferido<br>' +
	'Escolha uma farsa favorita ou jogue na tabela abaixo.<br>' +
	'd6 Esquema<br>' +
	'1 Eu trapaceio em jogos de azar.<br>' +
	'2 Eu raspo moedas ou forjo documentos.<br>' +
	'3 Eu entro na vida dos outros para atacar suas fraquezas e roubar suas fortunas.<br>' +
	'4 Eu uso novas identidades, como roupas.<br>' +
	'5 Eu faço jogos de prestidigitação nas esquinas da cidade.<br>' +
	'6 Eu convenço as pessoas que qualquer lixo inútil é mais valioso que seu dinheiro suado.<br>' +
	'CARACTERÍSTICA	 IDENTIDADE FALSA Você criou uma segunda identidade que inclui documentos, conhecimentos estabelecidos e disfarces que permitem você assumir a vida dessa pessoa. Além disso, você pode forjar documentos como papéis oficiais e cartas pessoais, desde que você tenha visto um exemplar deste tipo de documento ou a caligrafia que você está tentando copiar.<br>',
	'CARACTERÍSTICAS SUGERIDAS	Charlatães são personagens pitorescos que escondem seu eu verdadeiro atrás das máscaras que constroem. Eles refletem o que as pessoas querem ver, o que elas querem acreditar e como elas veem o mundo. Mas o seu verdadeiro ser é, muitas vezes, atormentados por uma consciência inquieta, um velho inimigo, ou problemas profundos de confiança.',
	['Eu me apaixono e desapaixono facilmente, e estou sempre buscando alguém.',
		'Eu tenho uma piada para cada ocasião, especialmente ocasiões onde o humor é inapropriado.',
		'Elogiar é o meu truque preferido para conseguir o que eu quero.',
		'Eu sou um jogador nato que não consegue resistir a se arriscar por uma recompensa em potencial.',
		'Eu minto sobre quase tudo, mesmo quando não há uma boa razão para isso.',
		'Sarcasmo e insultos são as armas que escolho.',
		'Eu possuo vários símbolos sagrados e invoco qualquer divindade que venha a ser útil em algum momento.',
		'Eu embolso qualquer coisa que eu vejo que pode ter algum valor.'],
	['Independência. Eu sou um espirito livre – ninguém me diz o que fazer. (Caótico)',
		'Equidade. Eu nunca tenho como alvo pessoas que não podem perder algumas moedas.(Leal)',
		'Caridade. Eu distribuo o dinheiro que adquiri com pessoas que realmente precisam. (Bom)',
		'Criatividade. Eu nunca uso o mesmo golpe duas vezes. (Caótico)',
		'Amizade. Bens materiais vêm e vão. Laços de amizades duram para sempre. (Bom)',
		'Aspiração. Eu sou determinado a me tornar alguém melhor. (Qualquer)'],
	['Eu enganei a pessoa errada e tenho que trabalhar para que essa pessoa nunca cruze o meu caminho ou o caminho daqueles que eu me preocupo.',
		'Eu devo tudo ao meu mentor – uma pessoa horrível que provavelmente está apodrecendo em uma prisão qualquer.',
		'Em algum lugar, eu tenho um filho que não me conhece.Eu estou tornando o mundo melhor para ele ou ela.',
		'Eu venho de uma família nobre, e um dia eu vou recuperar minhas terras e meu titulo daqueles que os roubaram de mim.',
		'Uma pessoa poderosa matou alguém que eu amo. Um dia, em breve, terei minha vingança.',
		'Eu enganei e arruinei uma pessoa que não merecia. Eu busco reparar meus erros, mas nunca serei capaz de me perdoar.'],
	['Eu não resisto a um rosto bonito.',
		'Eu estou sempre endividado. Eu gasto meu dinheiro ilícito em luxúria decadente mais rápido do que eu consigo obter.',
		'Eu estou convencido de que ninguém pode me enganar da mesma maneira que eu engano os outros.',
		'Sou muito ganancioso para o meu próprio bem. Não resisto em correr riscos quando há dinheiro envolvido.',
		'Eu não resisto em golpear pessoas mais poderosas do que eu.',
		'Eu odeio admitir e odiarei a mim mesmo por isso, mas eu vou correr para proteger minha pele se as coisas ficarem difíceis.']
),
new Antecedente(
	'CRIMINOSO',
	'Você é um criminoso experiente com um histórico de contravenções. Você gastou um bom tempo entre outros criminosos e ainda mantém contato com eles e com o submundo do crime. Você está mais perto do que a maioria do submundo do assassinato, roubo e violência que prevalece no ventre da sociedade, e você sobreviveu até esse ponto desprezando a lei e os regulamentos da sociedade.',
	['Enganação', 'Furtividade', 'Ferramentas: Um tipo de kit de jogo, ferramentas de ladrão'],
	'',
	['Um pé de cabra', 'um conjunto de roupas escuras comuns com capuz', 'uma algibeira contendo 15 po'],
	'CRIMINOSA Existem vários tipos de criminosos, e dentro de uma guilda de ladrões ou outra organização criminosa, cada membro possui sua especialidade. Mesmo os criminosos que operam fora de tais organizações têm fortes preferências por certos tipos de crimes sobre os outros. Escolha um papel que você assumiu durante sua vida como criminoso, ou jogue na tabela abaixo.' +
	'd8 Especialidade ' +
	'1 Chantagista ' +
	'2 Assaltante ' +
	'3 Executor ' +
	'4 Receptador ' +
	'5 Ladrão de Estrada ' +
	'6 Assassino de Aluguel ' +
	'7 Batedor de Carteiras ' +
	'8 Contrabandista ' +
	'CARACTERÍSTICA	 CONTATO CRIMINAL Você possui contatos de confiança que agem como seus informantes em uma rede criminosa.' +
	'Você sabe como se comunicar com eles mesmo em grandes distâncias.' +
	'Você conhece em especial os mensageiros locais, mestres de caravana corruptos, e marinheiros escusos que podem transmitir seus recados.',
	'CARACTERÍSTICAS SUGERIDAS	Criminosos parecem ser vilões por fora, e muitos deles são vilões por dentro também.' +
	'Mas alguns possuem características simpáticas, senão redentoras.' +
	'Pode sim haver honra entre ladrões, mas criminosos raramente mostram qualquer respeito pela lei ou autoridade.',
	['Eu sempre tenho um plano pra quando as coisas dão errado.',
		'Eu estou sempre calmo, não importa a situação. Eu nunca levanto minha voz ou deixo minhas emoções me controlarem.',
		'A primeira coisa que faço ao chegar a um novo local é decorar a localização de coisas valiosas – ou onde essas coisa podem estar escondidas.',
		'Eu prefiro fazer um novo amigo a um novo inimigo.',
		'Eu sou incrivelmente receoso em confiar. Aqueles que parecem mais amigáveis geralmente têm mais a esconder.',
		'Eu não presto atenção aos riscos envolvidos em uma situação, nunca me alerte sobre as probabilidades de fracasso.',
		'A melhor maneira de me levar a fazer algo é dizendo que eu não posso fazer.',
		'Eu explodo ao menor insulto.'],
	['Honra. Eu não roubo de irmãos de profissão.(Leal)',
		'Liberdade. Correntes foram feitas para serem partidas, assim como aqueles que as forjaram. (Caótico)',
		'Caridade. Eu roubo dos ricos para dar aos que realmente precisam. (Bom)',
		'Ganância. Eu farei qualquer coisa para me tornar rico. (Mal) ',
		'Povo. Eu sou leal aos meus amigos, não a qualquer ideal, e todos sabem que posso viajar até o Estige por aqueles que me são caros. (Neutro)',
		'Redenção. Há uma centelha de bondade em todo mundo. (Bom)'],
	['Eu estou tentando quitar uma divida que tenho com um generoso benfeitor.',
		'Meus ganhos, honestos ou não, são para sustentar minha família.',
		'Algo importante foi roubado de mim, e eu vou recuperá-lo.',
		'Eu me tornarei o maior ladrão que já existiu.',
		'Eu sou culpado de um terrível crime, espero algum dia poder me redimir.',
		'Alguém que amo morreu por causa de um erro que cometi. Isso nunca acontecerá novamente.'],
	['Quando vejo algo valioso, não consigo pensar em mais nada, além de roubá-lo.',
		'Quando confrontado com uma escolha entre dinheiro e amigo, eu bem que escolho o dinheiro.',
		'Se há um plano, eu vou esquecê-lo. Se eu não esquecê-lo, vou ignorá-lo.',
		'Eu tenho um "tique" que revela se estou mentindo.',
		'Eu viro as costas e corro quando as coisas começam a ficar ruins.',
		'Um inocente foi preso por um crime que eu cometi. Por mim tudo bem.'],
),
new Antecedente(
	'EREMITA',
	[
		'Você viveu em reclusão – ou em uma comunidade protegida como um mosteiro, ou totalmente sozinho – por uma parte importante de sua vida.',
		'Durante seu tempo afastado do clamor da sociedade, você encontrou silêncio, solidão e talvez algumas das respostas que você procurava.'
	],
	[
		'Medicina', 'Religião', 'Proficiências em Ferramentas: kit de herbalismo'
	],
	['Um à sua escolha'],
	['Um porta pergaminho recheado de notas de seus estudos ou preces', 'um cobertor de inverno', 'um conjunto de roupas comuns', 'kit de herbalismo', '5 po'],
	'VIDA DE RECLUSÃO Qual foi a razão do seu isolamento e o que mudou para permitir que você acabasse com a vida na solidão? Você pode conversar com seu Mestre para determinar a exata natureza de sua reclusão, ou você pode escolher ou jogar na tabela abaixo para determinar a razão por trás de sua reclusão.' +
	'd8 Vida de Reclusão' +
	'1 Eu estava a procura de iluminação espiritual.' +
	'2 Eu estava participando da vida em comunidade de acordo com os ditames da ordem religiosa.' +
	'3 Eu estava exilado por um crime que não cometi.' +
	'4 Eu me retirei da sociedade depois que um evento alterou a minha vida.' +
	'5 Eu precisava de um lugar tranquilo para trabalhar em minha arte, literatura, música ou manifesto.' +
	'6 Eu precisava comungar com a natureza, longe da civilização.' +
	'7 Eu era o protetor de uma antiga ruína ou relíquia.' +
	'8 Eu era um peregrino em busca de uma pessoa, lugar ou relíquia de significado espiritual.<br>' +
	'DESCOBERTA A reclusão tranquila de seu exílio estendido deu a você acesso a uma descoberta única e poderosa.<br>' +
	'A exata natureza dessa revelação depende da natureza de sua reclusão.<br>' +
	'Pode ser uma grande verdade sobre o cosmos, os deuses, os poderosos seres dos planos exteriores, ou as forças da natureza.<br>' +
	'Pode ser uma situação que ninguém tenha visto antes.<br>' +
	'Você pode ter descoberto um fato há muito tempo esquecido, ou desenterrado uma relíquia do passado que poderia reescrever a história.<br>' +
	'Pode ser uma informação que seria prejudicial às pessoas que levaram você ao exílio, e daí a razão do seu retorno à sociedade.<br>' +
	'Converse com seu Mestre para determinar os detalhes da sua descoberta e seu impacto na campanha.<br>',
	'Alguns eremitas estão bem adaptados a uma vida de reclusão, enquanto outros se irritam contra ela e anseiam por companhia.<br>' +
	'Mesmo que eles abracem a solidão ou anseiem escapar dela, a vida solitária molda suas atitudes e ideais.<br>' +
	'Alguns são levemente levados à loucura por seus anos a parte da sociedade.',
	[
		'Eu estive isolado por tanto tempo que raramente falo, preferindo gestos e grunhidos ocasionais.',
		'Eu sou absolutamente sereno, mesmo em face ao desastre.',
		'O líder da minha comunidade tinha algo sábio a dizer sobre cada tópico, e eu estou ansioso para compartilhar essa sabedoria.',
		'Eu sinto uma enorme empatia pelos que sofrem.',
		'Eu sou alheio à etiqueta e expectativas sociais.',
		'Eu conecto tudo o que me acontece a um grande plano cósmico.',
		'Eu muitas vezes me perco em meus próprios pensamentos e contemplação, tornando-me alheio ao que me cerca.',
		'Eu estou trabalhando em uma grande teoria filosófica e amo compartilhar minhas ideias.'
	],
	[
		'Bem Maior. Meus dons são feitos para serem compartilhados com todos, não para serem usados em meu próprio benefício. (Bom)',
		'Lógica. Emoções não devem nublar nossos sentidos do que é certo e verdadeiro, ou o nosso pensamento lógico.(Leal)',
		'Pensamento Livre. Questionamento e curiosidade são os pilares do progresso. (Caótico)',
		'Poder. Solidão e contemplação são caminhos que levam ao poder místico ou mágico. (Mau)',
		'Viva e Deixe Viver. Se intrometer nos assuntos dos outros só traz problema. (Neutro)',
		'Autoconhecimento.Se você conhece a si mesmo, não há mais nada para conhecer. (Qualquer)'
	],
	[
		'Nada é mais importante do que os outros membros do meu convento, ordem ou associação.',
		'Eu entrei em reclusão para me esconder daqueles que podem ainda estar me caçando. Devo um dia enfrentá-los.',
		'Eu ainda estou procurando a iluminação que eu persegui em minha reclusão, e eu ainda não encontrei.',
		'Eu entrei em reclusão porque amei alguém que não poderia ter.',
		'Se a minha descoberta for revelada, ela poderá trazer ruína ao mundo.',
		'Meu isolamento me deu grande saber sobre um grande mal que somente eu posso destruir.'
	],
	[
		'Agora que eu retornei ao mundo, eu aproveito um pouco mais os seus prazeres.',
		'Eu abrigo pensamentos sombrios e sanguinários que o isolamento e meditação não conseguiram conter.',
		'Eu sou dogmático em meus pensamentos e filosofia.',
		'Eu deixo minha necessidade de vencer argumentos ofuscar amizades e harmonia.',
		'Eu arrisco muito para descobrir um pedacinho do conhecimento perdido.',
		'Eu gosto de guardar segredos e não os compartilho com ninguém.'
	]
),
new Antecedente(
	'FORASTEIRO',
	'Você cresceu nos ermos, longe da civilização e do conforto da cidade e da tecnologia. Você já testemunhou a migração de rebanhos maiores que florestas, sobreviveu a climas mais extremos do que qualquer morador de cidade possa imaginar e gostou da solidão de ser a única criatura pensante por quilômetros em qualquer direção. Os ermos estão no seu sangue, como se você fosse um nômade, um explorador, um recluso, um caçadorcoletor, ou mesmo um saqueador. Mesmo nos lugares onde você não conhece as características específicas do terreno, você conhece os caminhos do mundo selvagem.',
	['Atletismo', 'Sobrevivência', 'Ferramentas: Um tipo de instrumento musical'],
	['Um à sua escolha'],
	['Um cajado', 'uma armadilha de caça', 'um troféu de um animal que você matou', 'um conjunto de trajes de viajante', 'uma algibeira com 10 po.'],
	'ORIGEM Você já esteve em lugares estranhos e viu coisas que os outros não conseguem entender.' +
	'Considere algumas das terras que você visitou, e como elas impactaram você.' +
	'Você pode jogar na tabela abaixo para determinar sua ocupação durante seu tempo vivendo no mundo selvagem, ou escolher uma que melhor se adapte a sua personalidade.' +
	'd10 Origem ' +
	'1 Armadilheiro' +
	'2 Caçador - coletor' +
	'3 Caçador de recompensas' +
	'4 Coletor ' +
	'5 Exilado ou pária' +
	'6 Guarda florestal ' +
	'7 Guia ' +
	'8 Nômade tribal ' +
	'9 Peregrino ' +
	'10 Saqueador tribal' +
	'CARACTERÍSTICA	 ANDARILHO Você possui uma excelente memória para mapas e geografia, e sempre consegue recordar as características gerais de um terreno, aldeias e outras coisas ao redor.' +
	'Além disso, você pode encontrar comida e água fresca para si mesmo e até cinco outras pessoas por dia, desde que a região ofereça frutas, caça de pequeno porte, água e assim por diante.',
	'CARACTERÍSTICAS SUGERIDAS	Muitas vezes considerado rude e grosseiro entre as pessoas civilizadas, forasteiros têm pouco respeito pelos maneirismos da vida nas cidades.' +
	'Os laços de tribo, clã, família e o mundo natural de que eles fazem parte são os laços mais importantes para a maioria dos forasteiros.',
	[
		'Eu sou impulsionado por um desejo de viajar que me levou para longe de casa.',
		'Eu vejo meus amigos como se eles fossem uma ninhada de filhotes recém-nascidos.',
		'Uma vez eu corri 40 km sem parar para avisar ao meu clã da aproximação de uma horda de orcs. Eu faria tudo de novo se precisasse.',
		'Eu tenho uma lição para cada situação, elaborada na observação da natureza.',
		'Eu não dou valor a pessoas ricas ou bemeducadas. Dinheiro e boas maneiras não irão salvá-lo de um urso-coruja faminto.',
		'Eu estou sempre atirando as coisas pra cima, brincando com elas distraidamente, e às vezes quebrando-as acidentalmente.',
		'Eu me sinto muito mais confortável ao redor de animais do que de pessoas.',
		'Na verdade, eu fui criado por lobos.'
	],
	[
		'Mudança. A vida é como as estações do ano, em constante mudança, e nós devemos mudar com ela. (Caótico)',
		'Bem Maior. É responsabilidade de cada pessoa trazer o máximo de alegria à tribo. (Bom)',
		'Honra. eu me desonrar, eu desonro meu clã inteiro.(Leal)',
		'Poder. O destino dos fortes é governar. (Mau)',
		'Natureza. O mundo natural é mais importante do que todas as construções da civilização. (Neutro)',
		'Glória. Eu preciso ganhar a glória em batalha, para mim e para meu clã. (Qualquer)'
	],
	[
		'Minha família, clã ou tribo é a coisa mais importante da minha vida, mesmo quando eles estão longe de mim.',
		'Um ferimento na natureza intocada do meu lar é um ferimento em mim.',
		'Eu trarei uma terrível ira sobre os malfeitores que destruíram a minha terra natal.',
		'Eu sou o último da minha tribo, e cabe a mim garantir que os nomes deles virem lenda.',
		'Eu sofro visões terríveis de um desastre que está por vir e farei qualquer coisa para evitá-lo.',
		'É o meu dever prover crianças para sustentar minha tribo.'
	],
	[
		'Eu sou muito apaixonado por cerveja, vinho e outras bebidas alcoólicas.',
		'Não há espaço para precaução em uma vida vivida ao máximo.',
		'Eu me lembro de cada insulto que recebi e nutro um ressentimento silencioso em relação a qualquer um que já tenha me ofendido.',
		'Eu sou lento para confiar nas pessoas de outras raças, tribos e sociedades.',
		'Violência é a minha reposta para quase todos os desafios.',
		'Não espere que eu salve aqueles que não podem se salvar. É o caminho da natureza que o mais forte prospere e o mais fraco pereça.'
	]

),
new Antecedente(
	'HERÓI DO POVO',
	'Você veio de uma parcela humilde da sociedade, mas está destinado a muito mais. O povo de sua vila já o reconhece como campeão, e seu destino conduz você a batalhas contra tiranos e monstros que ameaçam o povo aonde quer que você vá.',
	['Adestrar Animais', 'Sobrevivência', 'Ferramentas: Um tipo de ferramentas de artesão', 'veículos(terrestres)'],
	[],
	['Um conjunto de ferramentas de artesão(um a sua escolha)', 'uma pá', 'um pote de ferro', 'um conjunto de roupas comuns', 'uma algibeira contendo 10 po'],
	'EVENTO DEFINIDOR Você possuía uma simples profissão entre os camponeses, talvez um fazendeiro, mineiro, serviçal, pastor, lenhador ou até mesmo coveiro.' +
	'Mas algo aconteceu e o colocou em um caminho diferente, marcando - o para grandes feitos.' +
	'Escolha aleatoriamente o evento que definiu você como o herói do povo.' +
	'd10 Evento Definidor' +
	'1 Eu me levantei contra agentes de um tirano.' +
	'2 Eu salvei pessoas durante um desastre natural.' +
	'3 Eu enfrentei sozinho um terrível monstro.' +
	'4 Eu roubei de um mercador corrupto para ajudar os pobres.' +
	'5 Eu liderei uma milícia na batalha contra um exército.' +
	'6 Eu invadi o castelo de um tirano e roubei armas para entregar ao povo.' +
	'7 Eu treinei os camponeses no uso de ferramentas agrícolas como armas para enfrentar soldados de um tirano.' +
	'8 Um lorde rescindiu um decreto que desfavorecia o povo após eu protestar contra ele.' +
	'9 Um ser celestial, feérico, ou similar, deu - me uma benção ou revelou minha origem secreta.' +
	'10 Recrutado para o exército de um lorde, eu prevaleci na liderança e fui contemplado por heroísmo.' +
	'CARACTERÍSTICA	 HOSPITALIDADE RÚSTICA Já que você ascendeu da categoria de pessoas comuns até onde você está agora, é fácil se misturar a eles.' +
	'Você pode encontrar lugar entre os camponeses para se esconder, descansar ou se recuperar, a menos que isso ofereça um risco direto a eles.' +
	'Eles o esconderão da lei e de qualquer um que venha perguntando por você, desde que não tenham que arriscar suas vidas.',
	'CARACTERÍSTICAS SUGERIDAS	Um herói do povo é só mais de uma pessoa comum, pra melhor ou pra pior. Muitos olham para suas origens humildes como uma virtude, não uma deficiência, e seus lares e comunidades permanecem muito importantes para eles.',
	[
		'Eu julgo as pessoas por suas ações, não por suas palavras.',
		'Se alguém está em apuros, eu estou sempre pronto para ajudar.',
		'Quando eu fixo minha mente em algo, eu sigo esse caminho, não importa o que fique no percurso.',
		'Eu possuo um forte senso de justiça e sempre tento encontrar a solução mais equânime para os argumentos.',
		'Eu confio em minhas habilidades e farei o que for necessário para que os outros confiem também.',
		'Pensar é para os outros, eu prefiro agir.',
		'Eu abuso de palavras longas na tentativa de soar inteligente.',
		'Eu me entedio fácil. Pra onde devo ir para me encontrar com meu destino?  '
	],
	[
		'Respeito.As pessoas merecem ser tratadas com dignidade e respeito. (Bom)',
		'Justiça. Ninguém merece tratamento preferencial perante a lei, muito menos estar acima dela.(Leal)',
		'Liberdade. Não pode haver permissão para tiranos oprimirem o povo. (Caótico)',
		'Força. Se eu ficar forte, eu posso pegar tudo o que eu quiser – o que eu desejar. (Mal) ',
		'Sinceridade. Não há nada de bom em fingir ser algo que não sou. (Neutro)',
		'Destino. Nada, nem ninguém, pode me manter longe do meu chamado. (Qualquer)'
	],
	[
		'Eu tenho família, embora não faça a mínima ideia de onde eles estão, espero encontrá-los um dia.',
		'Eu trabalho a terra, eu amo a terra e eu vou defender a terra.',
		'Um nobre orgulhoso me deu uma bela surra, e eu vou ter minha vingança em qualquer valentão que encontrar.',
		'Minhas ferramentas são símbolo de minha vida passada, eu as carregarei para nunca me esquecer de minhas origens.',
		'Eu devo proteger aqueles que não podem se defender.',
		'Eu desejo que meu amor de infância venha comigo para que eu possa buscar meu destino.'
	],
	[
		'O tirano que comanda minha terra não vai parar até ver meu cadáver.',
		'Eu estou convencido sobre o significado do meu destino, e cego aos riscos e falhas.',
		'As pessoas que me conhecem desde criança sabem de um vergonhoso segredo meu, eu não poderei voltar para casa nunca.',
		'Eu tenho uma fraqueza pelos vícios da cidade, especialmente a bebedeira.',
		'Secretamente, eu acredito que as coisas estariam melhores se algum tirano comandasse a região.',
		'Eu tenho dificuldades em confiar em meus aliados.'
	]

),
new Antecedente(
	'MARINHEIRO',
	'Você navegou em uma embarcação por anos. Nesse tempo você enfrentou poderosas tempestades, monstros das profundezas e aqueles que queriam afundar sua embarcação para a profundidade sem fim. Seu primeiro amor é a linha distante do horizonte, mas chegou a hora de tentar algo novo. Discuta a natureza do navio que você navegou anteriormente com seu Mestre. Era um navio mercante, uma embarcação de carga, um navio de descoberta ou um navio pirata ? Quão famoso(ou abominável) você é ? Essa fama é amplamente conhecida ? Você ainda está navegando, ou sente saudades do mar e acha - se perdido ? Quais eram as suas funções a bordo – contramestre, capitão, navegador, cozinheiro, ou outra posição ? Quem era o capitão e o primeiro imediato ? Você deixou o navio de bom grado com seus companheiros, ou fugiu?',
	['Atletismo', 'Percepção', 'Proficiências em Ferramentas: Ferramentas de navegador', 'veículos(aquático)'],
	[],
	['Uma malagueta-Pino de madeira ou de metal que se prende na roda do leme(clava)', '15 metros de corda de seda', 'um amuleto da sorte como um pé de coelho ou uma pequena moeda com um buraco no meio(ou você pode jogar uma bugiganga aleatória na tabela Bugigangas no capítulo 5)', 'um conjunto de trajes comuns', 'uma algibeira com 10 po'],
	'HABILIDADE: PASSAGEM DE NAVIO Quando precisar, você pode garantir passagem sem custo em um veleiro para você e seus companheiros de aventura.' +
	'Você pode navegar a bordo do navio que você serviu, ou outro navio que você tenha boas relações(talvez um capitaneado por um excompanheiro de tripulação).' +
	'Como você está pedindo um favor, você não pode ter certeza que a programação ou a rota irá atender suas necessidades.' +
	'Seu Mestre vai determinar quanto tempo levará para chegar onde você precisa ir.' +
	'Em troca da sua passagem, é esperado que você e seus companheiros ajudem a tripulação durante a viagem.',
	'CARACTERÍSTICAS SUGERIDAS	Marinheiros podem ser muito durões, mas as responsabilidades da vida em um navio fazem deles geralmente bastante confiáveis. A vida a bordo de um navio molda a sua visão e as suas ligações mais importantes.',
	[
		'Meus amigos sabem que podem confiar em mim, não importa o quê.',
		'Eu trabalho duro, mas depois do trabalho terminado, me divirto na mesma medida.',
		'Eu gosto de velejar para novos portos e fazer novos amigos sobre um garrafão de cerveja.',
		'Eu aumento a verdade para o bem de uma boa história.',
		'Para mim, uma briga de taverna é uma boa forma de conhecer uma nova cidade.',
		'Eu nunca deixo passar uma aposta amigável.',
		'Minha linguagem é tão suja quanto o ninho de um otyugh.',
		'Eu gosto de um trabalho bem feito, especialmente se eu conseguir convencer alguém a fazê-lo.'
	],
	[
		'Respeito. A única coisa que mantém um navio unido é o respeito mútuo entre o capitão e a tripulação. (Bom)',
		'Justiça. Todos nós fazemos o trabalho, então todos nós compartilhamos as recompensas.(Leal)',
		'Liberdade. O mar é livre – a liberdade de ir a qualquer lugar e fazer qualquer coisa. (Caótico)',
		'Maestria. Eu sou um predador, e os outros navios no mar são minhas presas. (Mau)',
		'Povo. Eu sou comprometido com os meus companheiros de tripulação, não com ideais. (Neutro)',
		'Aspiração. Algum dia eu vou ter meu próprio navio e moldarei meu próprio destino. (Qualquer)'
	],
	[
		'Eu sou leal ao meu capitão em primeiro lugar, todo o resto em segundo.',
		'O navio é mais importante – tripulações e capitães veem e vão.',
		'Eu sempre lembrarei do meu primeiro navio.',
		'Em uma cidade portuária, eu tenho uma amante cujos olhos quase me roubaram do mar.',
		'Eu fui roubado de minha parte justa nos espólios, e pretendo conseguir o que é meu.',
		'Piratas implacáveis assassinaram meu capitão e tripulantes, saquearam nosso navio e me deixaram para morrer. A vingança será minha.'
	],
	[
		'Eu sigo ordens, mesmo se achar que elas estão erradas.',
		'Eu direi qualquer coisa para evitar ter que fazer trabalho extra.',
		'Se alguém questiona minha coragem, eu não volto atrás, não importa quão perigosa seja a situação.',
		'Depois que eu começo a beber, é difícil parar.',
		'Eu até tento, mas bolsos furados cheio de moedas e bugigangas sempre ficam no meu caminho.',
		'Meu orgulho provavelmente vai levar a minha destruição.'
	]

),
new Antecedente(
	'MENINO DE RUA',
	'Você cresceu nas ruas, sozinho, órfão e pobre. Você não tinha ninguém para cuidar e olhar por você, então aprendeu a se virar sozinho. Você lutou ferozmente por alimento e mantinha uma vigília constante nas outras almas desesperadas que poderiam roubá - lo. Você dormia nos telhados e becos, exposto aos elementos, e suportou doenças sem a vantagem de remédios ou lugares de recuperação. Você sobreviveu, apesar de todas as dificuldades, e o fez através da astúcia, força, velocidade, ou uma combinação de cada. Você começa a sua carreira de aventuras com dinheiro suficiente para viver modestamente, mas de forma segura por pelo menos dez dias. Como você conseguiu esse dinheiro ? O que o permitiu a libertar - se das circunstâncias desesperadoras e embarcar em uma vida melhor?',
	['Prestidigitação', 'Furtividade', 'Proficiências em Ferramentas: Um kit de disfarces', 'ferramentas de ladrão'],
	[],
	['Uma pequena faca', 'um mapa da cidade onde você cresceu', 'um rato de estimação', 'um símbolo para lembrar seus pais', 'um conjunto de roupas comuns', 'uma algibeira com 10 po'],
	'CARACTERÍSTICA	 SEGREDOS DA CIDADE Você conhece os padrões secretos e o fluxo das cidades e pode encontrar passagens no meio da imensidão urbana onde os outros se perderiam.' +
	'Quando você não está em combate, você(e os companheiros que você liderar) pode viajar entre quaisquer duas localidades na cidade duas vezes mais rápido que sua movimentação normalmente permitiria.',
	'CARACTERÍSTICAS SUGERIDAS	Moradores de rua são moldados por uma vida de pobreza, para o bem e para o mal.' +
	'Eles tendem a ser motivados por um compromisso com as pessoas com quem partilham a vida na rua ou por um desejo ardente de ter uma vida melhor – e talvez buscar uma retribuição de todas as pessoas ricas que o maltrataram.',
	[
		'Eu escondo restos de comida e bugigangas nos meus bolsos.',
		'Eu faço um monte de perguntas.',
		'Eu gosto de me espremer em lugares pequenos onde ninguém pode me pegar.',
		'Eu durmo de costas para uma parede ou uma árvore, com tudo o que eu possuo embrulhado em um pacote entre meus braços.',
		'Eu como feito um porco e tenho maus modos.',
		'Eu acho que alguém que é bom pra mim está escondendo más intenções.',
		'Eu não gosto de tomar banho.',
		'Eu digo sem rodeios o que outras pessoas estão insinuando ou escondendo.'
	],
	[
		'Respeito. Todas as pessoas, ricas ou pobres, merecem respeito. (Bom)',
		'Comunidade. Nós temos que cuidar uns dos outros, porque ninguém mais irá fazê-lo.(Leal)',
		'Mudança. Os de baixo se erguerão, e os de cima e os poderosos serão derrubados. A mudança é a natureza das coisas. (Caótico)',
		'Retribuição. Deve-se mostrar ao rico como é a vida e a morte na sarjeta. (Mau)',
		'Povo. Eu ajudo as pessoas que me ajudam – isso é o que nos mantém vivos. (Neutro)',
		'Aspiração. Eu vou provar que sou digno de uma vida melhor.'
	],
	[
		'Minha vila ou cidade é o meu lar, e vou lutar para defendê-la.',
		'Eu patrocino um orfanato para evitar que outros enfrentem o que eu fui forçado a enfrentar.',
		'Eu devo minha sobrevivência a outros moradores de rua que me ensinaram como viver nas ruas.',
		'Eu tenho uma dívida que nunca conseguirei pagar com a pessoa que teve piedade de mim.',
		'Eu escapei da minha vida de pobreza roubando uma pessoa importante, e sou procurado por isso.',
		'Ninguém mais terá que enfrentar as dificuldades que eu passei.'
	],
	[
		'Se eu estiver em desvantagem, vou fugir da luta.',
		'Ouro é muito dinheiro para mim, e eu farei qualquer coisa por mais ouro.',
		'Eu nunca vou confiar plenamente em alguém além de mim.',
		'Eu prefiro matar alguém enquanto dorme que em uma luta justa.',
		'Não é roubo se eu precisar de algo mais do que a outra pessoa precisa.',
		'Pessoas que não conseguem cuidar de si mesmas têm aquilo que merecem.'
	]

),
new Antecedente(
	'NOBRE',
	'Você entende de riqueza, poder e privilégios. Você carrega um título de nobreza, e sua família possui terras, coleta impostos e exerce uma influencia política significativa. Você pode ser um aristocrata mimado pouco familiarizado com o trabalho ou com o desconforto, um ex - comerciante elevado à nobreza, ou um malandro deserdado com um sentido desproporcional de direitos. Ou você pode ser um proprietário de terra honesto e trabalhador que se preocupa profundamente com as pessoas que vivem e trabalham em sua terra, sutilmente ciente da sua responsabilidade para com eles. Converse com seu Mestre para chegar a um título adequado e determinar a quantidade de autoridade este título carrega. Um título de nobreza não fica com você – é conectado a uma família inteira, e qualquer título que você possuir, passará para seus filhos. Você não precisa determinar seu título de nobreza sozinho, você também deve conversar com seu Mestre para descrever sua família e a influencia dela sobre você. Sua família é antiga e estabelecida, ou só recentemente você foi agraciado com seu título ? Qual a influencia que sua família exerce, e sobre qual área ? Que tipo de reputação sua família tem entre os outros aristocratas da região ? Como as pessoas comuns consideram sua família ? Qual é sua posição na família ? Você é herdeiro ou chefe da família ? Você já herdou o título ? Como você se sente sobre essa responsabilidade ? Ou você está tão abaixo da linha de herança que ninguém se importa com o que você faz, contanto que você não envergonhe a família ? Como é que o chefe da família se sente sobre a sua carreira de aventuras ? Você está de bem com a família, ou afastado do restante da família ? Sua família tem um brasão de armas ? Uma insígnia que você pode usar em um anel de sinete ? Cores específicas que você usa o tempo todo ? Um animal que você considera como um símbolo de sua linhagem ou mesmo um membro espiritual da família ? Esses detalhes ajudam a estabelecer sua família e seu título como características do mundo de campanha.',
	['História', 'Persuasão', 'Proficiências em Ferramentas: Um tipo de kit de jogos'],
	['Um à sua escolha'],
	['Um conjunto de trajes finos', 'um anel de sinete', 'um pergaminho de linhagem', 'uma bolsa contendo 25 po'],
	'HABILIDADE: POSIÇÃO PRIVILEGIADA Graças a sua origem nobre, as pessoas tendem a pensar o melhor de você.' +
	'Você é bem - vindo na alta sociedade, e as pessoas assumem que você tem o direito de estar onde está.' +
	'As pessoas comuns fazem todos os esforços para acomodá - lo e evitar seu desprazer, e outros nobres o tratam como um membro da mesma classe social.' +
	'Você pode conseguir uma audiência com um nobre local se precisar.',
	'CARACTERÍSTICAS SUGERIDAS	Nobres são nascidos e criados para um estilo de vida muito diferente do que a maioria das pessoas experimenta, e suas personalidades refletem sua educação.' +
	'Um título nobre vem com uma infinidade de vínculos – responsabilidades com a família, com outros nobres(incluindo o soberano), com o povo que confia nos cuidados da família, ou mesmo com o próprio título.' +
	'Mas essa responsabilidade é uma boa maneira de enfraquecer um nobre.',
	[
		'Minha bajulação eloquente faz com que todos com quem eu converse se sintam a pessoa mais maravilhosa e importante do mundo.',
		'As pessoas comuns me amam por minha bondade e generosidade.',
		'Ninguém pode duvidar, olhando para o meu porte real, que estou acima das massas plebeias.',
		'Eu tenho grande cuidado de sempre estar no meu melhor e seguir as últimas modas.',
		'Eu não gosto de sujar minhas mãos, e eu não vou ser pego em acomodações inadequadas.',
		'Apesar da minha origem nobre, eu não estou acima dos outros. O sangue é um só.',
		'Meu apoio, uma vez perdido, não volta.',
		'Se você me ferir, eu irei esmagá-lo, arruinar seu nome, e salgar seus campos.'
	],
	[
		'Respeito. O respeito a mim é devido por causa da minha posição, mas todas as pessoas, independente da posição merecem ser tratados com dignidade. (Bom)',
		'Responsabilidade. É o meu dever respeitar a autoridade daqueles acima de mim, assim como aqueles abaixo de mim devem me respeitar.(Leal)',
		'Independente. Devo provar que posso me cuidar sem os mimos da minha família. (Caótico)',
		'Poder. Se eu puder alcançar mais poder, ninguém vai me dizer o que fazer. (Mau)',
		'Família. O sangue corre mais grosso do que a água. (Qualquer)',
		'Obrigação Nobre. É o meu dever proteger e cuidar das pessoas abaixo de mim. (Bom)'
	],
	[
		'Eu vou encarar qualquer desafio para ganhar a aprovação da minha família.',
		'A aliança da minha casa com outra família nobre deve ser mantida a todo custo.',
		'Nada é mais importante do que os outros membros da minha família.',
		'Eu sou apaixonado pela herdeira de uma família que a minha família despreza.',
		'Minha lealdade ao meu soberano é inabalável.',
		'As pessoas comuns devem me ver como um herói do povo.'
	],
	[
		'Eu secretamente acredito que todos estão abaixo de mim.',
		'Eu escondo um segredo verdadeiramente escandaloso que poderia arruinar minha família para sempre.',
		'Muitas vezes eu ouço insultos e ameaças veladas em cada palavra dirigida a mim, e me irrito muito rápido.',
		'Eu tenho um desejo insaciável por prazeres carnais.',
		'Na verdade, o mundo gira ao meu redor.',
		'Pelas minhas palavras e ações, muitas vezes envergonho minha família.'
	]


),
new Antecedente(

	'SÁBIO',
	'Você ficou anos aprendendo sobre o conhecimento do multiverso. Você decorou manuscritos, estudou pergaminhos e escutou os grandes especialistas nos temas que o interessam. Seus esforços fizeram de você um mestre no seu campo de estudo.',
	['Arcanismo', 'História'],
	['Dois a sua escolha'],
	['Um vidro de tinta escura', 'uma pena', 'uma faca pequena', 'uma carta de um falecido colega perguntando a você algo que você nunca terá a chance de responder', 'um conjunto de roupas comuns', 'uma algibeira contendo 10 po'],
	'ESPECIALIDADE Para determinar a natureza de seus estudos, jogue um d8 ou escolha na tabela abaixo.' +
	'd8 Especialidade ' +
	'1 Alquimista ' +
	'2 Astrônomo ' +
	'3 Acadêmico desacreditado ' +
	'4 Bibliotecário ' +
	'5 Professor ' +
	'6 Pesquisador ' +
	'7 Aprendiz de Mago' +
	'8 Escriba ' +
	'CARACTERÍSTICA	 PESQUISADOR Quando tentar obter ou recuperar um fragmento de conhecimento que você não saiba, você descobre aonde e com quem pode obter essa informação. Normalmente ela será adquirida em bibliotecas, arquivos de escribas, universidade ou outros sábios e pessoas aptas. Seu Mestre pode decidir que o conhecimento que busca está escondido em algum lugar quase inacessível, ou é simplesmente impossível de se obter. Desvendar os segredos mais profundos do multiverso pode requerer uma campanha inteira.',
	'CARACTERÍSTICAS SUGERIDAS	Sábios são definidos por seus extensivos estudos, e suas características refletem essa vida que levarem. Devotados a perseguir o conhecimento, um sábio valoriza qualquer informação acadêmica – algumas vezes como apenas importante, outras vezes mais importantes que seus próprios ideais.',
	[
		'Eu uso palavras polissilábicas para endossar minha impressão de grande erudição.',
		'Eu já li todos os livro das grandes bibliotecas – ou gosto de me vangloriar de que tenha lido.',
		'Eu costumo ajudar os outros que não são tão inteligentes quanto eu, e pacientemente explico tudo quantas vezes forem necessárias.',
		'Nada para mim é melhor que um bom mistério.',
		'Eu voluntariamente escuto cada lado, e seus argumentos, antes de tomar uma decisão final.',
		'Eu...falo...lentamente...ao...conversar...com idiotas...que tentam...se comparar...comigo.',
		'E sou horrível e estranho em situações sociais.',
		'Estou convencido de que todos tentam roubar os meus segredos de mim.'
	],
	[
		'Conhecimento. O caminho para o poder e o auto aperfeiçoamento é através do conhecimento. (Neutro)',
		'Beleza. O que a beleza aponta para além de nós mesmo também e verdadeiro. (Bom)',
		'Logica. Emoções não devem nublar seu pensamento lógico.(Leal)',
		'Sem Limites. Nada pode apaziguar a possibilidade infinita de toda a existência. (Caótico)',
		'Poder. Conhecimento é o caminho para o poder e a dominação. (Mal) ',
		'Auto Aperfeiçoamento. O objetivo de uma vida de estudos é a melhoria de si mesmo. (Qualquer)'
	],
	[
		'É meu dever proteger meus estudantes.',
		'Eu guardo um texto ancestral que contém terríveis segredos que não podem cair em mãos erradas.',
		'Eu trabalho para preservar uma biblioteca, universidade, arquivo de escribas ou monastério.',
		'O trabalho a da minha vida é uma série de tomo relatando um campo ou conhecimento específico.',
		'Eu venho procurando a minha vida inteira pela resposta de certa questão.',
		'Eu vendi minha alma por conhecimento. Espero realizar grandes feitos para ganhá-la de volta.'
	],
	[
		'Eu me distraio facilmente com a promessa de informação.',
		'Muitas pessoas gritam e correm quando veem um demônio. Eu paro e tomo notas de sua anatomia.',
		'Desvendar um mistério ancestral pode muito bem valer o preço e uma civilização.',
		'E prefiro soluções óbvias a complicadas.',
		'Eu falo sem antes pensar em minhas palavras, invariavelmente insultando outros.',
		'Eu não consigo guardar um segredo para salvar minha vida. Ou a vida de qualquer outra pessoa.'
	]
),
new Antecedente(
	'SOLDADO',
	'A guerra esteve na sua vida desde que você se recorda. Você foi treinado desde jovem, estudou o uso das armas e armaduras, aprendeu técnicas básicas de sobrevivência, incluindo como permanecer vivo no campo de batalha. Você pode ter feito parte de uma armada nacional, ou uma companhia de mercenários, talvez até mesmo uma milícia local, que cresceu proeminentemente durante uma guerra recente. Quando você escolher esse antecedente, converse com seu Mestre para determinar de qual organização militar você fez parte, quão longe você progrediu na hierarquia e que tipos de experiência você teve na sua carreira militar ? Foi um exército de guarda, uma patrulha de cidade ou a milícia de uma pequena vila ? Ou talvez você tenha participado da defesa pessoal de um nobre, ou mercador, ou de um cartel de mercenários.',
	['Atletismo', 'Intimidação', 'Ferramentas: Um tipo de kit de jogo', 'veículos(terrestres)'],
	[],
	['uma insígnia de patente', 'um troféu obtido de um inimigo caído(uma adaga, lâmina quebrada ou tira de estandarte)',
		'um conjunto de dados de ossos ou baralho', 'um conjunto de roupas comuns', 'uma algibeira contendo 10 po'],
	'ESPECIALIDADE' +
	'Durante sua experiência como soldado, você desempenhou um papel específico em uma unidade ou exército.' +
	'Jogue o d8 ou escolha entre as opções na tabela abaixo.' +
	'd8 Especialidade ' +
	'1 Oficial  ' +
	'2 Batedor  ' +
	'3 Infantaria ' +
	'4 Cavalaria ' +
	'5 Médico ' +
	'6 Contramestre ' +
	'7 Porta estandarte ' +
	'8 Equipe de apoio(cozinheiro, ferreiro)' +
	'CARACTERÍSTICA	 PATENTE MILITAR Você possui uma patente militar da sua época como soldado.' +
	'Soldados leais a sua antiga organização reconhecem sua autoridade e influência, e o prestam deferência, se forem de uma patente mais baixa.' +
	'Você pode invocar sua patente para exercer influência sobre soldados, e requisitar equipamentos simples ou cavalos para uso temporário.' +
	'Você também pode ganhar acesso a acampamentos militares aliados, e fortalezas onde usa patente é reconhecida.',
	'CARACTERÍSTICAS SUGERIDAS	Os horrores de guerra combinados com a rígida disciplina que o serviço militar cobra, deixa marcas em todos os soldados, moldando seus ideais, criando fortes vínculos e até mesmo os deixando assustados e vulneráveis ao medo, vergonha e ódio.',
	[
		'Eu sou sempre polido e respeitoso.',
		'Eu sou assombrado pelas memórias da guerra. Não consigo tirar aquelas imagens da minha cabeça.',
		'Eu perdi muitos amigos, e sou muito devagar para fazer novos.',
		'Eu tenho muitas estórias de inspiração e cautela da época de minha experiência militar que são relevantes em todas as situações de combate.',
		'Eu não consigo encarar um Cão do Inferno sem vacilar.',
		'Eu gosto de ser forte e de quebrar coisas.',
		'Eu tenho um senso de humor cru.',
		'Eu enfrento os problemas de frente. Uma solução direta é o melhor caminho para o sucesso.'
	],
	[
		'Grande Bondade. Nossa pilhagem é para sustentar nossas vidas em defesa de outros. (Bom)',
		'Responsabilidade. Eu faço o que tenho que fazer e obedeço a autoridade.(Leal)',
		'Independência. Quando pessoas seguem ordens cegas elas suportam um tipo de tirania. (Caótico)',
		'Força.A vida é como uma guerra, o mais forte vence. (Mal) ',
		'Viva e Deixa Viver. Ideais não são valiosos se você os matar, ou for à guerra por eles. (Neutro)',
		'Aspiração. Minha cidade, nação ou meu povo, são tudo o que importa pra mim. (Qualquer)'
	],
	[
		'Eu ainda daria a minha vida pelas pessoas com quem servi.',
		'Alguém salvou minha vida no campo de batalha. Desde aquele dia eu nunca deixo nenhum amigo pra trás.',
		'Minha honra é minha vida.',
		'Eu nunca esquecerei a destruidora derrota que minha companhia sofreu ou os inimigos que a causaram.',
		'Aqueles que lutam ao meu lado são por quem vale a pena morrer.',
		'Eu luto por aqueles que não podem lutar por si mesmos.'
	],
	[
		'O inimigo monstruoso que enfrentei em uma batalha ainda me deixa morto de medo.',
		'Eu tenho pouco respeito por aqueles que não se provam bons combatentes.',
		'Eu cometi um terrível erro em batalha, o que custou muitas vidas – eu farei de tudo para manter esse erro em segredo.',
		'Meu ódio por meus inimigos é cego e irracional;',
		'Eu obedeço a lei, mesmo se a lei trouxer a angústia.',
		'Eu prefiro comer minha armadura a admitir que estou errado'
	]
)
];

/*
 *Raças base
*/

let anao = new Raca(
	'Anão',
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
	new Deslocamento(7.5, 'metros')
)


let anaoColina = anao;
anaoColina.nome = 'Anão da Colina';
anaoColina.atributos.sabedoria = 2;
//let anaoMontanha = anao;


let racas = [];

racas.push(anaoColina);