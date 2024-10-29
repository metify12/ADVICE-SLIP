window.addEventListener('DOMContentLoaded', FetchData);
const adTitle = document.querySelector('#ad-id');
const adBody = document.querySelector('#ad-body');
const dice = document.querySelector('#dice');
async function FetchData() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const json = await response.json();
  console.log(json);
  adTitle.innerText = `Advice #${json.slip.id}`;
  adBody.innerText = `"${json.slip.advice}"`;
}
dice.addEventListener('click', FetchData);

