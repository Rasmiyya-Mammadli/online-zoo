let inpt=document.querySelector('.input-field')

inpt.innerHTML=100
let radios=document.querySelectorAll('.inside-scale div')
console.log(radios)
let radArr=[...radios]
let isClicked=false

radArr.forEach(rad=>rad.addEventListener('click',(e)=>{
   [...radArr].map(rad=>rad.classList.remove('clicked'))
   e.target.classList.add('clicked')
    radArr.forEach(rad=>{
        rad.classList.remove('click-inside')
    })
    if(e.target.classList.contains('dflt')){
        console.log('hi')
    }
    else{
        dflt.classList.remove('dflt')
    }
console.log(e.target.getAttribute('data-value'))
inpt.value=e.target.getAttribute('data-value')
isClicked=!isClicked

isClicked? e.target.classList.add('click-inside'):e.target.classList.remove('click-inside')


}))
let isMatches=false
let dflt=document.querySelector('.dflt')
inpt.addEventListener('keyup',(e)=>{
 
   radArr.forEach(rad=>{
    if(rad.getAttribute('data-value')==e.target.value){
       rad.classList.add('click-inside')
       rad.classList.add('clicked')
    }
    else{
        rad.classList.remove('click-inside')
        rad.classList.remove('clicked')
    }
   })
})
let news=document.querySelector('#news')
console.log(news)
news.addEventListener('keyup',(e)=>{
    if(!e.target.value.endsWith('com')){
        news.style.borderColor='#cf2222'
        news.style.boxShadow='0 0 10px #db1d26'
    }
   else if(e.key=='Enter'&&e.target.value.endsWith('com')){
        news.style.borderColor='green'
        news.style.boxShadow='0 0 10px green'
    }
})
let isSubmitted=false
let btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    isSubmitted=!isSubmitted
if(isSubmitted){
    
    btn.style.borderColor='green'
        btn.style.boxShadow='0 0 10px green'
}
else if(!isSubmitted){
    btn.style.borderColor='#cf2222'
        btn.style.boxShadow='0 0 10px #db1d26'
}
})


//burger menu


var topnav=document.querySelector('#myLinks')
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