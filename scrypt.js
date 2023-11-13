let burger = document.querySelector(".burger-menu");
let nav = document.querySelector(".main-nav");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

let inputText = document.querySelector('.inputText');
let sumbitForm = document.querySelector('.submitForm');
let information = document.querySelectorAll('.searchdiv');

    searhFunction=(text)=>{
      information.forEach((element)=>{
        if (element.textContent==text){
          element.style="animation:anim1 2s;";
        }
      })
    }
sumbitForm.addEventListener('click', (e)=>{
  e.preventDefault();
  searhFunction(inputText.value);
});


  
