// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

  let n = 3;
  let simbolo = '*';
  let espaco = '';

  // ao iniciar essa repetição. a intenção é de atribuir a variavel 'espaco' o valor de * equivalente a "n", ou seja, apenas o valor da sua última iteração 
  for(let index = 0; index < n; index += 1){
      espaco = espaco + simbolo;
  }
  // esse segundo loop serve para imprimir "n" vezes o valor da viariavel "espaco"
  for(let index = 0; index < n; index += 1){
      console.log(espaco)
  }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

  let n = 9;
  let simbolo = '*';
  let espaco = '';

  // no exercicio em questão não é necessário guardar o valor da última iteração apenas, mas sim, imprimir o valor de todas as iterações
  for(let index = 0; index < n; index += 1){
      espaco += simbolo
      console.log(espaco);
  }
  
// 3- Agora inverta o lado do triângulo. Por exemplo:

  // let n = 5;
  // let symbol = '*';
  // let inputLine = '';
  // let inputPosition = n;

  // for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
  //     if (columnIndex < inputPosition) {
  //       inputLine = inputLine + ' ';
  //     } else {
  //       inputLine = inputLine + symbol;
  //     }
  //   }
  //   console.log(inputLine);
  //   inputLine = '';
  //   inputPosition -= 1;
  // };

  // NÃO ENTENDI