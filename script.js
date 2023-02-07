let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let saveButton = document.querySelector('.popup__save-button');
let inputFields = document.querySelectorAll('.popup__input');
let form = document.querySelector('.popup__container');

function savePopup() {
    popup.classList.add('popup_opened');
    inputFields[0].value = profileName.textContent;
    inputFields[1].value = profileDescription.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened'); 
}

function sendForm (evt) {
    evt.preventDefault();
    for (let i = 0; i < inputFields.length; i = i + 1) {
        profileName.textContent = inputFields[0].value;
        profileDescription.textContent = inputFields[1].value;
    }
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', savePopup); 

closeButton.addEventListener('click', closePopup); 

form.addEventListener('submit', sendForm);
