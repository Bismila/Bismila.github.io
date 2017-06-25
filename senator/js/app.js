$(document).ready(function() {
    //Phone mask
    $(function($){
        $("#phone_mask").mask("+7(999)999-99-99", {placeholder:"+7(___)___-__-__"});
    });
    $(function($){
        $("#phone_mask_1").mask("+7(999)999-99-99", {placeholder:"+7(___)___-__-__"});
    });
    $(function($){
        $("#phone_mask_2").mask("+7(999)999-99-99", {placeholder:"+7(___)___-__-__"});
    });
    $(function($){
        $("#form_popup_tel_mask").mask("+7(999)999-99-99", {placeholder:"+7(___)___-__-__"})
    });

    $(".gbtn_1").click(function(e) {
        e.preventDefault();
        $(this).find("span").toggleClass("i_want");
        $(this).toggleClass("active_order");
    });
    $(".wwd_block_big").hover(
        function (e) {
            $(this).find(".wwd_content_hover").css("display", "block")
            $(this).css('opacity', 0);
            $(this).animate({'opacity': 1}, 700);
        },
        function (e) {
            $(this).find(".wwd_content_hover").css("display", "none")
            $(this).css('opacity', 0);
            $(this).animate({'opacity': 1}, 700);

        }
    );
    $(".navbar-toggle").click(function () {
        $("div.order_on_servis").toggleClass('cls');
    });

    $('.waw_slider').slick({
        arrows: true,
        // autoplay:true,
        // autoplaySpeed:3000,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },

        ]
    });
    $('.osb_slider_sm').slick({
        // rtl: true,
        arrows: false,
        // autoplay:true,
        // autoplaySpeed:3000,
        dots: true,
        infinite: true,
        // centerMode: true,
        // centerPadding: '60px',
        // slidesToShow: 1,
        // variableWidth: true
    });
    $(".act_d_block").hover(function (e) {
        $(this).find(".ad_block_txt").css("color", "#e42024");
    },
        function (e) {
            $(this).find(".ad_block_txt").css("color", "#a0a0a0");
        }
    )

    $(".js_name").click(function (e) {
        $(this).siblings().toggleClass("choose");
        $(this).toggleClass("choose");



    })
});
var map;
function initMap() {
    // Функция initMap которая отрисует карту на странице
    // Определяем переменную map
    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    var mapOpts = {
        // При создании объекта карты необходимо указать его свойства
        zoom: 10,// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        center: {lat: 54.2107161, lng: 36.6157524},// center - определяем точку на которой карта будет центрироваться
        disableDefaultUI: true //выключаем елементы управления
    };
    map = new google.maps.Map(document.getElementById('map'), mapOpts);
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        map.setOptions({'draggable': false});
    }

    var marker = new google.maps.Marker({// Создаем маркер на карте

        position: {lat: 53.27118, lng: 34.318715},// Определяем позицию маркера
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,
        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'Сенатор, Объездная улица, 18, Брянск.',
        // Укажем свою иконку для маркера
        // icon: 'img/layer.png',
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.TERRAIN
            ]
        }
    })
}







