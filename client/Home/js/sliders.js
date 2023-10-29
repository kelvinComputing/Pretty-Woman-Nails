const sliders = document.querySelectorAll('.sliders');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

const manual = function (manual){
    sliders.forEach((slide) => {
        slide.classList.remove('active');
        btns.forEach((btn) =>{
            btn.classList.remove('active');
        });
    });

    sliders[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manual(i);
        currentSlide = i;
    });
});

//auto
const active = document.getElementsByClassName('active');
let i=1;

const repetear = () => {
    setTimeout (function(){
        [...active].forEach((activeSlide => {
            activeSlide.classList.remove('active');
        }));

        sliders[i].classList.add('active');
        btns[i].classList.add('active');
        i++;
        if (sliders.length == i){
            i=0;
        }
        if (i >= sliders.length){
            return;
        }
        repetear();
    }, 10000);
    }
    repetear();


