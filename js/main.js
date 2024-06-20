$(document).ready(function() {
    "use strict";

    $(".exercises_accordion_list_item_head").click(function() {
        $(this).toggleClass("active");
        $(this).siblings().slideToggle()
    });

    $('.against_review_block_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        appendDots: $(".against_review_block_dots"),
        prevArrow: $(".against_review_block_arrows_prev"),
        nextArrow: $(".against_review_block_arrows_next"),
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    $('.exercises_map_block_iframe').magnificPopup({
      type:'iframe'
    });

});