let TotalVotos = parseInt(prompt("Informe a quantidade total de votos: "));
let Branco = parseInt(prompt("Informe a quantidade de votos em branco: "));
let Nulo = parseInt(prompt("Informe a quantidade de votos nulos: "));
let Valido = parseInt(prompt("Informe a quantidade de votos válidos: "));

let PercBranco = (Branco / TotalVotos) * 100;
let PercNulo = (Nulo / TotalVotos) * 100;
let PercValido = (Valido / TotalVotos) * 100;

alert(
  "Percentual dos votos em branco: " +
    PercBranco.toFixed(2) +
    "%" +
    "\nPercentual dos votos nulos: " +
    PercNulo.toFixed(2) +
    "%" +
    "\nPercentual dos votos válidos: " +
    PercValido.toFixed(2) +
    "%",
);
