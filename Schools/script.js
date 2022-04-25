
const dropdownbtn = document.querySelector('.dropdown__btn','.dropdown_btn');
const dropdownmenu = document.querySelector('.dropdown__menu','.dropdown_btn');
dropdownbtn.addEventListener('click', ()=> {
   dropdownmenu.classList.toggle("hide");
});
