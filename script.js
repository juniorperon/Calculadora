//variaveis

var valor;
var resultado;

//função para selecionar os botões

function botao(num) {
    valor = document.calc.visor.value += num;
}

//função para apagar o texto "C"

function reseta() {
    document.calc.visor.value = '';
}

//função para calcular "="

function calcula() {
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-BR'); //toLocaleString serve para deixar 1.000 e 0,1 (pontuação)
}