const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.close-button');
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
const imagePopup = document.querySelector('.image-popup');
const closeButtonImagePopup = document.querySelector('#close-button-image-popup');

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
        const imageElement = cardsElement.querySelector('.elements__image');
        imageElement.src = item.link;
        cardsElement.querySelector('.elements__title').textContent = item.name;
        cardsContainer.append(cardsElement);
        const deleteButton = cardsElement.querySelector('.elements__delete-button');
        deleteButton.addEventListener('click', handleDeleteButtonClick);
        const likeButton = cardsElement.querySelector('.elements__like-button');
        likeButton.addEventListener('click', handleLikeButtonClick);
        imageElement.addEventListener('click', handleOpenImageClick);
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

function handleDeleteButtonClick(evt) {
    const button = evt.target;
    const card = button.closest('.elements__element');
    const deletedCardIndex = Array.from(cardsContainer.children).indexOf(card);
    initialCards.splice(deletedCardIndex, 1);
    card.remove();
}

function handleLikeButtonClick(evt) {
    const button = evt.target;
    button.classList.toggle('elements__like-button');
    button.classList.toggle('elements__like-button_active');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function fillProfilePopupData() {
    inputFieldName.value = profileName.textContent;
    inputFieldOccupation.value = profileDescription.textContent;
}

function sendProfilePopupData (evt) {
    evt.preventDefault();
    profileName.textContent = inputFieldName.value;
    profileDescription.textContent = inputFieldOccupation.value;
    popup.classList.remove('popup_opened');
}

function handleOpenImageClick(evt) {
    const image = evt.target;
    openPopup(imagePopup);
    const imageLink = imagePopup.querySelector('.image-popup__image');
    const imageTitle = imagePopup.querySelector('.image-popup__title');
    imageLink.src = image.src;
    imageTitle.textContent = image.closest('.elements__element').querySelector('.elements__title').textContent;
}

addCardsButton.addEventListener('click', () => openPopup(cardsPopup));

closeButtonCardsPopup.addEventListener('click', () => closePopup(cardsPopup));

editButton.addEventListener('click', () => {
  fillProfilePopupData();
  openPopup(popup);
})

closeButton.addEventListener('click', () => closePopup(popup));

formSent.addEventListener('submit', sendProfilePopupData);

cardsFormSent.addEventListener('submit', addCard);

closeButtonImagePopup.addEventListener('click', () => {
  closePopup(imagePopup)});

renderCards();
