$(document).ready(function(){
    $('.up').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#up').offset().top }, 800);
        e.preventDefault();
    });

    $("#drop_sidebar").click(function () {
        $(".left_menu_ul").slideToggle("slow");
    })

    });