// keyboard listener
var audiow =new Audio("sounds/tom-1.mp3");
var audioa =new Audio("sounds/tom-2.mp3");
var audios =new Audio("sounds/tom-3.mp3");
var audiod =new Audio("sounds/tom-4.mp3");
var audioj =new Audio("sounds/snare.mp3");
var audiok =new Audio("sounds/crash.mp3");
var audiol =new Audio("sounds/kick-bass.mp3");


// button click

document.querySelector('.w').onclick=function(){
  audiow.play();
}
document.querySelector('.a').onclick=function(){
  audioa.play();
}
document.querySelector('.s').onclick=function(){
  audios.play();
}
document.querySelector('.d').onclick=function(){
  audiod.play();
}
document.querySelector('.j').onclick=function(){
  audioj.play();
}
document.querySelector('.k').onclick=function(){
  audiok.play();
}
document.querySelector('.l').onclick=function(){
  audiol.play();
}
// keyboard click
  document.addEventListener('keypress', (e)=> {
    if (e.key === 'W' || e.key === 'w') {
      e.preventDefault();
      // code for enter
      audiow.play();
    }else if(e.key === 'A' || e.key === 'a'){
      e.preventDefault();
      audioa.play();
    }else if(e.key === 'S' || e.key === 's'){
      e.preventDefault();
      audios.play();
    }else if(e.key === 'D' || e.key === 'd'){
      e.preventDefault();
      audiod.play();
    }else if(e.key === 'J' || e.key === 'j'){
      e.preventDefault();
      audioj.play();
    }else if(e.key === 'K' || e.key === 'k'){
      e.preventDefault();
      audiok.play();
    }else if(e.key === 'L' || e.key === 'l'){
      e.preventDefault();
      audiol.play();
    }
});
