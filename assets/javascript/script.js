// curtain navbar - W3Schools tutorial

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
document.addEventListener("DOMContentLoaded", function(){
  var menu = document.getElementsByClassName("openmenu");
    if (menu !== undefined && menu.length == 1){
    menu[0].addEventListener('click', openNav);
  }
}); 
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
document.addEventListener("DOMContentLoaded", function(){
  var menu = document.getElementsByClassName("closemenu");
    if (menu !== undefined && menu.length == 1){
    menu[0].addEventListener('click', closeNav);
  }
});

// Back to top on scroll function - W3Schools tutorial

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// read more read less

function readMore(info) {
    let dots = document.querySelector(`.card[data-info="${info}"] .dots`);
    let moreText = document.querySelector(`.card[data-info="${info}"] .more`); 
    let btnText = document.querySelector(`.card[data-info="${info}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less..."; 
        moreText.style.display = "inline";
    }
}

