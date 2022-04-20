
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;
        // Partie about
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


        
// Javascript for image slider manual navigation
var manualNav = function(manual){
slides.forEach((slide) => {
    slide.classList.remove('active');
        
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
});
        
slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
        
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});
        
// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;
        
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
        
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();