const prompt = require("prompt-sync")();

let i = 0;
let qC = 0;
let qMNervosas = 0;
let qOCalmos = 0;
let qHAgressivos=0;
let qNervosos40 = 0;
let qCalmos18 = 0;


while (i < 3) {
    const idade = parseInt(prompt(`escreva sua idade: `));
    console.log(`Seu gênero, entre: `);
    console.log(`1--Homem\n`);
    console.log(`2--Mulher\n`);
    console.log(`3--Outro\n`);
    const sx = parseInt(prompt('Escolha a opção de gênero:'));
    console.log(`Escolha um humor entre:`);
    console.log(`1-Calmo\n`);
    console.log(`2-Nervoso\n`);
    console.log(`3-Agressivo\n`);
    const humorString = (prompt(`Escolha a opção de humor:`));
    const humor = Number(humorString);

if(humor == 1){
        qC++;
    }

if(sx== 2 && humor==2){
        qMNervosas++
    }
 if(sx== 1 && humor==1){
        qOCalmos++;
    }
 if (humor==3 && sx ==1){
        qHAgressivos++
    }
    if (humor==2 && idade>40){
        qNervosos40++
    }
if(humor==1 && idade <18){
        qCalmos18++
 }

    i++;
}
console.log(`\n pessoas calmas é ${qC}`);
console.log(`\n mulheres nervosas é ${qMNervosas}`);
console.log(`\n de OUTROS calmos é ${qOCalmos}`);
console.log(`\n de homens agressivos é ${qHAgressivos}`);
console.log(`\n nervosas acima dos 40 anos é ${qNervosos40}`);
console.log(`\n pessoas calmas acima dos 18 é ${qCalmos18}`);