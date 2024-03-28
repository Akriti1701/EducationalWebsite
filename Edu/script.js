let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

// Initialize Swiper

let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.querySelector('a[href="#contact"]');

  contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the offset top position of the contact section
    const contactSection = document.getElementById("contact");
    const offsetTop = contactSection.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
