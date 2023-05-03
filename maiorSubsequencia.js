function validar(sequencia) {
   let sequenciaAuxiliar = [...sequencia];
   let subsequencia = [];
   let primeiroValor = sequenciaAuxiliar.shift();

   subsequencia.push(primeiroValor);
   

   for (let i = 0; i <= sequenciaAuxiliar.length; i++) {
    if (sequenciaAuxiliar[0] > subsequencia[i]) {
        subsequencia.push(sequenciaAuxiliar[0]); 
        sequenciaAuxiliar.shift(); 
    } else {
        sequenciaAuxiliar.shift();
        i--;
        sequenciaAuxiliar.push(0); 
    } 

    if (sequenciaAuxiliar[0] === 0) {
        break;
    }
    
   }
   return subsequencia.length;
  }
  
  const sequencia = [4, 3, 5, 1, 6];
  console.log(validar(sequencia));

  //Casos para teste [10, 22, 33, 50, 60, 68, 90]  [9, 9, 4, 2]  [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]
  
  
