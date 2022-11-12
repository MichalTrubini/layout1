//slider

const productContainers = [...document.querySelectorAll('.sliderContainer')];
const nxtBtn = [...document.querySelectorAll('.slider__arrowNext')];
const preBtn = [...document.querySelectorAll('.slider__arrowPrev')];
const currentItem = document.getElementById('sliderCountItem');
const totalItems = document.getElementById('sliderCountTotal');

let counter = 1

productContainers.forEach((item, i) => {

    let style = getComputedStyle(item);
    let flexGap = Number(style.gap.replace('px',''));
    let containerWidth = item.children[1].offsetWidth + flexGap;

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

    let childrenCount = item.childElementCount;

    if (item.classList.contains('sliderTypeOne')) totalItems.innerHTML = childrenCount - 2;
})

//video play

    const playButton = document.querySelector("#playButtonCustom");

    playButton.addEventListener("click", () => {

    const video = document.querySelector("#video__GF65F2")
    video.play();
    video.setAttribute('controls','true');
    playButton.style.display = 'none'
  });