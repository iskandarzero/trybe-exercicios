// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

  function detectaPalindromo(string){

    let reverseString = string.split("").reverse().join("")
    if(reverseString == string){
        return true
    }

    return false
  }

    console.log(detectaPalindromo('ovo'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

  function retornaIndice(array){

    let maiorNumero = [0]
    for(let i = 1; i < array.length; i += 1){
      if(maiorNumero < array[i]){
        maiorNumero = array[i]
      }
    }

    return array.indexOf(maiorNumero)
  }

  console.log(retornaIndice([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

  function retornaIndice(array){

    let menorNumero = [0]
    for(let i = 1; i < array.length; i += 1){
      if(menorNumero > array[i]){
        menorNumero = array[i]
      }
    }

    return array.indexOf(menorNumero)
  }

  console.log(retornaIndice([2, 4, 6, 7, 10, 0, -3]));
  
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  function retornaCaracteres(array){
    
    let array2 = [0];

    for(let i = 0; i < array.length; i += 1){
      if(array2.length < array[i].length){
        array2 = array[i]
      }
    }

    return array2
  }

  console.log(retornaCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
  
// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

  // NÃO ENTENDI

  function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }

  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

  function somaNumero(n){

    let total = 0;
    for(let i = 0; i <= n; i += 1){
      total += i
    }

    return total
  }

  console.log(somaNumero(5));

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

  // NÃO ENTENDI
  
  function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      console.log(palavra[palavra.length - fimPalavra.length + index]);
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }

  console.log(verificaFimPalavra('trybe', 'be')); 
  console.log(verificaFimPalavra('joaofernando', 'fernan'));