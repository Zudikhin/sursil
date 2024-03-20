$(document).ready(function() {
    "use strict";

    $(".methodology_accordion_list_item_head").click(function() {
        $(this).toggleClass("active");
        $(this).siblings().slideToggle()
    });

});