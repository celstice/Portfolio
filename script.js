$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >50){
        $("#navbar").css("background-color","black");
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
  