const Distribuidor = 0.28;
const Imposto = 0.45;

let Fabrica = parseFloat(prompt("Informe o valor de fábrica: "));

let ValorFinal = Fabrica * (1 + Distribuidor + Imposto);

alert("O salário atual é de R$" + ValorFinal.toFixed(2));
