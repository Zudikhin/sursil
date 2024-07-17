$(document).ready(function() {
    "use strict";

    $('.open-popup').magnificPopup({  
        type: 'inline',
        preloader: false,
        focus: '#hidden-content',
        mainClass: 'mfp-fade',
    });  
});