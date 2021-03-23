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

