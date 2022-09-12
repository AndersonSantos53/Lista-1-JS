const segundostotais = prompt('Escreva o tempo em segundos: ');

const segundost = Number(segundostotais);

const horas = segundost / 3600
const minutos = (segundost % 3600) / 60
const segundos = (segundost % 3600) % 60

console.log(`\nForam trabalhadas ${Math.floor(horas)} horas`);
console.log(`\n${Math.floor(minutos)} minutos`);
console.log(`\n${segundos} segundos`);
