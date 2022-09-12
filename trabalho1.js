

const anosS = prompt('Escreva sua anos vividos: ');

const anos = Number(anosS);

const mesesS = prompt ('escreva os meses vividos: ');

const meses = Number (mesesS);

const diasS = prompt ('escreva os dias vividos: ');

const dias = Number (diasS);

const diastotais = ( (anos * 365) + (meses * 30) + dias);

console.log (`Você tem ${diastotais} dias de vida!`);