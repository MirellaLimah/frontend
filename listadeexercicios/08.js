// Escreva uma função que receba o nome de um dia da semana (em minúsculas) e use switch para retornar se é dia útil ou fim de semana.

function verificaDia(dia) {
  switch (dia.toLowerCase()) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
      console.log("Dia útil");
      break;
    case "sábado":
    case "domingo":
      console.log("Fim de semana");
      break;
    
  }
}

console.log(verificaDia("terça"))