// 1 -Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

//entrada
let numbers = 0;

//processamento e saida
for(let index = 1; index < 151; index += 1){
    if(index % 3 == 0){
        numbers = numbers + 1;
    }
}
if(numbers == 50){
    console.log("mensagem secreta")
}
 
//3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

//entrada
let player1 = 'papel';
let player2 = 'papel'; 

//precessamento e saída
if(player1 == player2){
    console.log('Empate');
}
else if(player1 == 'pedra' && player2 == 'tesoura'){
    console.log('Player 1 vence');
}
else if(player1 == 'tesoura' && player2 == 'papel'){
    console.log('Player 1 vence');
}
else if(player1 == 'papel' && player2 == 'pedra'){
    console.log('Player 1 vence');
}
else{
    console.log('Player 2 vence');
}
//4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// entrada

let age = 19;

// processamento e saida

let idade = age >= 18 ? console.log("A pessoa é maior de idade"):console.log("A pessoa não é maior de idade");

// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.//  

// entrada

let carolzita = 14;
let murilo = 15;
let baeta = 16;
let criancas = [carolzita, murilo, baeta]
let comparacao = criancas[0]

//processamento e saída

for(index = 1; index < criancas.length; index += 1){
    if(comparacao > criancas[index])
    comparacao = criancas[index]
}
 console.log(comparacao);