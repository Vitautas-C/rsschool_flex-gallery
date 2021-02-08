import './scss/main.scss';
console.log('Hello, SASS');
console.log('Hello, HTML');

//  modal window start // // 

const popup = document.querySelector(".modal");
const closePopupButton = popup.querySelector(".modal__button");


document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        popup.classList.add("hidden");
    }
});

closePopupButton.addEventListener("click", () => {
    popup.classList.add("hidden");
});

// modal window end // //

//  slide open start // // 


const slides = document.querySelectorAll(".slide");

slides.forEach(el => {
    el.addEventListener("click", (event) => {
        if (!el.classList.contains("open__slide")) {
            slides.forEach(slide => {
                slide.classList.remove("slide__active");
                slide.classList.remove("open__slide");
            });
            el.classList.add("open__slide");
            setTimeout(() => (el.classList.add("slide__active")), 500);

        } else {
            el.classList.remove("open__slide");
            el.classList.remove("slide__active");
        }
    });
});


// slide open end // //