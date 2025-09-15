// Escreva uma função que receba um número e retorne "Par" se for par ou "Ímpar" se for ímpar, usando o operador % e if/else.


function parImpar(numero){
    if(numero % 2===0){
        console.log("Este número é par")
    }else{
        console.log("Este número é ímpar")
    }
}

console.log(parImpar(15));
console.log(parImpar(46))