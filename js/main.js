document.addEventListener("DOMContentLoaded", function () {
  const eventsSlider = new Swiper(".events-slider", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 41,
    navigation: {
      nextEl: ".events-slider__next-btn",
      prevEl: ".events-slider__prev-btn",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      526: {
        slidesPerView: 2,
      },
      1106: {
        slidesPerView: 2,
        width: 1073,
      },
    },
  });

  const compositionSlider = new Swiper(".composition-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".composition-slider__next-btn",
      prevEl: ".composition-slider__prev-btn",
    },
    pagination: {
      el: ".composition-slider__pagination",
      clickable: true,
    },
  });

  const photogallerySlider = new Swiper(".photogallery-slider", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 22,
    navigation: {
      nextEl: ".photogallery-slider__next-btn",
      prevEl: ".photogallery-slider__prev-btn",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  let menuIcon = document.querySelector(".menu__icon");
  let headerContainer = document.querySelector(".header__container");
  menuIcon.addEventListener("click", function () {
    this.classList.toggle("menu__icon--active");
    this.nextElementSibling.classList.toggle("menu__body--active");
    document.body.classList.toggle("no-scroll");

    if (this.nextElementSibling.classList.contains("menu__body--active")) {
      headerContainer.style.backgroundColor = "#fff";
    } else {
      headerContainer.style.backgroundColor = "#36348e";
    }

    document.querySelector(".header__auth").classList.toggle("hide");
  });

  let navTitles = document.querySelectorAll(".sidebar__nav-title");
  navTitles.forEach((navTitle) => {
    navTitle.onclick = function () {
      navTitle.classList.toggle("show");
    };
  });
});
