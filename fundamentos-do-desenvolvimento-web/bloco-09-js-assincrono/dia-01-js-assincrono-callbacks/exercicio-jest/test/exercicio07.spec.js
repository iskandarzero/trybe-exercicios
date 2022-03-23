const exercicio = require('../src/exercicio07')

// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

test('Test uppercase function', (done) => {
  exercicio.uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
});