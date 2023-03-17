function calcular(valor) {
    document.getElementById('valor').value+=valor;
}

function resetar() {
    document.getElementById('valor').value = '';
}

function calcularResultado() {
    var resultado = 0;
    resultado = eval(document.getElementById('valor').value);
    document.getElementById('valor').value = resultado;
}