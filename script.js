const surpriseBtn = document.getElementById("surpriseBtn");

const hero = document.getElementById("hero");

const slideshow = document.getElementById("slideshow");

const finalMessage = document.getElementById("finalMessage");

const footer = document.getElementById("footer");

const song = document.getElementById("birthdaySong");

const slides = document.querySelectorAll(".slide");

const photoCounter = document.getElementById("photoCounter");


let currentSlide = 0;
let slideTimer = null;
let surpriseStarted = false;


/* =================================
   OPEN SURPRISE
================================= */

surpriseBtn.addEventListener("click", function () {

    if (surpriseStarted) {
        return;
    }

    surpriseStarted = true;


    /* Start song */

    song.currentTime = 0;

    song.play().catch(function (error) {

        console.log(
            "Song could not start:",
            error
        );

    });


    /* Hide first screen */

    hero.style.display = "none";


    /* Show slideshow */

    slideshow.style.display = "block";


    /* Start from first photo */

    currentSlide = 0;

    showSlide(currentSlide);


    /* Start slideshow */

    startSlideshow();

});


/* =================================
   SHOW PHOTO
================================= */

function showSlide(index) {

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    if (slides[index]) {

        slides[index].classList.add("active");

    }


    /* Update counter */

    photoCounter.textContent =
        (index + 1) +
        " / " +
        slides.length;

}


/* =================================
   SLIDESHOW
   3 SECONDS PER PHOTO
================================= */

function startSlideshow() {

    clearInterval(slideTimer);


    slideTimer = setInterval(function () {

        currentSlide++;


        /* All 13 photos finished */

        if (currentSlide >= slides.length) {

            finishSlideshow();

            return;
        }


        /* Show next photo */

        showSlide(currentSlide);

    }, 3000);

}


/* =================================
   FINISH SLIDESHOW
================================= */

function finishSlideshow() {

    clearInterval(slideTimer);

    slideTimer = null;


    /* Stop song */

    song.pause();

    song.currentTime = 0;


    /* Hide slideshow */

    slideshow.style.display = "none";


    /* Show final message */

    finalMessage.style.display = "flex";


    /* Show footer */

    footer.style.display = "block";


    /* Go to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =================================
   PRELOAD ALL PHOTOS
================================= */

slides.forEach(function (slide) {

    const img =
        slide.querySelector("img");


    if (img) {

        const preload =
            new Image();

        preload.src =
            img.src;

    }

});
