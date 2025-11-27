let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  // Toggle between Bootstrap icons
  menu.classList.toggle('bi-list');
  menu.classList.toggle('bi-x');

  // Toggle navbar visibility
  navbar.classList.toggle('active');
};

// Optional: close menu on scroll
window.onscroll = () => {
  menu.classList.remove('bi-x');
  menu.classList.add('bi-list');
  navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    });

    var swiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      loop:true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });