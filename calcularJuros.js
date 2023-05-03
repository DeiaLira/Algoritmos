function calcularJuros(valor, formaDePagamento){
    if (formaDePagamento === 'A vista Debito') {
        valor = valor - (valor * 10/100);
        console.log(valor);
    } else if (formaDePagamento === 'A vista Dinheiro/Pix') {
        valor = valor - (valor * 15/100);
        console.log(valor);
    } else if (formaDePagamento === 'Em duas vezes') {
        console.log(valor);
    } else {
        valor = valor + (valor * 10/100);
        console.log(valor);
    }
}

(function(){
    const valor = 10;
    const formaDePagamento = 'A vista Debito';
    calcularJuros(valor, formaDePagamento);
})();