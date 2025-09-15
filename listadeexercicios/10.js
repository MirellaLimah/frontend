// Crie uma função que receba um array de números e retorne apenas os números pares, usando for e if.

const numero = [1,2,45,72,36,99,108,11]

function pegaPares(numeros) {
  let resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { 
      resultado[resultado.length] = numeros[i]; 
    }
  }

  return resultado;
}

console.log(pegaPares(numero))