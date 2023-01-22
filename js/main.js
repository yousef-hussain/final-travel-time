$(document).ready(function () { 
  /*************** start header *********************/
  //////// start header active ////////
  $(window).scroll( function() {
    if ($('html,body').scrollTop() >= 30) {
      // $('header').removeClass('position-absolute animate_out');
      $('header').addClass('active');
    } else {
      // $('header').addClass('position-absolute animate_out');
      $('header').removeClass('active');
    }
  });
  $("header nav .button-bar").on("click", function () {
    $("header nav .menu-small ").toggleClass("active");
    $("header").toggleClass("active-small");
  });
  //////// end header active ////////
  //////// start header menu element active ////////
  $("header nav .menu li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("header nav .menu-small ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //////// end header menu element active ////////
  //////// start scrollspy ////////
  var sectionIds = $('header nav .menu li a');
  $(document).scroll(function(){
    sectionIds.each(function(){
      var container = $(this).attr('href');
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;
      var scrollPosition = $(document).scrollTop();

      if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
          $(this).parent().addClass('active');
      } else{
          $(this).parent().removeClass('active');
      }
    });
  });
  /**/////////// */
  var sectionIds_other = $('header nav .menu-small ul li a');
  $(document).scroll(function(){
    sectionIds_other.each(function(){
      var container_other = $(this).attr('href');
      var containerOffset_other = $(container_other).offset().top;
      var containerHeight_other = $(container_other).outerHeight();
      var containerBottom_other = containerOffset_other + containerHeight_other;
      var scrollPosition_other = $(document).scrollTop();

      if(scrollPosition_other < containerBottom_other - 20 && scrollPosition_other >= containerOffset_other - 20){
          $(this).parent().addClass('active');
      } else{
          $(this).parent().removeClass('active');
      }
    });
  });
  //////// end scrollspy ////////
  /**************** end header ***********************/

  /****************** start main ***********************/
  //////// start swiper ////////
  var swiper = new Swiper(".main-slider", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (index > 9) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        } else {
          return  '<span class="' + className + '">' + "0" +(index + 1) + "</span>";
        }
      }
    },
  });
  //////// end swiper ////////
  /********************** end main ********************/
});
/*************** start loading *********************/
$(window).on("load",function () {
  $(".loading .sk-cube-grid").fadeOut(1000, function () {
    $("body").css("overflow","auto");
    $(this).parent().fadeOut(1000,function () {
      $(this).remove();
    });
  });
});
/*************** end loading *********************/