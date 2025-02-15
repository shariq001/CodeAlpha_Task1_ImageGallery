const slides = document.querySelectorAll('.slide');
let counter = 0;
const totalSlides = slides.length;

// Position slides horizontally
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter = (counter + 1) % totalSlides; // Loop forward
    slideImage();
};

const goPrev = () => {
    counter = (counter - 1 + totalSlides) % totalSlides; // Loop backward
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${-counter * 100}%)`; // Move left
    });
};

function openFullScreen(img) {
    document.getElementById("fullImg").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
}

// Close full screen view
function closeFullScreen() {
    document.getElementById("lightbox").style.display = "none";
}