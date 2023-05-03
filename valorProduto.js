let produto = 10;
let formaDePagamento = 'Em quatro vezes';

if (formaDePagamento === 'A vista Debito') {
    produto = produto - (produto * (10/100));
    console.log(produto);
} else if (formaDePagamento === 'A vista Dinheiro/Pix') {
    produto = produto - (produto * (15/100));
    console.log(produto);
} else if (formaDePagamento === 'Em duas vezes') {
    console.log(produto);
} else {
    produto = produto + (produto * (10/100));
    console.log(produto);
}