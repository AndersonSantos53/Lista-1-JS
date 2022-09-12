
const diatotal = prompt('Escreva seus dias vividos: ');

const diasS = Number(diatotal);

const anos = (diasS / 365 )
const meses = (diasS % 365) / 30
const dias = (diasS % 365) % 30

console.log(`\nvocê tem ${Math.floor(anos)} anos`);
console.log(`\n${Math.floor(meses)} meses`);
console.log(`\n${dias} dias`);
