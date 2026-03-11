let ano = Number(prompt("Informe a sua idade em anos. Ex: 17 : "));
let mes = Number(prompt("E quantos meses? Ex: 7 : "));
let dia = Number(prompt("E quantos dias? Ex: 22 : "));

let dias = ano * 365 + mes * 30 + dia;

alert("Sua idade em dias é de " + dias + " dias");
