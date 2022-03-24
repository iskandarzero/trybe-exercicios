const api_URL = 'https://api.coincap.io/v2/assets';

const fetchCoin = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(api_URL, myObject).then(response => response.json()).then(data => {
    console.log(data);
    const coinContainer = document.querySelector('#coinsList');
    for (let i = 0; i < 10; i += 1) {
      const liElement = document.createElement('li');
      liElement.innerText = `${data.data[i].id} (${data.data[i].symbol}): ${data.data[i].priceUsd}`;
      coinContainer.appendChild(liElement);
    }
  });
}

window.onload = () => fetchCoin();