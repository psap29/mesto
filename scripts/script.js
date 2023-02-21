const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const saveButton = document.querySelector('.popup__save-button');
const inputFieldName = document.querySelector('#popup__input_line_name');
const inputFieldOccupation = document.querySelector('#popup__input_line_occupation');
const formSent = document.querySelector('.popup__container');
const cardsTemplate = document.querySelector('#elements-template').content;
const cardsContainer = document.querySelector('.elements');
const addCardsButton = document.querySelector('.profile__add-button');
const cardsPopup = document.querySelector('#cards-popup');
const closeButtonCardsPopup = document.querySelector('#close-button-cards-popup');
const inputFieldCardTitile = document.querySelector('#popup__input_line_title');
const inputFieldCardLink = document.querySelector('#popup__input_line_link');
const cardsFormSent = document.querySelector('#popup_cards_container');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function renderCards(items) {
    cardsContainer.innerHTML = '';
    initialCards.forEach(function (item) {
        const cardsElement = cardsTemplate.querySelector('.elements__element').cloneNode(true);
        cardsElement.querySelector('.elements__image').src = item.link;
        cardsElement.querySelector('.elements__title').textContent = item.name;
        cardsContainer.append(cardsElement);
        const deleteButton = cardsElement.querySelector('.elements__delete-button');
        deleteButton.addEventListener('click', handleDeleteButtonClick);
        const likeButton = cardsElement.querySelector('.elements__like-button');
        likeButton.addEventListener('click', handleLikeButtonClick); 
    })
}

function addCard (evt) {
    evt.preventDefault();
    initialCards.unshift({name: inputFieldCardTitile.value, link: inputFieldCardLink.value});
    inputFieldCardTitile.value = '';
    inputFieldCardLink.value = '';
    cardsPopup.classList.remove('popup_opened');
    renderCards(initialCards);
}

function handleDeleteButtonClick(event) {
    console.log(event);
    const button = event.target;
    const card = button.closest('.elements__element');
    card.remove();
}

function handleLikeButtonClick(event) {
    console.log(event);
    const button = event.target;
    button.classList.toggle('elements__like-button');
    button.classList.toggle('elements__like-button_active');
}

function openProfilePopup() {
    popup.classList.add('popup_opened');
    inputFieldName.value = profileName.textContent;
    inputFieldOccupation.value = profileDescription.textContent;
}

function closeProfilePopup() {
    popup.classList.remove('popup_opened'); 
}

function sendProfileForm (evt) {
    evt.preventDefault();
    profileName.textContent = inputFieldName.value;
    profileDescription.textContent = inputFieldOccupation.value;
    popup.classList.remove('popup_opened');
}

function openCardsPopup() {
    cardsPopup.classList.add('popup_opened');
}

function closeCardsPopup() {
    cardsPopup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openProfilePopup); 

closeButton.addEventListener('click', closeProfilePopup); 

formSent.addEventListener('submit', sendProfileForm);

addCardsButton.addEventListener('click', openCardsPopup);

cardsFormSent.addEventListener('submit', addCard);

closeButtonCardsPopup.addEventListener('click', closeCardsPopup);

renderCards();
