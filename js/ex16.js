let n = prompt("Informe o número de maças que irá comprar: ");
let preco;

if(n<=0 || n==null){
    alert("Informe um número de maçãs a serem compradas válido.");
}

else if(n>=12){
    preco =1.00*n;
    alert(`Preço total: R$${preco.toFixed(2)}`);
}

else{
    preco= 1.30*n;
    alert(`Preço total: R$ ${preco.toFixed(2)}`);
}