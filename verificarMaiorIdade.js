function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade!');
    } else {
        console.log('Você é menor de idade!');
    }
}

(function (){
    const valorIdade = 15;
    verificarMaiorIdade(valorIdade);
})();