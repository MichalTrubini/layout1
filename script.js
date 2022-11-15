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
const adjWidthScreen = screenWidth > 1250 ? 1250 : screen.width;

//1.SET WIDTH OF SLIDER IMAGE (SLIDER TYPE ONE)

//Purpose of this is to set width of slider item based on screen width.
//This allows to display different number of items on different resolutions

//-->variables declaration

const sliderImagesTypeOne = [...document.querySelectorAll('#celek .slider__imageTypeOne')];
const arrowContainer = [...document.querySelectorAll('#celek .slider__arrowContainerSliderOne')];
const sliderItemDummy = [...document.querySelectorAll('#celek .sliderTypeOne__dummy')];
const sliderTypeOne = document.querySelector('#celek .sliderTypeOne')

//-->functions

sliderImagesTypeOne.forEach(item => {
    if (screenWidth > 1035) item.style.width = '772px'
    else if (screenWidth > 500) {item.style.width = (screenWidth * 0.6) + 'px'} //mobile layout starts at 395px + 33px Alza's padding (=428px)
    else item.style.width = 100 + '%';
})

window.addEventListener('DOMContentLoaded', (event) => {

    const referenceElement = document.querySelector('#celek .blockSeven__textContainer');
    const referenceElementHeight = referenceElement.offsetHeight
    let style = getComputedStyle(sliderTypeOne);
    let flexGap = Number(style.gap.replace('px',''));

    sliderItemDummy.forEach(item => {
        item.style.width = (adjWidthScreen - sliderImagesTypeOne[0].offsetWidth - 2*flexGap)/2 + 'px'
    })

    arrowContainer.forEach(item => {
        item.style.height = referenceElementHeight + 'px';
        item.style.width = sliderItemDummy[0].offsetWidth + 'px'
    })
  });

//2.SET WIDTH OF SLIDER IMAGE (SLIDER TYPE TWO)

//Purpose of this is to set width of slider item based on screen width.
//This allows to display different number of items on different resolutions

//-->variables declaration

const sliderImagesTypeTwo = [...document.querySelectorAll('#celek .slider__imageTypeTwo')];
const sliderTwo = document.querySelector('#celek .sliderTypeTwo')
const sliderTwoWidth = sliderTwo.offsetWidth
let style = getComputedStyle(sliderTwo);
let flexGap = Number(style.gap.replace('px',''));

//-->functions

sliderImagesTypeTwo.forEach(item => {
    if (screenWidth > 895) item.style.width = ((sliderTwoWidth - 2 * flexGap)/3) + 'px'
    else if (screenWidth > 680 & screenWidth < 896) item.style.width = ((sliderTwoWidth - flexGap)/2) + 'px'
    else if (screenWidth < 429) item.style.width = ((sliderTwoWidth - 1 * flexGap)/1.5) + 'px'
    else item.style.width = ((sliderTwoWidth - flexGap)) + 'px'
})


//3.SLIDER

//Here we control the basic functionality of sliding images left/right on click.
// * An array of all sliders is created as well as an array of all next/prev buttons
// * Using forEach we loop through sliders and add event listeners to next/prev buttons
// * The order in arrays is essential here to make sure that sliders are controlled by correct buttons
// * Some buttons are hidden by "display: none" based on screen width, therefore it is neccessary to filter these out (nxtBtnAll --> nxtBtn)
//Touch control (swipe) on mobile/tablet not implemented.

//-->variables declaration

const productContainers = [...document.querySelectorAll('#celek .sliderContainer')];
const nxtBtnAll = [...document.querySelectorAll('#celek .slider__arrowNext')];
const preBtnAll = [...document.querySelectorAll('#celek .slider__arrowPrev')];
const mobileRollerTag = [...document.querySelectorAll('#celek .mobileRollerTag')];
const contentText = [...document.querySelectorAll('#celek .blockSeven .blockSeven__text')];

const nxtBtn = nxtBtnAll.filter((item) => {
    let style = getComputedStyle(item);
    if (style.display !== 'none') return item;
})

const preBtn = preBtnAll.filter((item) => {
    let style = getComputedStyle(item);
    if (style.display !== 'none') return item;
})

const currentItem = document.getElementById('sliderCountItem__GX546S2');
const totalItems = document.getElementById('sliderCountTotal__GX546S2');

let counter = 1

//-->functions

productContainers.forEach((item, i) => {

    let style = getComputedStyle(item);
    let flexGap = Number(style.gap.replace('px',''));
    let containerWidth = item.children[1].offsetWidth + flexGap; //second child because in one of the sliders, first child is a dummy element 
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

    if (item.classList.contains('sliderTypeOne')) totalItems.innerHTML = childrenCount - 2; //-2 because there are two dummy elements
})

mobileRollerTag.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (item.src === 'images/minus.png') {item.src === 'images/plus.png'} else item.src = 'images/minus.png'
        contentText[i].classList.add('lineHeightTest')
    })
})

//4.VIDEO

//This allows to play the video by clicking on custom play button
//Width of the video is controlled by setting inline style width

//-->variables declaration

    const playButton = document.getElementById("playButtonCustom__546SHD");
    const videoMargin = screen.width > 950 ? 166 : screen.width < 429 ? 33 : 66; //these numbers are based on what layout looks good on the screen 
    const video = document.querySelector("#video__GF65F2")

//-->functions

    playButton.addEventListener("click", () => {
        video.play();
        video.setAttribute('controls','true');
        playButton.style.display = 'none';
        video.style.width = adjWidthScreen - videoMargin +'px'
  });