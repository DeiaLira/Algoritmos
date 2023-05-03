class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso/(this.altura*this.altura);
    }

    classificarImc(){
        const resultadoIMC = this.calcularImc();
        if (resultadoIMC < 18.5) {
            return "Abaixo do peso!";
          } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
            return "Peso Normal!";
          } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
            return "Acima do peso";
          } else if (resultadoIMC >= 30 && resultadoIMC <= 40) {
            return "Obeso!";
          } else {
            return "Obesidade Grave!";
          }   
    }
}

const jose = new Pessoa('José', 200, 1.75);
console.log (jose.calcularImc());
console.log (jose.classificarImc());