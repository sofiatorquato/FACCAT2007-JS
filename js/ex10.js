const Distribuidor = 0.28;
const Imposto = 0.45;

let Fabrica = prompt("Informe o valor de fábrica: ");

let ValorFinal = parseFloat(Fabrica * (1 + Distribuidor + Imposto));

alert("O salário final é de R$" + ValorFinal.toFixed(2));
