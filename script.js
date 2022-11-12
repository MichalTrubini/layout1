//slider

const productContainers = [...document.querySelectorAll('.sliderContainer')];
const nxtBtn = [...document.querySelectorAll('.slider__arrowNext')];
const preBtn = [...document.querySelectorAll('.slider__arrowPrev')];

productContainers.forEach((item, i) => {

    let childrenCount = item.childElementCount;
    let containerWidth = item.scrollWidth / childrenCount;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//video play

    const playButton = document.querySelector("#playButtonCustom");

    playButton.addEventListener("click", () => {

    const video = document.querySelector("#video__GF65F2")
    video.play();
    video.setAttribute('controls','true');
    playButton.style.display = 'none'
  });