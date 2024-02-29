$(document).ready(function () {
  

const toggleButton = document.getElementsByClassName('menu')[0];
const navbarLinks = document.getElementsByClassName('links')[0];

toggleButton.addEventListener('click', function(event) {
	navbarLinks.classList.toggle('active')
  // banner.class('opacity = 0')
});
});

function menuBar(x){
  x.classList.toggle("change");

  // $("#navbarContent").css("background-color","transparent");
  
}

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >50){
      $("#navbar").css("background-color","none");
    //   $("#navbar").css(
    //     "backdrop-filter", "blur(16px) saturate(180%)",
    // "-webkit-backdrop-filter", "blur(16px) saturate(180%)",
    // "background-color","rgba(0, 0, 0, 0.75)",
    // "border-radius", "12px",
    // "border", "1px solid rgba(255, 255, 255, 0.125)",
    //   );
    }
    else {
      $("#navbar").css("background-color","transparent");
    }
  });
});

// var swiper = new Swiper(".slideBox", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 1000,
//       disableOnInteraction: false,
//     },
//     // pagination: {
//     //   el: ".swiper-pagination",
//     //   clickable: true,
//     // },
//     // navigation: {
//     //   nextEl: ".swiper-button-next",
//     //   prevEl: ".swiper-button-prev",
//     // },
//   });