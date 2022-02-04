// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  for(i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
  }

// // // // 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let soma = 0;
  for(i = 0; i < numbers.length; i += 1){
    soma = soma + numbers[i]
  }

  console.log(soma);

// // 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// //   A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let media = 0;
  
  for(i = 0; i < numbers.length; i += 1){
    media = media + numbers[i]
  }
  
  console.log(media / numbers.length)

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let media = 0;
    
  for(i = 0; i < numbers.length; i += 1){
    media = media + numbers[i]
  }

  if(media / numbers.length > 20){
    console.log("Valor maior que 20")
  }
  else{
    console.log("Valor menor ou igual a 20");
  }
  
// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
  
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let numeroMaior = numbers[0];

  for(let i = 1; i < numbers.length; i += 1){
    if(numbers[i] > numeroMaior)
    numeroMaior = numbers[i]
  }

  console.log(numeroMaior)
  
// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let teste = []

  for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 !== 0){
      teste.push(numbers[i])
    }
    else{
      console.log("Nenhum valor impar encontrado")
    }
  }

  console.log(teste)
  
// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let numeroMenor = numbers[0];

  for(let i = 1; i < numbers.length; i += 1){
    if(numbers[i] < numeroMenor)
    numeroMenor = numbers[i]
  }

  console.log(numeroMenor)

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

  let resultado = []
  let hehe = 0

  for(let i = 1; i <= 25; i += 1){
    hehe = hehe + 1
    resultado.push(hehe)
  }

  console.log(resultado)

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

  let resultado = [];
  let hehe = 0;
  let teste = 0; 
  let divisao = [];

  for(let i = 1; i <= 25; i += 1){
    hehe = hehe + 1
    resultado.push(hehe)
  }

  for(let a = 0; a < resultado.length; a += 1){
    teste = resultado[a] / 2
    divisao.push(teste)
  }

  console.log(divisao)

