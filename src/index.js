import "normalize.css";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/main.scss";


/* Wrapper_open/close_buttons*/
let body = document.querySelector(".body")
let openMobMenuButton = document.querySelector(".mob-menu__button");
let closeMobMenuButton = document.querySelector(".side-mob-menu__button");
let sideMenuWrapper = document.querySelector(".wrapper--side");

let callWraper = document.querySelector(".wrapper-call");
let feedbackWraper = document.querySelector(".wrapper-feedback");
let fogRightSide = document.querySelector(".fog--right-side");
let fogLeftSide = document.querySelectorAll(".fog--left-side");

let phoneButton = document.querySelectorAll(".button-phone");
let chatButton = document.querySelectorAll(".button-chat");
let closeButton = document.querySelectorAll(".button-close");

let scrollFlag = 0;

for (let i = 0; i < phoneButton.length; i++) {
  phoneButton[i].onclick = function () {
    callWraper.classList.replace("wrapper--closed", "wrapper--opened");
    body.classList.add('body--scroll');
    scrollFlag++;
  };
}

for (let i = 0; i < chatButton.length; i++) {
  chatButton[i].onclick = function () {
    feedbackWraper.classList.replace("wrapper--closed", "wrapper--opened");
    body.classList.add('body--scroll');
    scrollFlag++;
  };
}

openMobMenuButton.onclick = function () {
  sideMenuWrapper.classList.replace("wrapper--closed", "wrapper--opened");
  body.classList.add('body--scroll');
  scrollFlag++;
};

closeMobMenuButton.onclick = function () {
  sideMenuWrapper.classList.replace("wrapper--opened", "wrapper--closed");
  if (scrollFlag < 2) {
    body.classList.remove('body--scroll');
  }
  scrollFlag--;
};

fogRightSide.onclick = function () {
  sideMenuWrapper.classList.replace("wrapper--opened", "wrapper--closed");
  if (scrollFlag < 2) {
    body.classList.remove('body--scroll');
  }
  scrollFlag--;
};

for (let i = 0; i < fogLeftSide.length; i++) {
  fogLeftSide[i].onclick = function () {
    callWraper.classList.replace("wrapper--opened", "wrapper--closed");
    feedbackWraper.classList.replace("wrapper--opened", "wrapper--closed");
    if (scrollFlag < 2) {
      body.classList.remove('body--scroll');
    }
    scrollFlag--;
  };
}
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = function () {
    callWraper.classList.replace("wrapper--opened", "wrapper--closed");
    feedbackWraper.classList.replace("wrapper--opened", "wrapper--closed");
    if (scrollFlag < 2) {
      body.classList.remove('body--scroll');
    }
    scrollFlag--;
  };
}
/*Swiper*/ 
const breakpoint = window.matchMedia("(max-width:767px)");
const enableSwiper = function () {
  mySwiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
  });
};

if (breakpoint.matches) {
  enableSwiper();
}

/*Expand_buttons*/
let expandButton = document.querySelectorAll(".expand-button");
let expandText = document.querySelector(".textbox")
let expandSection = document.querySelectorAll(".section--minimalize");
let expandNav = document.querySelectorAll(".section-nav--minimalize");
let expandButtonMinimalize = document.querySelectorAll(
  ".expand-button--minimalize"
);
let expantButtonText = document.querySelectorAll(".expand-button__text");
let expandButtonImg = document.querySelectorAll(
  ".expand-button__img"
);

for (let i = 1; i < 3; i++) {
  expandButton[i].onclick = function () {
    expandNav[i-1].classList.toggle("section-nav--expanded");
    expandSection[i-1].classList.toggle("section--expanded");
    expandButtonMinimalize[i-1].classList.toggle("expand-button--expanded");
    expandButtonImg[i].classList.toggle("expand-button__img--top");
    if (expantButtonText[i].textContent == "Показать все") {
      expantButtonText[i].textContent = "Скрыть";
    } else {
      expantButtonText[i].textContent = "Показать все";
    }
  };
}

expandButton[0].onclick = function () {
  expandText.classList.toggle("textbox--expanded");
  expandButton[0].classList.toggle("expand-button--expanded");
  expandButtonImg[0].classList.toggle("expand-button__img--top");
  if (expantButtonText[0].textContent == "Читать далее") {
    expantButtonText[0].textContent = "Скрыть";
  } else {
    expantButtonText[0].textContent = "Читать далее";
  }
};