$(function(){
   $('.design-slider').slick({
      dots: false,
      slidesToShow: 4,
      variableWidth: true,
      prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="arrow">',
      nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="arrow">',
      responsive: [
         {
            breakpoint: 361,
            settings: {
               variableWidth: false,
               slidesToShow: 1
            }
         }
      ]
   });
});