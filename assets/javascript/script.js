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






var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}