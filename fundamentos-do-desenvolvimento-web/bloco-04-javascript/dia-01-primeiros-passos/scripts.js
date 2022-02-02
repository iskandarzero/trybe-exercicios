// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//   Adição (a + b)
//   Subtração (a - b)
//   Multiplicação (a * b)
//   Divisão (a / b)
//   Módulo (a % b)

  const a = 42;
  const b = 32;

// Adição

  const adicao = a + b;
  console.log(adicao);

// Subtração

  const subtracao = a - b;
  console.log(subtracao);

// Multiplicação

  const multiplicacao = a * b;
  console.log(multiplicacao);

// Divisão

  const divisao = a / b;
  console.log(divisao);

// Módulo

  const modulo = a % b;
  console.log(modulo);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

  const a = 42;
  const b = 32;

  if(a > b){
    console.log(a)
  }
  else{
    console.log(b)
  }

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

  const a = 32;
  const b = 22;
  const c = 42;

  if(a > b && a > c){
    console.log(a)
  }
  else if(b > a && b > c){
    console.log(b)
  }
  else{
    console.log(c)
  }

// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

  const valor = 3;

  if(valor > 0){
    console.log("positive")
  }
  else if(valor < 0){
    console.log("negative")
  }
  else{
    console.log("zero")
  }

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//   Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

//   Um ângulo será considerado inválido se não tiver um valor positivo.

  const angulo1 = 60;
  const angulo2 = 60;
  const angulo3 = 60;

  if(angulo1 + angulo2 + angulo3 == 180){
    console.log("true")
  }
  else if(angulo1 + angulo2 + angulo3 > 0){
    console.log("inválido")
  }

  else{
    console.log("false")
  }

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//   Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//   Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

//   Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

//   Exemplo: bishop (bispo) -> diagonals (diagonais)

  const peca = "DAMA";

  if(peca == "rei" || peca == "REI"){
    console.log("Horizontal, Vertical e Diagonal, apenas uma casa")
  }
  else if(peca == "dama" || peca == "DAMA"){
    console.log("Horizontal, Vertical e Diagonal, em quantas casas optar")
  }
  else  if(peca == "bispo" || peca == "BISPO"){
    console.log("Diagonais")
  }
  else if(peca == "cavalo" || peca == "CAVALO"){
    console.log("Em forma de L");
  }
  else if(peca == "torre" || peca == "TORRE"){
    console.log("Horizontal e Vertical")
  }
  else if(peca == "peão" || peca == "PEÃO"){
    console.log("Pra frente na horizontal, apenas uma casa")
  }
  else{
  console.log("Peça não existe")
  }

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

  const porcentagem = 0;

  if(porcentagem >= 90 && porcentagem <= 100){
    console.log("Nota A")
  }
  else if(porcentagem >= 80 && porcentagem < 90){
    console.log("Nota B")
  }
  else if(porcentagem >= 70 && porcentagem < 80){
    console.log("Nota C")
  }
  else if(porcentagem >= 60 && porcentagem < 70){
    console.log("Nota D")
  }
  else if(porcentagem >= 50 && porcentagem < 60){
    console.log("Nota E")
  }
  else if(porcentagem < 50 && porcentagem >= 0){
    console.log("Nota F")
  }
  else{
    console.log("Erro")
  }

// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

//   Bonus: use somente um if.

  const a = -30;
  const b = -23;
  const c = 10;

  if(a > 0|| b > 0|| c > 0){
    console.log("true")
  }
  else{
    console.log("false")
  }

// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
  
// Bonus: use somente um if.

  const a = 31;
  const b = 21;
  const c = 11;

  if((a % 2) != 0||(b % 2) != 0||(c % 2) != 0){
    console.log("true")
  }
  else{
    console.log("false")
  }

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
  
  // Atente que, sobre o custo do produto, incide um imposto de 20%.
  
  // Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
  
  // O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    
    //   valorCustoTotal = valorCusto + impostoSobreOCusto
      
    //   lucro = valorVenda - valorCustoTotal (lucro de um produto)

      const valorVenda = 30;
      const custoProduto = 16;
      const imposto = custoProduto * 0.20;
      const custoTotal = imposto + custoProduto;

      if(valorVenda == 0 || custoProduto == 0){
        console.log("Erro")
      }
      else{
        console.log(valorVenda - custoTotal)
      }

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

  // A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    // INSS (Instituto Nacional do Seguro Social)
      // Salário bruto até R$ 1.556,94: alíquota de 8%
      // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
      // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
      // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    // IR (Imposto de Renda)
      // Até R$ 1.903,98: isento de imposto de renda
      // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
      // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
      // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
      // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
  // O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
  // Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
  // Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    // R$ 2.670,00: salário com INSS já deduzido;
    // 7.5%: alíquota de imposto de renda;
    // R$ 142,80 parcela a se deduzir do imposto.
  // Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
  // O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

  // Resultado: R$ 2.612,55.

  // Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

  const salarioBruto =3000;
  let impostoINSS;
  let impostoIR;
  let salarioINSS;
  let salarioIR;
  let deducaoIR;

  if(salarioBruto <= 1556.94){
    impostoINSS = salarioBruto * 0.08;
    salarioINSS = salarioBruto - impostoINSS
  }
  else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    impostoINSS = salarioBruto * 0.09;
    salarioINSS = salarioBruto - impostoINSS
  }
  else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    impostoINSS = salarioBruto * 0.11;
    salarioINSS = salarioBruto - impostoINSS
  }
  else if(salarioBruto > 5189.82){
    salarioINSS = salarioBruto - 570.88;
  }

  if(salarioINSS <= 1903.98){
    salarioIR = salarioINSS;
    console.log(salarioIR);
  }
  else if(salarioINSS > 1903.98 && salarioINSS <= 2826.65){
    impostoIR = salarioINSS * 0.075;
    deducaoIR = impostoIR - 142.80
    salarioIR = salarioINSS - deducaoIR
    console.log(salarioIR);
  }
  else if(salarioINSS > 2826.65 && salarioINSS <= 3751.05){
    impostoIR = salarioINSS * 0.15;
    deducaoIR = impostoIR - 354.80
    salarioIR = salarioINSS - deducaoIR
    console.log(salarioIR);
  }
  else if(salarioINSS > 3751.05 && salarioINSS <= 4664.68){
    impostoIR = salarioINSS * 0.225;
    deducaoIR = impostoIR - 636.13
    salarioIR = salarioINSS - deducaoIR
    console.log(salarioIR);
  }
  else if(salarioINSS > 4.664,68){
    impostoIR = salarioINSS * 0.275;
    deducaoIR = impostoIR - 869,36
    salarioIR = salarioINSS - deducaoIR
    console.log(salarioIR);
  }