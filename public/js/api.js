function fetchApiData() {
  fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
      const modal = document.querySelector('.modal');
      const p = document.createElement('p');
      const createPhrase = (p.innerHTML = data.activity);

      modal.innerHTML += `${createPhrase}<br>`;
    });
}
