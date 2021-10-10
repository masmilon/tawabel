var mainSlider = document.querySelector("#main-slider");

var headerResponsive = function headerResponsive(entries) {
  var header = document.querySelector("header .header-top");
  var logo = document.querySelector(".logo-img-unviel");

  var entry = entries[0];

  if (!entry.isIntersecting) {
    logo.classList.add("logo-img-unviel-new");
    header.classList.add("header-top-new");
  } else {
    logo.classList.remove("logo-img-unviel-new");
    header.classList.remove("header-top-new");
  }
};

var slideObserbe = new IntersectionObserver(headerResponsive, {
  root: null,
  threshold: 0.5,
});
slideObserbe.observe(mainSlider);

/*
const mainSlider = document.querySelector("#main-slider");

const headerResponsive = function (entries, observer) {
  const header = document.querySelector("header .header-top");
  const logo = document.querySelector(".logo-img-unviel");
  const [entry] = entries;

  if (!entry.isIntersecting) {
    logo.classList.add("logo-img-unviel-new");
    header.classList.add("header-top-new");
  } else {
    logo.classList.remove("logo-img-unviel-new");
    header.classList.remove("header-top-new");
  }
};

const slideObserbe = new IntersectionObserver(headerResponsive, {
  root: null,
  threshold: 0.5,
});

slideObserbe.observe(mainSlider);
*/
