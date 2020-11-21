function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
document.addEventListener("DOMContentLoaded", function(){
  var menu = document.getElementsByClassName("openmenu");
    if (menu !== undefined && menu.length == 1){
    menu[0].addEventListener('click', openNav);
    /*$(".openmenu").click(openNav);*/
  }
}); 
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
document.addEventListener("DOMContentLoaded", function(){
  var menu = document.getElementsByClassName("closemenu");
    if (menu !== undefined && menu.length == 1){
    menu[0].addEventListener('click', closeNav);
    /*$(".openmenu").click(openNav);*/
  }
});

function myFunction() {
  var dots = document.getElementByClassName("dots");
  var moreText = document.getElementByClassName("more");
  var btnText = document.getElementByClassName("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
