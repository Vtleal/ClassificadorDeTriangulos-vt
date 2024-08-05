function resultadoFinal() {
    let ladoDireito = document.getElementById('botao__lado-direito').value;
    let ladoEsquerdo = document.getElementById('botao__lado-esquerdo').value;
    let embaixo = document.getElementById('embaixo').value;
    let resultado = document.getElementById('result');

    if (ladoDireito === ladoEsquerdo && embaixo === ladoDireito && embaixo === ladoEsquerdo) {
        resultado.textContent = 'Equilátero';
    } else if (ladoDireito != ladoEsquerdo && embaixo != ladoDireito && ladoEsquerdo != embaixo) {
        resultado.textContent = 'Escaleno';
    } else  if (ladoDireito != ladoEsquerdo || ladoDireito != embaixo || ladoEsquerdo != embaixo) {
        resultado.textContent = 'Isósceles';   
    }


}

