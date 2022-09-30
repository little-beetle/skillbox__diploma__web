// пошук

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

let exitBtn = document.querySelector(".header__btn__enter");
let enterBlock = document.querySelector(".enter");

let outBtn = document.querySelectorAll(".close__btn");
exitBtn.addEventListener("click", function () {
  exitBtn.classList.toggle("header__enter--active");
  enterBlock.classList.toggle("enter--active");
  document.body.classList.toggle("stop-scroll");
});

outBtn.forEach(function (el) {
  el.addEventListener("click", function () {
    exitBtn.classList.remove("header__enter--active");
    enterBlock.classList.remove("enter--active");
    document.body.classList.remove("stop-scroll");
  });
});

// зміна

document.querySelector(".play__btn__1").addEventListener("click", function (e) {
  e.target.closest(".play__btn__1").classList.toggle("play__btn__1--toggle");
});
document.querySelector(".play__btn__2").addEventListener("click", function (e) {
  e.target.closest(".play__btn__2").classList.toggle("play__btn__2--toggle");
});

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

//

const btnMore = document.querySelector(".podcast__btn");
const podcastItems = document.querySelectorAll(".podcast__item");

btnMore.addEventListener("click", () => {
  podcastItems.forEach((el) => {
    el.classList.add("podcast__item--visible");
  });
  btnMore
    .closest(".podcast__btn__block")
    .classList.add("podcast__btn__block--hidden");
});

// select

const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
});

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,

  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// form

new JustValidate(".form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },

    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: "Ошибка",

    mail: "Ошибка",
  },
});

new JustValidate(".form__enter", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },

    password: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
  },
  messages: {
    name: "Ошибка",

    password: "Ошибка",
  },
});
