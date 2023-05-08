// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const NumberDiv3e5 = numbers.find((numero) => numero % 3 === 0 && numero % 5 === 0);
console.log(NumberDiv3e5);