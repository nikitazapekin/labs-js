const images = [
    "./assets/1652905938_8-celes-club-p-fon-les-multyashnii-krasivie-8.jpg",
    "./assets/1659794872_2-kartinkin-net-p-fon-les-multyashnii-krasivo-2.png", 
    "./assets/1669855105_cerenas-club-p-ugarnie-foni-oboi-1.jpg"
];

let imageElement = document.querySelectorAll(".slider__image");
let btns = document.querySelectorAll(".slider__btn");
let currentIndex = 0;

imageElement[0].src = images[currentIndex];
/*
const handleNext = () => {
    imageElement[0].classList.remove('active');  
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
 
        imageElement[0].src = images[currentIndex];  
        imageElement[0].classList.add('active');  
  
};

const handlePrev = () => {
    imageElement[0].classList.remove('active'); 
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
 
        imageElement[0].src = images[currentIndex];  
        imageElement[0].classList.add('active');  
 
};
*/

const handleNext = () => {
    imageElement[0].classList.remove('active');
    setTimeout(() => {  // Небольшая задержка перед добавлением класса
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        imageElement[0].src = images[currentIndex];
        imageElement[0].classList.add('active');
    }, 150);  // задержка, чтобы анимация перезапустилась
};

const handlePrev = () => {
    imageElement[0].classList.remove('active');
    setTimeout(() => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        imageElement[0].src = images[currentIndex];
        imageElement[0].classList.add('active');
    }, 150);
};


btns[0].addEventListener("click", handlePrev);
btns[1].addEventListener("click", handleNext);

 