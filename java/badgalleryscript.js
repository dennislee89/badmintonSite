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