// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const nameWith5Letters = names.find((nome) => nome.length === 5);

console.log(nameWith5Letters);