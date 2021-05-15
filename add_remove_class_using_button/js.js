console.clear();

const btn = document.querySelector(".article");




btn.addEventListener("click", (e) => {

if(e.target.tagName=="BUTTON"){
  
  if(e.target.getAttribute("data-action") == 'add')
          btn.classList.add("active");

  if(e.target.getAttribute("data-action") == 'remove')
          btn.classList.remove("active");

}


});