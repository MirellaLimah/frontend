// Crie uma função que receba um número n e retorne a soma de todos os números de 1 até n usando um laço for.

function somando (n){
    let soma = 0
    for(let i = 1; i<= n; i++){
        soma = soma+i
    }
    return soma;
}
console.log(somando(5))