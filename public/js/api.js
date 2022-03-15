const generateCatButton = document.getElementById('cat-button');

generateCatButton.addEventListener('click', fetchPics);

function fetchPics() {
  let catsImgDiv = document.querySelector('.cats-image');
  catsImgDiv.innerHTML = ''

  fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) =>response.json())
  .then((data) => {
    let catsImgUrl = data[0].url
    let catsImgElement = document.createElement('img');
    catsImgElement.setAttribute('src', `${catsImgUrl}`);
    
    catsImgElement.classList.add('showcase')
    
    
    catsImgDiv.appendChild(catsImgElement);
  })
  .catch(err => console.log(err));
}
