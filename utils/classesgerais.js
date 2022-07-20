let idiomas = [
    new Idioma('Comum'),						//0
    new Idioma('Anão'),							//1
    new Idioma('Élfico'),						//2
    new Idioma('Gigante'),						//3
    new Idioma('Gnomo'),						//4
    new Idioma('Goblin'),						//5
    new Idioma('Halfling'),						//6
    new Idioma('Orc'),							//7
    new Idioma('Abissal', true),				//8
    new Idioma('Celestial', true),				//9
    new Idioma('Dracônico', true),				//10
    new Idioma('Dialeto Subterrâneo', true),	//11
    new Idioma('Infernal', true),				//12
    new Idioma('Primordial', true),				//13
    new Idioma('Silvestre', true),				//14
    new Idioma('Subterrâneo', true)				//15
  ];

let tamanhos = [
	new Tamanho('Minúscula','',0,1),
	new Tamanho('Pequena','',0,1),
	new Tamanho('Média','',0,1),
	new Tamanho('Grande','',0,2),
	new Tamanho('Enorme','',0,3),
	new Tamanho('Imenso','',0,4)
];

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

let pericias = [
	new Pericia('Força','Atletismo'),
	
	new Pericia('Destreza','Acrobacia'),
	new Pericia('Destreza','Furtividade'),
	new Pericia('Destreza','Prestidigitação'),

	new Pericia('Inteligência','Arcanismo'),
	new Pericia('Inteligência','História'),
	new Pericia('Inteligência','Investigação'),
	new Pericia('Inteligência','Natureza'),
	new Pericia('Inteligência','Religião'),
	
	new Pericia('Sabedoria','Adestrar Animais'),
	new Pericia('Sabedoria','Intuição'),
	new Pericia('Sabedoria','Medicina'),
	new Pericia('Sabedoria','Percepção'),
	new Pericia('Sabedoria','Sobrevivência'),

	new Pericia('Carisma','Atuação'),
	new Pericia('Carisma','Enganação'),
	new Pericia('Carisma','Intimidação'),
	new Pericia('Carisma','Persuasão')	
];