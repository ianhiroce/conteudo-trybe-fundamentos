// 1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = numbers.filter((elemento) => elemento % 2 === 0);
console.log(numerosPares);

const somaNumerosPares = numerosPares.reduce((acumulador, elemento) => acumulador + elemento, 0);

console.log(somaNumerosPares);


const soma = (acc, numero) => (
    (numero % 2 === 0) ? acc + numero : acc
);

const somaNumerosParesComReduce = (array) => array.reduce(soma, 0);

console.log(somaNumerosParesComReduce(numbers));


