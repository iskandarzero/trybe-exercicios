// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  // "percorra" se refere a estrutura de loop

  for(let i = 0; i < numbers.length; i += 1){
    // "imprima" se refere ao comando console.log
    console.log(numbers[i])
  }

// // // // 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  // Primeiro devemos criar uma variavel para o resultado da soma   
  soma = 0;

  // Para somar todos os valores, deveremos percorrer eles. Para isso, usaremos o loop for 
  for(let i = 0; i < numbers.length; i += 1){
    // agora devemos atribuir o valor da soma à variavel soma
    soma = soma + numbers[i]
  }
  // por fim, vamos imprimir os resultados
  console.log(soma)

// // 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// //   A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  // Primeiro devemos criar uma variavel para o resultado da soma e uma para a media   
  soma = 0;
  media = 0;

  // Para somar todos os valores, deveremos percorrer eles. Para isso, usaremos o loop for 
  for(let i = 0; i < numbers.length; i += 1){
    // agora devemos atribuir o valor da soma à variavel soma
    soma = soma + numbers[i]
  }

  // agora devemos divir o valor da soma pelo número de valores no Array
  media = soma / numbers.length

  // por fim, vamos imprimir os resultados
  console.log(media)
 
// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  // Primeiro devemos criar uma variavel para o resultado da soma e uma para a media   
  soma = 0;
  media = 0;

  // Para somar todos os valores, deveremos percorrer eles. Para isso, usaremos o loop for 
  for(let i = 0; i < numbers.length; i += 1){
    // agora devemos atribuir o valor da soma à variavel soma
    soma = soma + numbers[i]
  }

  // agora devemos divir o valor da soma pelo número de valores no Array
  media = soma / numbers.length
  
  // vamos criar um condicionador if para fazer a checagem
  if(media > 20){
    // para imprimir a mensagem usaremos o comando console.log
    console.log("Valor maior que 20")
  }
  // o else serve para caso a primeira condição falhe
  else{
    console.log("valor menor ou igual a 20")
  }
  
// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
  
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  // vamos criar uma variavel que contenha o primeiro numero da array
  let maiorNumero = numbers[0];

  // agora vamos iniciar a estrutura de repetição com o valor inicial de 1, para comparar do segundo valor em diante
  for(let i = 1; i < numbers.length; i += 1){
    // usamos a estrutura condicional para fazer a comparação
    if(numbers[i] > maiorNumero){
      // se a comparação for efetiva, se adiciona o valor na variavel
      maiorNumero = numbers[i]
    }
  }

  // por fim, imprimimos o valor
  console.log(maiorNumero)

  
// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  // primeiro criaremos uma variavel para receber o resultado da contagem
  let contagem = 0;

  // iniciamos a estrutura de repetição
  for(let i = 0; i < numbers.length; i += 1){
    // definimos uma adição para a variavel se o número for impar
    if(numbers[i] % 2 !== 0){
      contagem = contagem + 1
    }
  }

  // por fim, realizamos mais uma condicional para imprimir as mensagens
  let mensagem = contagem > 0 ? console.log(contagem):console.log("nenhum valor ímpar encontrado");
  
// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  // vamos criar uma variavel que contenha o primeiro numero da array
  let menorNumero = numbers[0];

  // agora vamos iniciar a estrutura de repetição com o valor inicial de 1, para comparar do segundo valor em diante
  for(let i = 1; i < numbers.length; i += 1){
    // usamos a estrutura condicional para fazer a comparação
    if(numbers[i] < menorNumero){
      // se a comparação for efetiva, se adiciona o valor na variavel
      menorNumero = numbers[i]
    }
  }
  
  // por fim, imprimimos o valor
  console.log(menorNumero)

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

  // primeiro criamos o array que irá receber os valores
  let contagem = []

  // e depois iniciamos o loop for
  for(let i = 1; i <= 25; i += 1){
    // adicionamos os valores no array
    contagem.push(i)
  }
  // e por fim imprimimos o resultado
  console.log(contagem);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

  // primeiro criamos o array que irá receber os valores
  let contagem = []
  // criamos nova array para receber a divisão
  let divisao = []

  // e depois iniciamos o loop for
  for(let i = 1; i <= 25; i += 1){
    // adicionamos os valores no array
    contagem.push(i)
  }

  // iniciamos outro loop para realizar a divisão
  for(let index = 0; index < contagem.length; index += 1){
    // adicionamos os valores no array
    divisao.push(contagem[index] / 2)
  }
  // e por fim imprimimos o resultado
  console.log(divisao);