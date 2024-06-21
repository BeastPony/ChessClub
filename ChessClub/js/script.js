const btnPrev = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');
const sliderline = document.querySelector('.slider__inner');
let offset1 = 0;

//********Переключение слайдов на кнопки**********//

function nextSlide(){
  btnNext.addEventListener('click', function(){
    offset1 = offset1 + 414;
    if (offset1 >= 1636) {
      offset1 = 1242;
    }
    if(offset1 == 1242){
      btnNext.classList.add('defaultBtn');
    } 
    if(offset1 > 0){
      btnPrev.classList.remove('defaultBtn');
    } 

  sliderline.style.left = -offset1 + "px";
})
}

function prevSlide(){
  if(offset1 == 0){
    btnPrev.classList.add('defaultBtn');
  } 
  btnPrev.addEventListener('click', function(){
    offset1 = offset1 - 414;
    if (offset1 <= -414) {
      offset1 = 0;
    }
    if(offset1 == 0){
      btnPrev.classList.add('defaultBtn');
    } 
    if(offset1 < 1242){
      btnNext.classList.remove('defaultBtn');
    }
  sliderline.style.left = -offset1 + "px";
})
}

nextSlide();
prevSlide();

//********Автоматиеское переключение слайдов**********//
function autoslide() {
  offset1 = offset1 + 414;
  if (offset1 >= 1636) {
    offset1 = 0;
  }
  if(offset1 == 1242){
    btnNext.classList.add('defaultBtn');
  } 
  if(offset1 > 0){
    btnPrev.classList.remove('defaultBtn');
  } 
  if(offset1 == 0){
    btnPrev.classList.add('defaultBtn');
  } 
  if(offset1 < 1242){
    btnNext.classList.remove('defaultBtn');
  }

  sliderline.style.left = -offset1 + "px";
};

setInterval(autoslide, 4000);

//******************MobileVersion Trasformation Block******************//
//********Переключение слайдов на кнопки**********//

const btnPrevMobile = document.querySelector('.prev__mobile');
const btnNextMobile = document.querySelector('.next__mobile');
const transformationStage = document.querySelector('.transformation__stage');
let offset2 = 0;

function nextSlideMobile(){
  btnNextMobile.addEventListener('click', function(){
    offset2 = offset2 + 355;
    if (offset2 >= 2300) {
      offset2 = 0;
    }
    transformationStage.style.left = -offset2 + "px";
})
}


function prevSlideMobile(){
  btnPrevMobile.addEventListener('click', function(){
    offset2 = offset2 - 355;
    if (offset2 <= -335) {
      offset2 = 2120;
    }
    transformationStage.style.left = -offset2 + "px";
})
}

nextSlideMobile();
prevSlideMobile();


