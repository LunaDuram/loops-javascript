const prompt = require('prompt-sync')();

let s = 0
let n = 0

n = parseInt(prompt('Digite um número do teclado:'));

do{
    n = parseInt(prompt('Digite um número do teclado:'));

    if(n < 0){
        s = s + n
    }
}while(n!=0)
console.log(`A soma dos valores foi: ${s}`);