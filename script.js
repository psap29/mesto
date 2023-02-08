const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const saveButton = document.querySelector('.popup__save-button');
const inputFields = document.querySelectorAll('.popup__input');
const form = document.querySelector('.popup__container');

function openPopup() {
    popup.classList.add('popup_opened');
    inputFields[0].value = profileName.textContent;
    inputFields[1].value = profileDescription.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened'); 
}

function sendForm (evt) {
    evt.preventDefault();
    profileName.textContent = inputFields[0].value;
    profileDescription.textContent = inputFields[1].value;
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup); 

closeButton.addEventListener('click', closePopup); 

form.addEventListener('submit', sendForm);
