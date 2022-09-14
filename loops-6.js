const prompt = require('prompt-sync')();

let M = 0;
let n = 0;
let qtd = 0;

n = parseInt(prompt('Coloque um número do teclado:'));

do{
  n = parseInt(prompt('Coloque um número do teclado:'));

  if(n%3==0){
    M = M + n
    qtd++
  }
}while(n!=0)
console.log(`Amedia dos valores foi: ${M/qtd}`);