const tabLinks = document.getElementsByClassName("tab-links")
const tabContents = document.getElementsByClassName("tab-contents")
const sidemenu = document.getElementById("sidemenu")
const menuBar = document.getElementsByClassName("fa-bars")




function tabopen(tabname){
   for(tabLink of tabLinks){
    tabLink.classList.remove("active-links");
   }

   for(tabContent of tabContents){
    tabContent.classList.remove("active-tab");



   }
 
 event.currentTarget.classList.add("active-links")
 document.getElementById(tabname).classList.add("active-tab");
 

}

function openmenu(){
  sidemenu.style.right = "0";
  
}

function closemenu(){
  sidemenu.style.right = "-200px";
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav-menu").style.background = "black";
    
  } else {
    document.querySelector(".nav-menu").style.background = "none";
  }
}