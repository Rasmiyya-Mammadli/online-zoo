var topnav=document.querySelector('#myLinks')
 let isClicked=false
let icon=document.querySelector('.burgermenu')
topnav.style.display='none'
icon.addEventListener('click',()=>{
   isClicked=!isClicked
if(isClicked){
    
    topnav.style.display='block'
        
}
else if(!isClicked){
   topnav.style.display='none'
}
})


//testimnia carouse//

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*pets caruose*/
/*
let slideNumber=1;
showSlidesNumber(slideNumber);

function plusSlidesNumber(n) {
  showSlidesNumber(slideNumber += n);
 
}
function showSlidesNumber(n) {
  
  let i;
  
if ( n > slide.length) {slideNumber = 1}
if (n < slide.length) {slideNumber = slide.length}
for (i = 0; i < slide.length; i++) {
  slide[i].style.display = "none";
}
 slide[slideNumber-1].style.display = "block";
}*/

/*       jjjjjjjjjjjjjj*/


//popup for 640 and 320px//
let slide=document.getElementsByClassName('myAnimals');
 isClicked=false;
var popButton=document.querySelector('.darkened-area');
popButton.addEventListener('click',()=>{
    if(!isClicked){popButton.style.display='none'
    review1.style.display='block'}
    else{popButton.style.display='block'}
})

var popButton2=document.querySelector('.darkened-area2');
popButton2.addEventListener('click',()=>{
    if(!isClicked){popButton2.style.display='none'
    review2.style.display='block'}
    else{popButton2.style.display='block'}
})

var popButton3=document.querySelector('.darkened-area3');
popButton3.addEventListener('click',()=>{
    if(!isClicked){popButton3.style.display='none'
    review3.style.display='block'}
    else{popButton3.style.display='block'}
})
var review1=document.querySelector('.review1')
var review2=document.querySelector('.review2')
var review3=document.querySelector('.review3')
review1.addEventListener('click',()=>{
  if(!isClicked){review1.style.display='none';
  popButton.style.display='block'
}
})
review2.addEventListener('click',()=>{
  if(!isClicked){review2.style.display='none';
  popButton2.style.display='block'
}
})
review3.addEventListener('click',()=>{
  if(!isClicked){review3.style.display='none';
  popButton3.style.display='block'
}
})


//jhkgkkkkk////
var eftbtn=document.querySelector('.left-button')
var rightbtn=document.querySelector('.right-button')
var imgs=[...document.querySelectorAll('.myAnimals img')]
var srcs=["/online-zoo/docs/foto-card1.png","/online-zoo/docs/foto-card2.png","/online-zoo/docs/foto-card3.png","/online-zoo/docs/foto-card4.png","/online-zoo/docs/foto-card5.png","/online-zoo/docs/foto-card6.png"]
console.log(imgs)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }imgs.className='fade'
}

eftbtn.addEventListener('click',()=>{
  document.querySelector('.myAnimals').innerHTML=''
  shuffleArray(srcs)
  srcs.forEach(sr=> document.querySelector('.myAnimals').innerHTML+=`<img src=${sr} alt="">`)
console.log(srcs)

})

rightbtn.addEventListener('click',()=>{
  document.querySelector('.myAnimals').innerHTML=''
  shuffleArray(srcs)
  srcs.forEach(sr=> document.querySelector('.myAnimals').innerHTML+=`<img src=${sr} alt="">`)
console.log(srcs)

})