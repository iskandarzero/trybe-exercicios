// 1 - crie um algoritmo que retorne o fatorial de 10.
  
  let fatorial = 10;

  for(let i = fatorial - 1; i > 0; i -= 1){
    fatorial *= i
  }

  console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

  let word = 'Dungeons & Dragons';
  let word2 = [];

  for(let i = word.length; i >= 0; i -= 1){
    word2.push(word[i])
  }

  console.log(word2.join(''))

// 3- Considere o array de strings abaixo:

  let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

  let menorPalavra = array[0];

  for(let i = 1; i < array.length; i += 1){
    if(menorPalavra.length > array[i].length){
      menorPalavra = array[i]
    }
  }

  console.log(menorPalavra);

  let array = ['java', 'javascript', 'python', 'html', 'css'];
  let maiorPalavra = array[0];

  for(let i = 1; i < array.length; i += 1){
    if(maiorPalavra.length < array[i].length){
      maiorPalavra = array[i]
    }
  }

  console.log(maiorPalavra);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

  let maiorNumeroPrimo = 0
  teste = [];

  for(let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1){
    let primo = true;
    for(let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1){
      if(numeroAtual % divisorAtual == 0) {
        primo = false
      }
    }
    if(primo){
      maiorNumeroPrimo = numeroAtual
    }
  }

  console.log(maiorNumeroPrimo);

  // NÃO ENTENDI