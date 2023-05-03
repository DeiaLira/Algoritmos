function validar(sequencia) {
  let sequenciaSemDuplicados = [... new Set(sequencia)];
  let subsequencia = [];
  let menorValor = Math.min(...sequencia);
  let indice = sequenciaSemDuplicados.indexOf(menorValor);
  subsequencia.push(menorValor);
  sequenciaSemDuplicados.splice(indice, 1);

  for (let i = 0; i <= sequenciaSemDuplicados.length;i++) {
    menorValor = Math.min(...sequenciaSemDuplicados);
    indice = sequenciaSemDuplicados.indexOf(menorValor);

    subsequencia.push(menorValor);
    sequenciaSemDuplicados.splice(indice, 1);
  
  }

  return subsequencia;
   
}

const sequencia = [9, 10, 15, 15];
console.log(validar(sequencia));