let person = new Personagem
    (
        racas[0],
        null,
        new atributos
            (
                RolagemAtributos.RolarAtributo4d6(),
                RolagemAtributos.RolarAtributo4d6(),
                RolagemAtributos.RolarAtributo4d6(),
                RolagemAtributos.RolarAtributo4d6(),
                RolagemAtributos.RolarAtributo4d6(),
                RolagemAtributos.RolarAtributo4d6()
            ),
        antecedentes[10],
        1
    );
    
function carregaPagina()
{
    const antecedenteSelect = document.getElementById("antecedente-select");
    antecedentes.forEach((antecedente) => {
        option = new Option(antecedente.nome,antecedenteSelect.options.length-1);
        antecedenteSelect.options[antecedenteSelect.options.length] = option;
      });

}

function carregarPersonagem() {

    //cabeçalho
    document.getElementById("nomepersonagem").value = person.nome;
    document.getElementById("racapersonagem").value = person.raca.nome;
    document.getElementById("alinhamentopersonagem").value = person.nome;
    document.getElementById("antecedentepersonagem").value = person.antecedente;

    document.getElementById("personalidade").value = person.personalidade;
    document.getElementById("ideal").value = person.ideal;
    document.getElementById("vinculo").value = person.vinculo;
    document.getElementById("fraqueza").value = person.fraqueza;

    //document.getElementById("classepersonagem").value = person.classe.nome;
//    document.getElementById("nivelpersonagem").value = person.nome;

    //atributos
    document.getElementById("nomeforca").innerHTML=person.atributos.forca.nome;
    document.getElementById("nomedestreza").innerHTML = person.atributos.destreza.nome;
    document.getElementById("nomeconstituicao").innerHTML = person.atributos.constituicao.nome;
    document.getElementById("nomeinteligencia").innerHTML = person.atributos.inteligencia.nome;
    document.getElementById("nomesabedoria").innerHTML = person.atributos.sabedoria.nome;
    document.getElementById("nomecarisma").innerHTML = person.atributos.carisma.nome;

    document.getElementById("forca").value=person.atributos.forca.valor;
    document.getElementById("destreza").value = person.atributos.destreza.valor;
    document.getElementById("constituicao").value = person.atributos.constituicao.valor;
    document.getElementById("inteligencia").value = person.atributos.inteligencia.valor;
    document.getElementById("sabedoria").value = person.atributos.sabedoria.valor;
    document.getElementById("carisma").value = person.atributos.carisma.valor;

    document.getElementById("modforca").value = person.atributos.forca.modificador;
    document.getElementById("moddestreza").value = person.atributos.destreza.modificador;
    document.getElementById("modconstituicao").value = person.atributos.constituicao.modificador;
    document.getElementById("modinteligencia").value = person.atributos.inteligencia.modificador;
    document.getElementById("modsabedoria").value = person.atributos.sabedoria.modificador;
    document.getElementById("modcarisma").value = person.atributos.carisma.modificador;
}