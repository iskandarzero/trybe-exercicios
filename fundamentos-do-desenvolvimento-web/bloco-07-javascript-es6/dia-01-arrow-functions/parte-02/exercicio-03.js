window.onload = () => {
  const counterBtn = document.querySelector('#counterBtn');
  const counter = document.querySelector('#counter');

  counterBtn.addEventListener('click', () => {
    numero = Number(counter.innerText);
    numero += 1;
    counter.innerText = numero;
  })
};