/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show'); 
      }
    }
  }
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};


/*modal image*/ 
var modal = document.getElementById('myModal');
var frame = document.getElementsByClassName('holder')[0];
var modalpic = document.getElementById('img01');

frame.addEventListener('click', function(el) {
  var clicked = el.target;
  if (clicked.className === 'pics') {
    modal.style.display = "block";
    modalpic.src = clicked.src;
  } else {
    return false;
  }
});



					
				/*Side Nav*/

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//flip card// 
function flip(){
  document.getElementById('card').classList.toggle('flip');
}

function flip2(){
  document.getElementById('card2').classList.toggle('flip');
}

function flip3(){
  document.getElementById('card3').classList.toggle('flip');
}


