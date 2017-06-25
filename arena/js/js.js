$(document).ready(function() {
   //Initialize our slider
        $('.sl_1').slick({
            arrows: false,
            autoplay:true,
            autoplaySpeed:3000,
            infinite: true,
            dots:true,
            // dotsClass:'dots'
            // responsiveBaseWidth:'1920'
        });
        $('.sl_2').slick({
            arrows: false,
            autoplay:true,
            autoplaySpeed:3000,
            infinite: true,
            dots:true,
            // dotsClass:'slick-dots'

        });

//scroll down
    $(".yakor").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href');

            //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).offset().top;

        console.log(top);

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });




});