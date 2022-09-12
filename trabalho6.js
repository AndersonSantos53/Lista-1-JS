const x1 = prompt('Escreva primeira nota: ');

const a = Number(x1);

const x2 = prompt ('Escreva a segunda nota: ');

const b = Number (x2);

const y1 = prompt ('Escreva a terceira nota: ');

const c = Number (y1);

const y2 = prompt ('Escreva a segunda nota: ');

const d = Number (y2);

const soma1 = Math.pow((x2-x1), 2); 

const soma2 = Math.pow((y2-y1), 2);

const soma3 = (soma1  + soma2);

const somatotal = Math.sqrt(soma3);

console.log (` é:Valor de D é: ${somatotal}`);

