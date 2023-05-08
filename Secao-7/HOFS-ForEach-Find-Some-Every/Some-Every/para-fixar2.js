/* Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:

Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;

Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. */ 

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every((person) => person.age >= minimumAge);
//   };
  
//   console.log(verifyAges(people, 18)); // false
//   console.log(verifyAges(people, 14)); // true

  const jogadores = [
    { nome: 'Cristiano Ronaldo', gols: 1000 },
    { nome: 'Lionel Messi', gols: 390 },
    { nome: 'Pelé', gols: 1000 },
    { nome: 'Maradona', gols: 9000 }
  ];

  const verificaGols = (array, quantidadeGols) => {
    return array.every((jogador) => jogador.gols >= quantidadeGols);
  };

  console.log(verificaGols(jogadores, 1000)); // false
  console.log(verificaGols(jogadores, 200)); // true
