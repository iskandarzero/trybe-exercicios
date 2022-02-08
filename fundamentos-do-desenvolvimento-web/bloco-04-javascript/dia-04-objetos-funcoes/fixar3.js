// CALCULADORA

  function soma (a, b){
      return a + b
  }

  console.log(soma(4, 29))

  //-------------------------------

  function subtracao (a, b){
      return a - b
  }

  console.log(subtracao(42, 29))

  //-------------------------------

  function multiplicacao (a, b){
      return a * b
  }

  console.log(multiplicacao(2, 5));

  //-------------------------------

  function divisao (a, b){
      return a / b
  }

  console.log(divisao(50, 5));

  //-------------------------------

  function modulo (a, b){
      return a % b
  }

  console.log(modulo(50, 5));

// MAIOR DE DOIS NÚMEROS

  function comparaMaior(a, b){
    if(a > b){
      return a + " é o numero maior"
    }

    return b + " é o numero maior"
  }

  console.log(comparaMaior(9, 10));

// MAIOR DE TRÊS NÚMEROS

  function comparaMaiorTrio(a, b, c){
    if(a > b && a > c){
      return a + " é o numero maior"
    }
    else if(b > a && b > c){
      return b + " é o numero maior"
    }

    return c + " é o numero maior"
  }

console.log(comparaMaiorTrio(93, 100, 18));

// POSITIVO E NEGATIVO

  function checaPositivo(n){
    if(n == 0){
      return "zero"
    }
    else if(n < 0){
      return "negativo"
    }
    return "positivo"
  }

  console.log(checaPositivo(-10))

// ÂNGULOS DE UM TRIÂNGULO

  function comparaAngulos(angulo1, angulo2, angulo3){
    if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
      return "Ângulo inválido"
    }
    else if(angulo1 + angulo2 + angulo3 !== 180){
      return false
    }

    return true
  }

  console.log(comparaAngulos(80, 60 ,40));