const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfilePopup = document.querySelector('#close-button-profile-popup');
const profileEditPopup = document.querySelector('#profile-popup');
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
const imagePopup = document.querySelector('.image-popup');
const closeButtonImagePopup = document.querySelector('#close-button-image-popup');
const imageLink = imagePopup.querySelector('.image-popup__image');
const imageTitle = imagePopup.querySelector('.image-popup__title');

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

function createCard(name, link) {
    const newCard = cardsTemplate.querySelector('.elements__element').cloneNode(true);
    const imageElement = newCard.querySelector('.elements__image');
    const titleElement = newCard.querySelector('.elements__title');
    imageElement.src = link;
    titleElement.textContent = name;
    const deleteButton = newCard.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    const likeButton = newCard.querySelector('.elements__like-button');
    likeButton.addEventListener('click', handleLikeButtonClick);
    imageElement.addEventListener('click', handleOpenImageClick);
    return newCard;
}

function renderInitialCards() {
  initialCards.forEach(function(item) {
    const cardElement = createCard(item.name, item.link);
    cardsContainer.append(cardElement);
  })
}

function addNewCard (evt) {
    evt.preventDefault();
    const cardElement = createCard(inputFieldCardTitile.value, inputFieldCardLink.value);
    cardsContainer.prepend(cardElement);
    inputFieldCardTitile.value = '';
    inputFieldCardLink.value = '';
    closePopup(cardsPopup);
}

function handleDeleteButtonClick(evt) {
    const button = evt.target;
    const card = button.closest('.elements__element');
    card.remove();
}

function handleLikeButtonClick(evt) {
    const button = evt.target;
    button.classList.toggle('elements__like-button_active');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function fillProfileForm() {
    inputFieldName.value = profileName.textContent;
    inputFieldOccupation.value = profileDescription.textContent;
}

function sendProfileForm (evt) {
    evt.preventDefault();
    profileName.textContent = inputFieldName.value;
    profileDescription.textContent = inputFieldOccupation.value;
    closePopup(profileEditPopup);
}

function handleOpenImageClick(evt) {
    const image = evt.target;
    openPopup(imagePopup);
    imageLink.src = image.src;
    imageLink.alt = image.alt;
    imageTitle.textContent = image.closest('.elements__element').querySelector('.elements__title').textContent;

}

addCardsButton.addEventListener('click', () => openPopup(cardsPopup));

closeButtonCardsPopup.addEventListener('click', () => {
  closePopup(cardsPopup)
  inputFieldCardTitile.value = '';
  inputFieldCardLink.value = '';
});

editButton.addEventListener('click', () => {
  fillProfileForm();
  openPopup(profileEditPopup);
})

closeButtonProfilePopup.addEventListener('click', () => closePopup(profileEditPopup));

formSent.addEventListener('submit', sendProfileForm);

cardsFormSent.addEventListener('submit', addNewCard);

closeButtonImagePopup.addEventListener('click', () => {
  closePopup(imagePopup)});

renderInitialCards();
