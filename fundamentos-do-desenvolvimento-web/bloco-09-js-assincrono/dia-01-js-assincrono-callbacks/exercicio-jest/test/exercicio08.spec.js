// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../src/exercicio08");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    const callback = (error, result) => {
      expect(error).toEqual(expectedError);
      done();
    }
    
    getPokemonDetails((pokemon) => pokemon.name === 'Totodile', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedResult = `Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf`;

    const callback = (error, result) => {
      expect(result).toEqual(expectedResult);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});