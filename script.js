//CONTENTS
//
//0.GENERAL
//1.SET WIDTH OF SLIDER IMAGE (SLIDER TYPE ONE)
//2.SET WIDTH OF SLIDER IMAGE (SLIDER TYPE TWO)
//3.SLIDER
//4.VIDEO
//
//***

//0.GENERAL

//variables declaration

const screenWidth = screen.width;

//1.SET WIDTH OF SLIDER IMAGE (SLIDER TYPE ONE)

//variables declaration
const sliderImagesTypeOne = [...document.querySelectorAll('.slider__imageTypeOne')];
const referenceElement = document.querySelector('.blockSeven__text')
const referenceElementWidth = referenceElement.offsetWidth;

//functions

sliderImagesTypeOne.forEach(item => {
    item.style.width = referenceElementWidth + 'px'
})

//2.SET WIDTH OF SLIDER IMAGE (SLIDER TYPE TWO)

//variables declaration

const sliderImagesTypeTwo = [...document.querySelectorAll('.slider__imageTypeTwo')];
const sliderTwo = document.querySelector('.sliderTypeTwo')
const sliderTwoWidth = sliderTwo.offsetWidth
let style = getComputedStyle(sliderTwo);
let flexGap = Number(style.gap.replace('px',''));

//functions

sliderImagesTypeTwo.forEach(item => {
    item.style.width = ((sliderTwoWidth - 2 * flexGap)/3) + 'px'
})


//3.SLIDER

//variables declaration

const productContainers = [...document.querySelectorAll('.sliderContainer')];
const nxtBtn = [...document.querySelectorAll('.slider__arrowNext')];
const preBtn = [...document.querySelectorAll('.slider__arrowPrev')];

const currentItem = document.getElementById('sliderCountItem');
const totalItems = document.getElementById('sliderCountTotal');

let counter = 1

//functions

productContainers.forEach((item, i) => {

    let style = getComputedStyle(item);
    let flexGap = Number(style.gap.replace('px',''));
    let containerWidth = item.children[1].offsetWidth + flexGap;
    let childrenCount = item.childElementCount;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;  
        if (item.classList.contains('sliderTypeOne') & counter < 7) counter +=1;
        currentItem.innerHTML = counter;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        if (item.classList.contains('sliderTypeOne') & counter > 1) counter -=1;
        currentItem.innerHTML = counter;
    })

    if (item.classList.contains('sliderTypeOne')) totalItems.innerHTML = childrenCount - 2;
})

//4.VIDEO

//variables declaration

    const playButton = document.querySelector("#playButtonCustom");
    const adjWidthScreen = screenWidth > 1250 ? 1250 : screen.width;
    const videoMargin = screen.width > 950 ? 166 : 66;
    const video = document.querySelector("#video__GF65F2")

//functions

    playButton.addEventListener("click", () => {
        video.play();
        video.setAttribute('controls','true');
        playButton.style.display = 'none';
        video.style.width = adjWidthScreen - videoMargin +'px'
  });