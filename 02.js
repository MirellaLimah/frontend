// Crie uma função que receba um número e use if para verificar se ele é positivo, negativo ou zero. Retorne uma string com o resultado.

function verifcNumero (numero) {
    if (numero>0){
        console.log("Este número é positivo")
    }else if(numero<0){
        console.log("Este numero é negativo")
    }else{
        console.log("Número igual a zero")
    }
}


console.log(verifcNumero(12));
console.log(verifcNumero(-1));
console.log(verifcNumero(0));