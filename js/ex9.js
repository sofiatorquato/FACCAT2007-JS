let Salario = parseFloat(prompt("Informe o seu sálario atual: "));
let Percentual =
  parseInt(prompt("Informe a porcentagem de reajuste. EX: 10: ")) / 100;

let Aumento = Salario * Percentual;

Salario = Salario + Aumento;

alert("Novo salário: R$" + Salario.toFixed(2));
