
let sliders= document.querySelector('.slider')
let goNext= document.getElementById('next')
let goPrev=document.getElementById('prev')
let x=0
let count =0


function rotate() {

  sliders.style.transform = `perspective(4000px) rotateY(${x}deg)`;
    
}

  goNext.addEventListener('click', () => {
   
    x -= 60;
    rotate();
   
  });



  goPrev.addEventListener('click', () => {
    x += 60;
    rotate();
  });




