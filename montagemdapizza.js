// Declaração de Variáveis
var formopcoes = document.getElementById("opcoes");
var formenvioinfo = document.getElementById("envioinfo");
var conteudomontagem = document.getElementById("montagem");
var sectionpersonalizacao = document.getElementById("sectionpersonalizacao");
var sectionmontagem = document.getElementById("montagem");
var escolhasdoces = document.getElementById("pizzasdoces");
var pizza = document.getElementById("pizza");
var escolhassalgadas = document.getElementById("pizzassalgadas");
var divdoce = document.getElementById("divdoce");
var divsalgada = document.getElementById("divsalgada");
var quebraDeLinha = document.createElement("br");

formenvioinfo.style.display = "none";
divdoce.style.display = "none";
divsalgada.style.display = "none";

function chamar() {
    var quantSabores = document.getElementById("saborespizza");
    var selectTamanho = document.getElementById("selecttamanho");
    var tamanhoSelecionado = selectTamanho.value;
    var selectTipo = document.getElementById("selecttipo");
    var tipoSelecionado = selectTipo.value;
    var quantidadeSabores = parseInt(quantSabores.value); /*pega o número*/
    formenvioinfo.style.display = "block";

    // Exibe os selects de pizzas doces ou salgadas a quantidade de vezes selecionada
    for (var i = 0; i < quantidadeSabores - 1; i++) {
        if (tipoSelecionado === "doce") {
            pizza.style.backgroundImage = "url('images/texturamarrom.jpg')";
            var novoSelectDoce = escolhasdoces.cloneNode(true);
            novoSelectDoce.id = "escolhasdoces_" + (i + 1);
            novoSelectDoce.style.display = "block";
            var labelDoce = novoSelectDoce.querySelector("label");
            labelDoce.textContent = "Selecione o sabor número " + (i + 2); // Adiciona o número ao texto do label
            escolhasdoces.parentNode.appendChild(novoSelectDoce);
            escolhasdoces.parentNode.insertBefore(quebraDeLinha, novoSelectDoce);
        } else if (tipoSelecionado === "salgada") {
            var novoSelectSalgada = escolhassalgadas.cloneNode(true);
            novoSelectSalgada.id = "escolhassalgadas_" + (i + 1);
            novoSelectSalgada.style.display = "block";
            var labelSalgada = novoSelectSalgada.querySelector("label"); /*vai pegar o label desse novoSelectDoce*/
            labelSalgada.textContent = "Selecione o sabor número " + (i + 2); // Adiciona o número ao texto do label
            escolhassalgadas.parentNode.appendChild(novoSelectSalgada);
            escolhassalgadas.parentNode.insertBefore(quebraDeLinha.cloneNode(), novoSelectSalgada);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Esconde as escolhas de pizzas doces e salgadas
    escolhasdoces.style.display = "none";
    escolhassalgadas.style.display = "none";

    /*Evento que vai ocorrer após clique no botão próximo que vai enviar*/
    formopcoes.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtém o tipo de pizza selecionado
        var selectTipo = document.getElementById("selecttipo");
        var tipoSelecionado = selectTipo.value;

        // Esconde o formulário
        formopcoes.style.display = "none";
        chamar();

        // Mostra as escolhas de pizzas doces ou salgadas, dependendo do tipo selecionado
        if (tipoSelecionado === "doce") {
            divdoce.style.display = "block";
            escolhasdoces.style.display = "block";
        } else if (tipoSelecionado === "salgada") {
            divdoce.style.display = "none";
            divsalgada.style.display = "block";
            escolhassalgadas.style.display = "block";
        }

        // Obtém o tamanho da pizza selecionado e salva no localStorage
        var selectTamanho = document.getElementById("selecttamanho");
        var tamanhoSelecionado = selectTamanho.value;
        localStorage.setItem("Tamanho da Pizza", tamanhoSelecionado);

        var saborSelecionado = quantSabores.value;
        localStorage.setItem("Sabor Selecionado", saborSelecionado);

        var tipoSelecionado = selectTipo.value;
        localStorage.setItem("Tipo Selecionado", tipoSelecionado);
    });

    formenvioinfo.addEventListener("submit", function (event) {
        var textIng = document.getElementById("texting");
        var textIngDig = textIng.value;
        localStorage.setItem("Ingredientes escolhidos", textIngDig);
    });
});
