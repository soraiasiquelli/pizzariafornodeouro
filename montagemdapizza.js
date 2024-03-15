// Declaração de Variáveis
var formopcoes = document.getElementById("opcoes");
var conteudomontagem = document.getElementById("montagem");
var sectionpersonalizacao = document.getElementById("sectionpersonalizacao");
var sectionmontagem = document.getElementById("montagem");
var escolhasdoces = document.getElementById("pizzasdoces");
var escolhassalgadas = document.getElementById("pizzassalgadas");

document.getElementById("saborespizza").addEventListener("change", function() {
    var selectSabores = document.getElementById("saborespizza");
    var selectTamanho = document.getElementById("selecttamanho");
    var tamanhoSelecionado = selectTamanho.value;
    var selectTipo = document.getElementById("selecttipo");
    var tipoSelecionado = selectTipo.value;
    var quantidadeSabores = parseInt(this.value);

    // Exibe os selects de pizzas doces ou salgadas a quantidade de vezes selecionada
    for (var i = 0; i < (quantidadeSabores-1); i++) {
        if (tipoSelecionado === "doce") {
            var novoSelectDoce = escolhasdoces.cloneNode(true);
            novoSelectDoce.id = "escolhasdoces_" + (i + 1);
            novoSelectDoce.style.display = "block";
            escolhasdoces.parentNode.appendChild(novoSelectDoce);
        } else if (tipoSelecionado === "salgada") {
            var novoSelectSalgada = escolhassalgadas.cloneNode(true);
            novoSelectSalgada.id = "escolhassalgadas_" + (i + 1);
            novoSelectSalgada.style.display = "block";
            escolhassalgadas.parentNode.appendChild(novoSelectSalgada);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Esconde as escolhas de pizzas doces e salgadas
    escolhasdoces.style.display = "none";
    escolhassalgadas.style.display = "none";

    /*Evento que vai ocorrer após clique no botão próximo que vai enviar*/
    formopcoes.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtém o tipo de pizza selecionado
        var selectTipo = document.getElementById("selecttipo");
        var tipoSelecionado = selectTipo.value;

        // Esconde o formulário
        formopcoes.style.display = "none";

        // Mostra as escolhas de pizzas doces ou salgadas, dependendo do tipo selecionado
        if (tipoSelecionado === "doce") {
            escolhasdoces.style.display = "block";
        } else if (tipoSelecionado === "salgada") {
            escolhassalgadas.style.display = "block";
        }

        // Obtém o tamanho da pizza selecionado e salva no localStorage
        var selectTamanho = document.getElementById("selecttamanho");
        var tamanhoSelecionado = selectTamanho.value;
        localStorage.setItem("Tamanho da Pizza", tamanhoSelecionado);
    });
});
