const exercicio = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (a === NaN || b === NaN || c === NaN) {
      reject(new Error('Informe apenas números'))
    }

    const calculo = (a + b) * c;

    if (calculo < 50) reject(new Error('Valor muito baixo'));

    resolve(calculo);
  })

  return promise;
}

const generateNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const main = async () => {
  // const a = Math.floor(Math.random() * 100 + 1);
  // const b = Math.floor(Math.random() * 100 + 1);
  // const c = Math.floor(Math.random() * 100 + 1);
  const randomNumbers = Array.from({ length: 3 }).map(generateNumber);

  // exercicio(...randomNumbers)
  // .then((data) => console.log(`O resultado da conta é ${data}`))
  // .catch((err) => console.error(err.message));

  try {
    const data = await exercicio(...randomNumbers);
    console.log(`O resultado da conta é ${data}`);
  } catch (err) {
    console.error(err.message)
  }
}

main();