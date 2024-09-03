$(document).ready(function() {
    "use strict";

    $(".innovation_expert_item_open").click(function() {
        $(this).parent().addClass("active");
        $(this).parent().find(".innovation_expert_item_hide").slideDown();
    });

    $(".innovation_expert_item_close").click(function() {
        $(this).parent().removeClass("active");
        $(this).parent().find(".innovation_expert_item_hide").slideUp();
    });

    $(".innovation_norm_wrap_item_text_open").click(function() {
        $(".innovation_norm_hide").slideDown();
        $(".innovation_norm_wrap_item_text").addClass("active");
    });

    $(".innovation_norm_wrap_item_text_hide").click(function() {
        $(".innovation_norm_hide").slideUp();
        $(".innovation_norm_wrap_item_text").removeClass("active");
    });

    $(".innovation_articles_block_item_open").click(function() {
        $(this).parent().find("p").slideDown();
        $(this).parent().addClass("active");
    });

    $(".innovation_articles_block_item_hide").click(function() {
        $(this).parent().find("p").slideUp();
        $(this).parent().removeClass("active");
    });

    $(".innovation_stepone_def_text_open").click(function() {
        $(".innovation_stepone_def_text").addClass("active");
        $(".innovation_stepone_hide").slideDown();
    });

    $(".innovation_stepone_def_text_hide").click(function() {
        $(".innovation_stepone_def_text").removeClass("active");
        $(".innovation_stepone_hide").slideUp();
    });

    $(".innovation_prevention_mob_open").click(function() {
        $(".innovation_prevention").addClass("mob_active");
        $(".innovation_prevention_mob_hide").slideDown();
    });

    $(".innovation_prevention_mob_close").click(function() {
        $(".innovation_prevention").removeClass("mob_active");
        $(".innovation_prevention_mob_hide").slideUp();
    });

    $(".innovation_prevention_open").click(function() {
        $(".innovation_prevention").addClass("active");
        $(".innovation_prevention_hide").slideDown();
    });

    $(".innovation_prevention_close").click(function() {
        $(".innovation_prevention").removeClass("active");
        $(".innovation_prevention_hide").slideUp();
    });

    $(".innovation_correct_wrap_item_block_open").click(function() {
        $(this).parent().addClass("active");
        $(this).parent().parent().find(".innovation_correct_wrap_item_hide").slideDown();
    });

    $(".innovation_process_open").click(function() {
        $(".innovation_process").addClass("active");
        $(".innovation_process_hide").slideDown();
    });

    $(".innovation_process_close").click(function() {
        $(".innovation_process").removeClass("active");
        $(".innovation_process_hide").slideUp();
    });

    $(".innovation_correct_wrap_item_block_close").click(function() {
        $(this).parent().removeClass("active");
        $(this).parent().parent().find(".innovation_correct_wrap_item_hide").slideUp();
    });

    $(".innovation_steptwo_item_block_open").click(function() {
        $(this).parent().addClass("active");
        $(this).parent().parent().find(".innovation_steptwo_item_hide").slideDown();
    });

    $(".innovation_steptwo_item_block_close").click(function() {
        $(this).parent().removeClass("active");
        $(this).parent().parent().find(".innovation_steptwo_item_hide").slideUp();
    });

    $(".innovation_gait_sidebar_open").click(function() {
        $(".innovation_gait_sidebar").addClass("active");
        $(".innovation_gait_hide").slideDown();
    });

    $(".innovation_gait_sidebar_close").click(function() {
        $(".innovation_gait_sidebar").removeClass("active");
        $(".innovation_gait_hide").slideUp();
    });

    $(".innovation_nutrition_block_text_open").click(function() {
        $(".innovation_nutrition_block_text").addClass("active");
        $(".innovation_nutrition_hide").slideDown();
    });

    $(".innovation_nutrition_block_text_close").click(function() {
        $(".innovation_nutrition_block_text").removeClass("active");
        $(".innovation_nutrition_hide").slideUp();
    });

    $(".innovation_study_open").click(function() {
        $(".innovation_study").addClass("active");
        $(".innovation_study_sensation").slideDown();
    });

    $(".innovation_study_hide").click(function() {
        $(".innovation_study").removeClass("active");
        $(".innovation_study_sensation").slideUp();
    });

    $(".innovation_walk_pain_main_points_hero_item button").click(function() {
        var attr = $(this).attr("data-id");
        $(".innovation_walk_pain_main_points_hero_item button").removeClass("active");
        $(this).addClass("active");
        $(".innovation_walk_pain_main_points_mob_item").removeClass("active");
        $(`#${attr}`).addClass("active");
      });

      $(".open_youtube").click(function() {
        $(this).addClass("active");
    });

    $('.open-popup').magnificPopup({  
        type: 'inline',
        preloader: false,
        focus: '#hidden-content',
        mainClass: 'mfp-fade',
    });  
});