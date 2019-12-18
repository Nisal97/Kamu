jQuery(function ($) {
    $('.toggle').click(function () {
        $('.menu').toggleClass('right');
        $('.toggle').toggleClass('indexcity');
    });
    
    $('#menu').height($(document).height());

    $('#menu').click(function(event){
        event.stopPropagation();
    });
    $('.toggle').click(function(event){
        event.stopPropagation();
    });

    $(window).click(openCloseMenu);
});

function screenSize() {
    console.log('HEIGHT - ', $(document).height());
    document.getElementById('menu').style.height = $(document).height();
}

function openCloseMenu() {
    $('.menu').toggleClass('right');
    $('.toggle').toggleClass('indexcity');
}
