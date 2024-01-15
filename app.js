// const arrows = document.querySelectorAll(".arrow");
// const movieLists = document.querySelectorAll(".movie-list");

// arrows.forEach((arrow, i) => {
//   const itemNumber = movieLists[i].querySelectorAll("img").length;
//   let clickCounter = 0;
//   arrow.addEventListener("click", () => {
//     const ratio = Math.floor(window.innerWidth / 270);
//     clickCounter++;
//     if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
//       movieLists[i].style.transform = `translateX(${
//         movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
//       }px)`;
//     } else {
//       movieLists[i].style.transform = "translateX(0)";
//       clickCounter = 0;
//     }
//   });

//   console.log(Math.floor(window.innerWidth / 270));
// });

// //TOGGLE

// const ball = document.querySelector(".toggle-ball");
// const items = document.querySelectorAll(
//   ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
// );

// ball.addEventListener("click", () => {
//   items.forEach((item) => {
//     item.classList.toggle("active");
//   });
//   ball.classList.toggle("active");
// });
function highlightButton(element) {
  element.style.backgroundColor = 'green';
}

function removeHighlight(element) {
  element.style.backgroundColor = ''; // Reverts to default background
}
var slide_index = 1;
        displaySlides(slide_index);

        function nextSlide(n) {
            displaySlides(slide_index += n);
        }

        function currentSlide(n) {
            displaySlides(slide_index = n);
        }

        function displaySlides(n) {
            var i;
            var slides = document.getElementsByClassName("showSlide");
            if (n > slides.length) { slide_index = 1 }
            if (n < 1) { slide_index = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slide_index - 1].style.display = "block";
        }
        const video1 = document.getElementById('video1');
        const playButton1 = document.getElementById('play-button1');

        // Toggle play/pause on hover
        video1.addEventListener('mouseenter', () => {
            video1.play();
            playButton1.style.display = 'none';
        });

        video1.addEventListener('mouseleave', () => {
            video1.pause();
            playButton1.style.display = 'block';
        });
        const video2 = document.getElementById('video2');
        const playButton2 = document.getElementById('play-button2');

        // Toggle play/pause on hover
        video2.addEventListener('mouseenter', () => {
            video2.play();
            playButton2.style.display = 'none';
        });

        video2.addEventListener('mouseleave', () => {
            video2.pause();
            playButton2.style.display = 'block';
        });
        const video3 = document.getElementById('video3');
        const playButton3 = document.getElementById('play-button3');

        // Toggle play/pause on hover
        video3.addEventListener('mouseenter', () => {
            video3.play();
            playButton3.style.display = 'none';
        });

        video3.addEventListener('mouseleave', () => {
            video3.pause();
            playButton3.style.display = 'block';
        });
        const video4 = document.getElementById('video4');
        const playButton4 = document.getElementById('play-button4');

        // Toggle play/pause on hover
        video4.addEventListener('mouseenter', () => {
            video4.play();
            playButton4.style.display = 'none';
        });

        video4.addEventListener('mouseleave', () => {
            video4.pause();
            playButton4.style.display = 'block';
        });
        const video5 = document.getElementById('video5');
        const playButton5 = document.getElementById('play-button5');

        // Toggle play/pause on hover
        video5.addEventListener('mouseenter', () => {
            video5.play();
            playButton5.style.display = 'none';
        });

        video5.addEventListener('mouseleave', () => {
            video5.pause();
            playButton5.style.display = 'block';
        });
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});