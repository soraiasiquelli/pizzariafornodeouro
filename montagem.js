var tipoSelecionado; // Definindo a variável no escopo global
var desenhopizza = document.getElementById("pizza");

function proximo() {
    if(tipoSelecionado == "doce"){
        var formpizzasdoces = document.getElementById("pizzasdoces");
        formpizzasdoces.style.display = "block";
        desenhopizza.style.display = "none"
    } if (tipoSelecionado == "salgada") {
        var formpizzassalgadas = document.getElementById("pizzassalgadas");
        formpizzassalgadas.style.display = "block";
        desenhopizza.style.display = "none"

    }
}


document.addEventListener('DOMContentLoaded', function() { /*vai acontecer dps que o html carregar*/

    /*Declaração de variáveis*/
    var formtamanho = document.getElementById("formtamanho"); /* Primeiro formulário que o cliente preenche */
    var formpizzasdoces = document.getElementById("pizzasdoces");
    var formpizzassalgadas = document.getElementById("pizzassalgadas");
    var desenhopizza = document.getElementById("pizza");
    var teste = document.getElementById("teste");

    desenhopizza.style.display = "none"; /* não vai aparecer mas vai existir */
    formpizzassalgadas.style.display = "none";
    formpizzasdoces.style.display = "none";

    formtamanho.addEventListener('submit', function(event) {
        event.preventDefault();

        desenhopizza.style.display = "block";
        formtamanho.style.display = "none";

        /* Vai pegar os valores/respostas */

        var selectTamanho = document.getElementById("selecttamanho"); /*pega o select*/
        var tamanhoSelecionado = selectTamanho.value; /*pega o valor selecionado*/
        localStorage.setItem("Tamanho da pizza", tamanhoSelecionado);

        var selectSabor = document.getElementById("selectsabor");
        var saborSelecionado = selectSabor.value;
        localStorage.setItem("Quant Sabor", saborSelecionado);

        var selectTipo = document.getElementById("selecttipo");
        tipoSelecionado = selectTipo.value; // Atribuindo o valor à variável tipoSelecionado
        localStorage.setItem("Tipo da Pizza", tipoSelecionado);

        









        
    });

});






