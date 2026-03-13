let soma = 0;
let pesos = [2, 3, 5];

for (let i = 0; i < 3; i++) {
    let n = parseFloat(prompt(`Informe a ${i + 1}ª nota do aluno: `));

    soma += n * pesos[i];

}


let media = soma / 10;

alert(`Nota final: ${media.toFixed(2)}`);