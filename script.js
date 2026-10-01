const surpriseBtn =
    document.getElementById("surpriseBtn");

const hero =
    document.getElementById("hero");

const slideshow =
    document.getElementById("slideshow");

const finalMessage =
    document.getElementById("finalMessage");

const footer =
    document.getElementById("footer");

const song =
    document.getElementById("birthdaySong");

const slides =
    document.querySelectorAll(".slide");


let currentSlide = 0;

let slideTimer = null;


/* =================================
   OPEN SURPRISE
================================= */

surpriseBtn.addEventListener("click", function () {

    /* Start song */

    song.currentTime = 0;

    song.play().catch(function(error) {

        console.log(
            "Song could not start:",
            error
        );

    });


    /* Hide first screen */

    hero.style.display = "none";


    /* Show slideshow */

    slideshow.style.display = "block";


    /* Start first photo */

    currentSlide = 0;

    showSlide(currentSlide);


    /* Start slideshow */

    startSlideshow();

});


/* =================================
   SHOW PHOTO
================================= */

function showSlide(index) {

    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    if (slides[index]) {

        slides[index].classList.add("active");

    }

}


/* =================================
   SLIDESHOW
   3 SECONDS
================================= */

function startSlideshow() {

    clearInterval(slideTimer);


    slideTimer = setInterval(function () {

        currentSlide++;


        if (
            currentSlide >= slides.length
        ) {

            finishSlideshow();

            return;
        }


        showSlide(currentSlide);

    }, 3000);

}


/* =================================
   FINISH SLIDESHOW
================================= */

function finishSlideshow() {

    clearInterval(slideTimer);

    slideTimer = null;


    /* Hide slideshow */

    slideshow.style.display = "none";


    /* Show final message */

    finalMessage.style.display = "flex";


    /* Show footer */

    footer.style.display = "block";


    /* Song continues playing */

    /* Song will stop automatically
       when the audio finishes */


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =================================
   PRELOAD PHOTOS
================================= */

slides.forEach(function(slide) {

    const img =
        slide.querySelector("img");


    if (img) {

        const preload =
            new Image();

        preload.src =
            img.src;

    }

});
