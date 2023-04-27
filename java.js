var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Automatically advance the slideshow every 5 seconds
setInterval(function() {
  plusSlides(1);
}, 5000);


// Find popup'en og luk-knappen
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".submit-btn");

// Vis popup'en når siden indlæses
window.addEventListener("load", function(){
  popup.style.display = "block";
});

// Luk popup'en når brugeren klikker på luk-knappen
closeBtn.addEventListener("click", function(){
  popup.style.display = "none";
});

// Luk popup'en når brugeren klikker på tilmeld-knappen
submitBtn.addEventListener("click", function(){
  popup.style.display = "none";
});

// Luk popup'en når brugeren klikker uden for popup'en
window.addEventListener("click", function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});