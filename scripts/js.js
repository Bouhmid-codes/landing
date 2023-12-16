/* eslint-disable import/extensions */
import { languages } from "../data/languages.js";
import { teachers } from "../data/teachers.js";

// inject language html cards

let languagesCardsHtml = ``;

languages.forEach((language) => {
  languagesCardsHtml += `
  <div class="card-language" data-id= "${language.id}">
  <img src="${language.image}">
  <h3>${language.name}</h3>
  <p>${language.catchPhrase}</p>
  </div>`;
});

document.querySelector('#cards-languages')
  .innerHTML = languagesCardsHtml;

const languageCardElements = document.querySelectorAll('.card-language');


languageCardElements.forEach((card) => {
  let hoverImageUrl = '';
  languages.forEach((language) => {
    if (card.dataset.id === String(language.id)) {
      hoverImageUrl = language.hoverImg;
    }
  });
  const hoverStyle = `background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%), url(${hoverImageUrl});
  background-size: cover;
  background-position: center;
  color: white;
  text-shadow: 0 0 20px black;
  font-weight: bolder
  `;
  card.addEventListener('mouseover', () => { card.style = hoverStyle; });
  card.addEventListener('mouseout', () => { card.style = 'none'; });
});


// inject teacher html cards

let teachersCardHtml = '';

teachers.forEach((teacher) => {
  teachersCardHtml += `
  <div class="card-profile"">
    <div class = "card-profile-img" style="background-image: url(${teacher.photo})"></div>
      <h3>${teacher.name}</h3>
      <p>${teacher.hobbies}</p>
  </div>`;
});

document.querySelector('#cards-teachers')
  .innerHTML = teachersCardHtml;
