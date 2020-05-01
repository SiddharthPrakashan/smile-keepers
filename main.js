function responsiveNavbar() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function clickToCopy() {
  var copyText = document.getElementById("number");
  copyText.select();
  copyText.setSelectionRange(0, 10)
  document.execCommand("copy");
  alert("Number Copied to Clipboard");
}

var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" live", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " live";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}