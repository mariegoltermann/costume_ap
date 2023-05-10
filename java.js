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


// burgermenu
const burgermenu = document.getElementById("burgermenu");
const nav = document.getElementById("nav-list");

burgermenu.addEventListener("click", () => {
  burgermenu.classList.toggle("active");

  if (burgermenu.classList.contains("active")) {
    burgermenu.textContent = "×";
    nav.style.display = "flex";
  } else {
    burgermenu.textContent = "☰";
    nav.attributes.removeNamedItem("style");
  }
});
