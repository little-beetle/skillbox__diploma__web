let search = document.querySelector(".header__search");
let enter = document.querySelector(".enter-search");

let exit__search = document.querySelectorAll(".exit");
search.addEventListener("click", function () {
  search.classList.toggle("header__search--active");
  enter.classList.toggle("enter-search--active");
  document.body.classList.toggle("stop-scroll");
});

exit__search.forEach(function (el) {
  el.addEventListener("click", function () {
    search.classList.remove("header__search--active");
    enter.classList.remove("enter-search--active");
    document.body.classList.remove("stop-scroll");
  });
});

document.querySelector(".play__btn__1").addEventListener("click", function (e) {
  e.target.closest(".play__btn__1").classList.toggle("play__btn__1--toggle");
});
document.querySelector(".play__btn__2").addEventListener("click", function (e) {
  e.target.closest(".play__btn__2").classList.toggle("play__btn__2--toggle");
});

// let PlayBtn = document.querySelectorAll(".play__btn");
// PlayBtn.forEach(function (element) {
//   element.addEventListener("click", function (e) {
//     e.target.closest(".play__btn").classList.toggle("play__btn--toggle");
//   });
// });
let btnPlay = document.querySelectorAll(".btn__play");

btnPlay.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.closest(".btn__play").classList.toggle("btn__play--toggle");
  });
});
let btnLike = document.querySelectorAll(".like__btn");

btnLike.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.closest(".like__btn").classList.toggle("like__btn--toggle");
  });
});
