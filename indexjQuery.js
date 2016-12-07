/**
 * Created by abc on 11/14/16.
 */

$(document).ready(function () {
    var navpos = $('#navigation').offset();
    console.log(navpos.top);
    $(window).bind('scroll', function() {
        if($(window).scrollTop() > navpos.top){
            $('#navigation').addClass('navbar-fixed-top');
        } else {
            $('#navigation').removeClass('navbar-fixed-top');
        }
    });

});


$(document).ready(function () {
    var carouselpos = $('#myCarousel').offset();

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() < carouselpos.top + 300) {
            $('#lefticon').addClass('icondisplaynone');
            $('#righticon').addClass('icondisplaynone');
        } else {
            $('#lefticon').removeClass('icondisplaynone');
            $('#righticon').removeClass('icondisplaynone');
        }
    });
});
