const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const saveButton = document.querySelector('.popup__save-button');
const inputFieldName = document.querySelector('#popup__input_line_name');
const inputFieldOccupation = document.querySelector('#popup__input_line_occupation');
const formSent = document.querySelector('.popup__container');

function openPopup() {
    popup.classList.add('popup_opened');
    inputFieldName.value = profileName.textContent;
    inputFieldOccupation.value = profileDescription.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened'); 
}

function sendForm (evt) {
    evt.preventDefault();
    profileName.textContent = inputFieldName.value;
    profileDescription.textContent = inputFieldOccupation.value;
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup); 

closeButton.addEventListener('click', closePopup); 

formSent.addEventListener('submit', sendForm);
