$(document).ready(function() {
    "use strict";

    $(".walk_pain_main_points_hero_item button").click(function() {
      var attr = $(this).attr("data-id");
      $(".walk_pain_main_points_hero_item button").removeClass("active");
      $(this).addClass("active");
      $(".walk_pain_main_points_mob_item").removeClass("active");
      $(`#${attr}`).addClass("active");
    });

});