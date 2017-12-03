var link  = document.querySelector('.write-us-btn');
var popup = document.querySelector('.feedback-wrapper');
var closePopup = document.querySelector('.feedback-popup-form-close');
var feedbackName = document.querySelector('.feedback [name=name]');
var feedbackEmail = document.querySelector('.feedback [name=email]');
var feedbackText = document.querySelector('.feedback [name=feedback-text]');
var form = document.querySelector('.feedback-popup-form');
var formWrapper = document.querySelector('.feedback');
var mapLink  = document.querySelector('.map');
var mapPopup = document.querySelector('.map-popup');
var closeMapPopup = mapPopup.querySelector('.map-popup-close');
var feature1 = document.querySelector('label.first-feature');
var feature2 = document.querySelector('label.second-feature');
var feature3 = document.querySelector('label.third-feature');

// Переключение фона у элементов списка преимуществ по клику

feature1.addEventListener('click', function (evt) {	
feature1.classList.add('features-btn-active');
feature2.classList.remove('features-btn-active');
feature3.classList.remove('features-btn-active');
});

feature2.addEventListener('click', function (evt) {	
feature2.classList.add('features-btn-active');
feature1.classList.remove('features-btn-active');
feature3.classList.remove('features-btn-active');
});

feature3.addEventListener('click', function (evt) {	
feature3.classList.add('features-btn-active');
feature1.classList.remove('features-btn-active');
feature2.classList.remove('features-btn-active');
});

//Всплывающая форма
link.addEventListener('click', function (evt) {
 evt.preventDefault();
 popup.classList.add('feedback-wrapper-show');
});

closePopup.addEventListener('click', function (evt) {
 evt.preventDefault();
 popup.classList.contains('feedback-wrapper-show');
 popup.classList.remove('feedback-wrapper-show');
 form.classList.remove('feedback-error');
});

form.addEventListener('submit', function (evt) {
 if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
 	evt.preventDefault();
  formWrapper.classList.remove('feedback-error');
  formWrapper.offsetWidth = popup.offsetWidth;
 	formWrapper.classList.add('feedback-error');
  
 }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("feedback-wrapper-show")) {
        popup.classList.remove('feedback-wrapper-show');
        form.classList.remove('feedback-error');
      }
    }
  });

//Всплывающая карта

mapLink.addEventListener('click', function (evt) {
 evt.preventDefault();
 mapPopup.classList.add('map-popup-show');
});

closeMapPopup.addEventListener('click', function (evt) {
 evt.preventDefault();
 mapPopup.classList.contains('map-popup-show');
 mapPopup.classList.remove('map-popup-show');
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("map-popup-show")) {
        mapPopup.classList.remove("map-popup-show");
      }
    }
  });