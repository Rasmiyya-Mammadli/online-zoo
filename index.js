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