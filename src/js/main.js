"use strict";

let switchingNavigation = () => {
  let $navigationMenu = document.querySelector(".navigation__menu");
  let $menuSpan = document.querySelectorAll(".navigation__menu-span");

  $navigationMenu.addEventListener("click", function (event) {
    let target = event.target;
    if (target.className !== "navigation__menu-link") return;

    $menuSpan.forEach(function (item) {
      item.classList.remove("navigation-active");
    });
    target.previousElementSibling.classList.add("navigation-active");

    console.log(target.previousElementSibling);
  });
};
switchingNavigation();

let showHeaderSlider = () => {
  let $sliderList = document.querySelector(".slider__list");
  let $sliderBtn = document.querySelectorAll(".slider__btn");
  let $sliderSlide = document.querySelectorAll(".slider__slide");
  let $slider = document.querySelector(".slider");

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function nextSlide() {
    $sliderSlide.forEach(function (item) {
      item.classList.remove("slider__slide-active");
    });
    $sliderBtn.forEach(function (item) {
      item.classList.remove("slider__btn-active");
    });

    $sliderSlide[currentSlide].classList.remove("slider__slide-active");
    currentSlide = (currentSlide + 1) % $sliderSlide.length;
    $sliderSlide[currentSlide].classList.add("slider__slide-active");

    $sliderBtn[currentSlide].classList.remove("slider__btn-active");
    currentSlide = currentSlide % $sliderBtn.length;
    $sliderBtn[currentSlide].classList.add("slider__btn-active");
  }

  $sliderList.addEventListener("click", function (event) {
    let target = event.target;
    if (target.className !== "slider__btn") return;
    if (!target.classList.contains("slider__btn-active")) {
      $sliderBtn.forEach(function (item) {
        item.classList.remove("slider__btn-active");
      });
      $sliderSlide.forEach(function (item) {
        item.classList.remove("slider__slide-active");
      });
      target.classList.add("slider__btn-active");
      let $sliderListChildren = target.parentNode.children;
      console.log($sliderBtn);
      for (let i = 0; i < $sliderBtn.length; i++) {
        if ($sliderBtn[i].classList.contains("slider__btn-active")) {
          $sliderSlide[i].classList.add("slider__slide-active");
        }
      }
    }
  });

  let showNewsSlider = () => {
    let $sliderNews = document.querySelector(".slider-news");
    let $sliderNewsItem = document.querySelectorAll(".slider-news__item");

    $sliderNews.addEventListener("click", function (event) {
      let target = event.target;
      if (!target.classList.contains("slider-news-btn")) return;

      // $sliderNewsItem[0].classList.toggle("slider-news__item-noactive");
      // $sliderNewsItem[1].classList.toggle("slider-news__item-noactive");

      // $sliderNewsItem.forEach(function (item) {
      //   if (item.classList.contains("slider-news__item-noactive")) {
      //     console.log(item);
      //     item.classList.toggle("slider-news__item-noactive");
      //   }
      // });
      let noActive = () => {
        for (let i = 0; i < $sliderNewsItem.length; i++) {
          if (
            !$sliderNewsItem[i].classList.contains("slider-news__item-noactive")
          ) {
            return $sliderNewsItem[i];
          }
        }
      };
      console.log(noActive());

      // if (!$sliderNewsItem.classList.contains("slider-news__item-noactive")) {
      // }
      // item.classList.remove("slider-news__item-noactive");

      // console.log($sliderNewsItem);
    });
  };
  showNewsSlider();
};
showHeaderSlider();
