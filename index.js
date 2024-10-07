const images = [
    "./assets/1652905938_8-celes-club-p-fon-les-multyashnii-krasivie-8.jpg",
    "./assets/1659794872_2-kartinkin-net-p-fon-les-multyashnii-krasivo-2.png", 
    "./assets/1669855105_cerenas-club-p-ugarnie-foni-oboi-1.jpg"
];

let imageElement = document.querySelectorAll(".slider__image");
let btns = document.querySelectorAll(".slider__btn");
let currentIndex = 0;

imageElement[0].src = images[currentIndex];

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

btns[0].addEventListener("click", handlePrev);
btns[1].addEventListener("click", handleNext);


/*
const images = ["./assets/1652905938_8-celes-club-p-fon-les-multyashnii-krasivie-8.jpg",
     "./assets/1659794872_2-kartinkin-net-p-fon-les-multyashnii-krasivo-2.png", 
     "./assets/1669855105_cerenas-club-p-ugarnie-foni-oboi-1.jpg"]

let imageElement  = document.querySelectorAll(".slider__image")
let btns = document.querySelectorAll(".slider__btn")
let currentIndex = 0 

console.log(imageElement)
imageElement[0].src = images[currentIndex]


const handleNext = () => {
    if(currentIndex<2) {

        currentIndex++;
    } else {
        currentIndex=0
    }
    imageElement[0].src = images[currentIndex]
}

const handlePrev = () => {
    if(currentIndex<=0) {

        currentIndex = images.length-1;
    } else {
        currentIndex--
    }
    imageElement[0].src = images[currentIndex]
}
btns[0].addEventListener("click", handlePrev)
btns[1].addEventListener("click", handleNext)

*/