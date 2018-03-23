

//ALL PAGES  - menu drop down owl slider
function init_menu_all(){
	var $menu_carousel_1 = $(".menu_carousel_1");
	var $menu_carousel_2 = $(".menu_carousel_2");
	var $menu_carousel_3 = $(".menu_carousel_3");
	var $menu_carousel_4 = $(".menu_carousel_4");
	var $menu_carousel_5 = $(".menu_carousel_5");
	var $menu_carousel_6 = $(".menu_carousel_6");
	var $menu_carousel_7 = $(".menu_carousel_7");
	$menu_carousel_1.owlCarousel({
		loop:true,
		nav: true,
		navigationText:"",
		items: 16,
		margin:10,
		responsive:{
			1450:
				{
					items: 14
				},
			1345:
				{
					items: 12
				},
			1199:{
				items:10
			},
			992:{
				items:8
			},
			768:{
				items:6
			},
			320:{
				items:3
			}

		}
	});
	$menu_carousel_2.owlCarousel({
		loop:true,
		nav: true,
		items: 14,
		margin:10,
		responsive:{
			1450:
				{
					items: 14
				},
			1345:
				{
					items: 12
				},
			1199:{
				items:10
			},
			992:{
				items:8
			},
			768:{
				items:6
			},
			320:{
				items:3
			}

		}
	});
	$menu_carousel_3.owlCarousel({
		loop:true,
		items: 14,
		nav: true,
		margin:10,
		responsive:{
			1450:
				{
					items: 14
				},
			1345:
				{
					items: 12
				},
			1199:{
				items:10
			},
			992:{
				items:8
			},
			768:{
				items:6
			},
			320:{
				items:3
			}
		}
	});
	$menu_carousel_4.owlCarousel({
		loop:true,
		items: 14,
		margin:10,
		nav: true,
		responsive:{
			1450:
				{
					items: 14
				},
			1345:
				{
					items: 12
				},
			1199:{
				items:10
			},
			992:{
				items:8
			},
			768:{
				items:6
			},
			320:{
				items:3
			}

		}
	});
	$menu_carousel_5.owlCarousel({
		loop:true,
		items: 14,
		margin:10,
		nav: true,
		responsive:{
			1450:
				{
					items: 14
				},
			1345:
				{
					items: 12
				},
			1199:{
				items:10
			},
			992:{
				items:8
			},
			768:{
				items:6
			},
			320:{
				items:3
			}





		}
	});
	$menu_carousel_6.owlCarousel({
		loop:true,
		items: 14,
		margin:10,
		nav: true,
		responsive:{
			1450:
				{
					items: 14
				},
			1345:
				{
					items: 12
				},
			1199:{
				items:10
			},
			992:{
				items:8
			},
			768:{
				items:6
			},
			320:{
				items:3
			}





		}
	});
	$menu_carousel_7.owlCarousel({
		loop:true,
		items: 14,
		nav: true,
		margin:10,
		responsive:{
			1450:
				{
					items: 14
				},
			1345:
				{
					items: 12
				},
			1199:{
				items:10
			},
			992:{
				items:8
			},
			768:{
				items:6
			},
			320:{
				items:3
			}





		}
	});
	$menu_carousel_1.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$menu_carousel_1.trigger('prev.owl');
		} else {
			$menu_carousel_1.trigger('next.owl');
		}
		e.preventDefault();
	});
	$menu_carousel_2.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$menu_carousel_2.trigger('prev.owl');
		} else {
			$menu_carousel_2.trigger('next.owl');
		}
		e.preventDefault();
	});
	$menu_carousel_3.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$menu_carousel_3.trigger('prev.owl');
		} else {
			$menu_carousel_3.trigger('next.owl');
		}
		e.preventDefault();
	});
	$menu_carousel_4.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$menu_carousel_4.trigger('prev.owl');
		} else {
			$menu_carousel_4.trigger('next.owl');
		}
		e.preventDefault();
	});
	$menu_carousel_5.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$menu_carousel_5.trigger('prev.owl');
		} else {
			$menu_carousel_5.trigger('next.owl');
		}
		e.preventDefault();
	});
	$menu_carousel_6.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$menu_carousel_6.trigger('prev.owl');
		} else {
			$menu_carousel_6.trigger('next.owl');
		}
		e.preventDefault();
	});
	$menu_carousel_7.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$menu_carousel_7.trigger('prev.owl');
		} else {
			$menu_carousel_7.trigger('next.owl');
		}
		e.preventDefault();
	});
}

init_menu_all();
$(document).ready(function() {





	//MAIN_PAGE - initialization main slick slider "Скидки на кольца с сапфирами"
	$(".main_slider_01").slick({
		arrow: true,
		dots: true,
		autoplay:true,
		autoplaySpeed: 2000,
		infinite: true,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					arrows: false
				}
			}

		]

	});

	//MAIN_PAGE - initialization slick slider "Похожие товары" - related_block
	$(".rb_slider").slick({
		arrow: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					centerMode: true,
					centerPadding: "10px",
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					centerMode: true,
					centerPadding: "10px",
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false
				}
			},
			{
				breakpoint: 460,
				settings: {
					centerMode: true,
					centerPadding: "5px",
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false
				}
			}

		]

	});

	//MAIN_PAGE - initialization slick slider "Вы недавно смотрели" - recently_watched class
	$(".rw_slider").slick({
		arrow: true,
		dots: false,
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					centerMode: true,
					centerPadding:'10px',
					slidesToScroll: 6,
					slidesToShow: 6
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToScroll: 4,
					centerMode: true,
					centerPadding:'10px',
					slidesToShow: 5
				}
			},
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding:'10px',
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToScroll: 2,
					arrows: false,
					centerMode: true,
					centerPadding:'10px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding:'10px',
					slidesToShow: 2
				}
			}
		]
	});

	//CARDS_PAGE - Initialization of the complement slider - "Дополнить свой образ"
	$(".complement_slider").slick({
		arrow: true,
		dots: false,
		// centerMode: true,
		// centerPadding: '10px',
		infinite: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					// centerMode: true,
					// centerPadding: '10px',
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					// centerMode: true,
					// centerPadding: '10px',
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					// centerMode: true,
					// centerPadding: '10px',
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false
				}
			},
			{
				breakpoint: 460,
				settings: {
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false
				}
			}
		]
	});

	//CARDS_PAGE - Initialization of a slick slider on a call #popup_2 - "Бриллианты круглой огранки"
	$("#popup_2, #popup_7").on("shown.bs.modal", function () {
		$(".slider_modal").slick({
			arrow: false,
			dots: true,
			infinite: true,
			slidesToShow: 1

		});
		$('html').removeClass('.hide-slider');

	});

	//CARDS_PAGE - Initialization of a slick slider on a call #popup_8 - "Галерея"
	$("#popup_8").on("shown.bs.modal", function () {
		$ ('.pp8_slider_big').slick ({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.pp8_slider_small'
		});
		$ ('.pp8_slider_small').slick ({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.pp8_slider_big',
			dots: true,
			// centerMode: true,
			// centerPadding: '10px',
			focusOnSelect: true,
			arrows: false,
			variableWidth: true
		});
	});




	//UI_PAGE - initialization slick slider "Камень"
	$('.sl_02').owlCarousel({
		items: 4,
		loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots:false
	});

	// BEGIN CATALOG COLLECTION PAGE - "Расширенный фильтр"
    ////"Камень" - "Расширенный фильтр"
	$('.cc_sl_02').owlCarousel({
		items: 4,
		loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:4,
				nav:true
			},
			768:{
				items:4,
				nav:false
			},
			0:{
				items:3,
				nav:false
			}


		}
	});
	//"Размер" - "Расширенный фильтр"
	$('.cc_sl_03').owlCarousel({
		items: 7,
		loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:7,
				nav:true
			},
			768:{
				items:6,
				nav:false
			},
			320:{
				items:5,
				nav:false,
			},
			0:{
				items:3,
				nav:false

			}


		}
	});
	//"Стиль" - "Расширенный фильтр"
	$('.cc_sl_04').owlCarousel({
		items: 3,
		// loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:4,
				nav:true
			},
			768:{
				items:4,
				nav:false
			},
			0:{
				items:3,
				nav:false

			}


		}
	});
	//"Металл" - "Расширенный фильтр"
	$('.cc_sl_05').owlCarousel({
		items:3,
		// loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:4
			},
			768:{
				items:4
			},
			0:{
				items:3
			}


		}
	});
	//"Проба" - "Расширенный фильтр"
	$('.cc_sl_06').owlCarousel({
		items: 7,
		// loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:7
			},
			768:{
				items:5
			},
			320:{
				items:5
			},
			0:{
				items:3
			}


		}
	});
	//Коллекции - "Расширенный фильтр"
	$('.cc_sl_07').owlCarousel({
		items: 4,
		// loop:true, //Зацикливаем слайдер
		margin:20, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive: {
			1199: {
				items: 4,
				// nav: true
			},
			768: {
				items: 3,
				nav: false
			},
			0: {
				items: 2,
				nav: false

			}
		}
		});
	//Наличие в магазине - "Расширенный фильтр"
	$('.cc_sl_08').owlCarousel({
		items: 3,
		// loop:true, //Зацикливаем слайдер
		margin:20, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive: {
			1199: {
				items: 3,
				nav: true
			},
			768: {
				items: 3,
				nav: false
			},
			0: {
				items: 2,
				nav: false

			}
		}
	});
	// END CATALOG COLLECTION PAGE - "Расширенный фильтр"

    //CARDS_PAGE - slider owl - "Камень"
	$('.cards_sl_03').owlCarousel({
		items: 3,
		margin:10, //Отступ от элемента справа в 50px
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:3,
				nav:true
			},
			992:{
				items:2,
				nav:false
			},
			768:{
				items:3,
				nav:false
			},
			600:{
				items: 3,
				nav:false
			},
			320:{
				items:2,
				nav:false
			},
			0:{
				items:2,
				nav:false
			}


		}
	});
	//CARDS_PAGE - slider owl - "Металл"
	$('.cards_sl_04').owlCarousel({
		items: 3,
		lazyLoad: true,
		margin:10, //Отступ от элемента справа в 50px
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:3,
				nav:true
			},
			992:{
				items:2,
				nav:false
			},
			768:{
				items:3,
				nav:false
			},
			600:{
				items: 3,
				nav:false
			},
			320:{
				items:2,
				nav:false
			},
			0:{
				items:2,
				nav:false
			}

		}
	});


    //MAIN_PAGE - initialization owl slider - creeping line with products, id = main_owl_01
	var $owl_slider = $('.product_slider_main');
	$owl_slider.owlCarousel({
		loop:true,
		items: 12,
		margin:10,
		responsive:{
			1675:{
				items:13
			},
			1375:{
				items:11
			},
			1275:{
				items:10
			},

			1199:{
				items:7
			},
			992:{
				items:6
			},
			768:{
				items:5
			},
			680: {
				items: 4
			},

			320:{
				margin:10,
				items:3
			},
			0:{
				items:2
			}


		}
	});
    //his arrows id = main_owl_01
	$owl_slider.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$owl_slider.trigger('prev.owl');

		} else {
			$owl_slider.trigger('next.owl');
		}
		e.preventDefault();
	});

	//CATALOG_COLLECTION_PAGE - initialization  owl slider - creeping blue line with products, id = catalog_owl_01
	var $catalog_owl_slider = $('.product_slider_catalog_collection');
	$catalog_owl_slider.owlCarousel({
		loop:true,
		items: 9,
		margin:10,
		responsive:{
			1199:{
				items:10
			},
			768:{
				items:5
			},
			0:{
				items:3
			}


		}
	});
	//his arrows, id = catalog_owl_01
	$catalog_owl_slider.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$catalog_owl_slider.trigger('prev.owl');

		} else {
			$catalog_owl_slider.trigger('next.owl');
		}
		e.preventDefault();
	});

	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца без камней", id = carousel
	var carousel_water = $("#carousel").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');

		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');

		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');


		}
	});
	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца с цирконом", id = carousel_02
	var carousel_water2 = $("#carousel_02").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
		}
	});

	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца с цветными камнями", id = carousel_03
	var carousel_water3 = $("#carousel_03").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');

		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');

		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');


		}
	});

	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца с цветными камнями", id = carousel_04
	var carousel_water4 = $("#carousel_04").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');

		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');

		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');


		}
	});

	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца с цветными камнями", id = carousel_05
	var carousel_water5 = $("#carousel_05").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');

		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');

		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');


		}
	});
//Calculate the width of the browser window
	var viewportWidth = $(window).width();

	if (viewportWidth <= 600) {
		carousel_water.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
		carousel_water2.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
		carousel_water3.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
		carousel_water4.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
		carousel_water5.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
	}
	else if (viewportWidth <= 767) {
		carousel_water.reload({
			flankingItems: 3
		});
		carousel_water2.reload({
			flankingItems: 3
		});
		carousel_water3.reload({
			flankingItems: 3
		});
		carousel_water4.reload({
			flankingItems: 3
		});
		carousel_water5.reload({
			flankingItems: 3
		});
	}
	else if (viewportWidth <= 991) {
		carousel_water.reload({
			flankingItems: 4
		});
		carousel_water2.reload({
			flankingItems: 4
		});
		carousel_water3.reload({
			flankingItems: 4
		});
		carousel_water4.reload({
			flankingItems: 4
		});
		carousel_water5.reload({
			flankingItems: 4
		});
	}
    //his arrows, id = carousel
	$('#prev').bind('click', function () {
		carousel_water.prev();
		return false
	});
	$('#next').bind('click', function () {
		carousel_water.next();
		return false;
	});

    //his arrows, id = carousel_02
	$('#prev_02').bind('click', function () {
		carousel_water2.prev();
		return false
	});
	$('#next_02').bind('click', function () {
		carousel_water2.next();
		return false;
	});

	//his arrows, id = carousel_03
	$('#prev_03').bind('click', function () {
		carousel_water3.prev();
		return false
	});
	$('#next_03').bind('click', function () {
		carousel_water3.next();
		return false;
	});

	//his arrows, id = carousel_04
	$('#prev_04').bind('click', function () {
		carousel_water4.prev();
		return false
	});
	$('#next_04').bind('click', function () {
		carousel_water4.next();
		return false;
	});

	//his arrows, id = carousel_05
	$('#prev_05').bind('click', function () {
		carousel_water5.prev();
		return false
	});
	$('#next_05').bind('click', function () {
		carousel_water5.next();
		return false;
	});

//Finger a finger - "Кольца без камней", id = carousel
	$("#carousel").swiperight(function() {
		carousel_water.prev();
	});
	$("#carousel").swipeleft(function() {
		carousel_water.next();
	});

	//Finger a finger - "Кольца с цирконом", id = carousel_02
	$("#carousel_02").swiperight(function() {
		carousel_water2.prev();
	});
	$("#carousel_02").swipeleft(function() {
		carousel_water2.next();
	});

//Finger a finger - "Кольца с цветными камнями", id = carousel_03
	$("#carousel_03").swiperight(function() {
		carousel_water3.prev();
	});
	$("#carousel_03").swipeleft(function() {
		carousel_water3.next();
	});

//Finger a finger - "Кольца с жемчугом", id = carousel_04
	$("#carousel_04").swiperight(function() {
		carousel_water4.prev();
	});
	$("#carousel_04").swipeleft(function() {
		carousel_water4.next();
	});

//Finger a finger - "Рекомендуем", id = carousel_05
	$("#carousel_05").swiperight(function() {
		carousel_water5.prev();
	});
	$("#carousel_05").swipeleft(function() {
		carousel_water5.next();
	});

	$('#reload').bind('click', function () {
		var newOptions = eval("(" + $('#newoptions').val() + ")");
		carousel_water.reload(newOptions);
		carousel_water2.reload(newOptions);
		carousel_water3.reload(newOptions);
		carousel_water4.reload(newOptions);
		carousel_water5.reload(newOptions);
		return false;
	});



});

$(window).resize(function () {
	//UI_PAGE - initialization slick slider "Камень"
	$('.sl_02').owlCarousel({
		items: 4,
		loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots:false
	});

	// BEGIN CATALOG COLLECTION PAGE - "Расширенный фильтр"
	////"Камень" - "Расширенный фильтр"
	$('.cc_sl_02').owlCarousel({
		items: 4,
		loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:4,
				nav:true
			},
			768:{
				items:4,
				nav:false
			},
			0:{
				items:3,
				nav:false
			}


		}
	});
	//"Размер" - "Расширенный фильтр"
	$('.cc_sl_03').owlCarousel({
		items: 7,
		loop:true, //Зацикливаем слайдер
		margin:20, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:5,
				nav:true,
			},
			768:{
				items:5,
				nav:false
			},
			320:{
				items:5,
				nav:false,
			},
			0:{
				items:3,
				nav:false

			}


		}
	});
	//"Стиль" - "Расширенный фильтр"
	$('.cc_sl_04').owlCarousel({
		items: 3,
		loop:true, //Зацикливаем слайдер
		margin:50, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
		autoplay:true, //Автозапуск слайдера
		smartSpeed:500, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:5,
				nav:true
			},
			992:{
				items:4,
				nav:false
			},
			768:{
				items:4,
				nav:false
			},
			0:{
				items:3,
				nav:false

			}


		}
	});
	//"Металл" - "Расширенный фильтр"
	$('.cc_sl_05').owlCarousel({
		items:3,
		// loop:true, //Зацикливаем слайдер
		margin:20, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:4
			},
			768:{
				items:4
			},
			0:{
				items:3
			}


		}
	});
	//"Проба" - "Расширенный фильтр"
	$('.cc_sl_06').owlCarousel({
		items: 7,
		// loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от элемента справа в 50px
		// nav:true, //Отключение навигации
//            autoplay:true, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:7
			},
			768:{
				items:5
			},
			320:{
				items:5
			},
			0:{
				items:3
			}


		}
	});
	// END CATALOG COLLECTION PAGE - "Расширенный фильтр"

	//CARDS_PAGE - slider owl - "Камень"
	$('.cards_sl_03').owlCarousel({
		items: 3,
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от элемента справа в 50px
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:3,
				nav:true
			},
			992:{
				items:2,
				nav:false
			},
			768:{
				items:3,
				nav:false
			},
			600:{
				items: 3,
				nav:false
			},
			320:{
				items:2,
				nav:false
			},
			0:{
				items:2,
				nav:false
			}


		}
	});
	//CARDS_PAGE - slider owl - "Металл"
	$('.cards_sl_04').owlCarousel({
		items: 3,
		margin:10, //Отступ от элемента справа в 50px
		smartSpeed:1000, //Время движения слайда
		dots: false,
		responsive:{
			1199:{
				items:3,
				nav:true
			},
			992:{
				items:2,
				nav:false
			},
			768:{
				items:3,
				nav:false
			},
			600:{
				items: 3,
				nav:false
			},
			320:{
				items:2,
				nav:false
			},
			0:{
				items:2,
				nav:false
			}

		}
	});


	//MAIN_PAGE - initialization owl slider - creeping line with products, id = main_owl_01
	var $owl_slider = $('.product_slider_main');
	$owl_slider.owlCarousel({
		// loop:true,
		items: 10,
		margin:10,
		// scrollPerPage : false,
		responsive:{
			// 1440:{
			// 	items:13
			// },
			1275:{
				items:10
			},

			1199:{
				items:8
			},
			992:{
				items:5
			},
			768:{
				items:5
			},
			0:{
				items:3
			}


		}
	});

	//CATALOG_COLLECTION_PAGE - initialization  owl slider - creeping blue line with products, id = catalog_owl_01
	var $catalog_owl_slider = $('.product_slider_catalog_collection');
	$catalog_owl_slider.owlCarousel({
		loop:true,
		items: 9,
		margin:10,
		responsive:{
			1199:{
				items:10
			},
			768:{
				items:5
			},
			0:{
				items:3
			}


		}
	});
	//his arrows, id = catalog_owl_01
	$catalog_owl_slider.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			$catalog_owl_slider.trigger('prev.owl');

		} else {
			$catalog_owl_slider.trigger('next.owl');
		}
		e.preventDefault();
	});

	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца без камней", id = carousel
	var carousel_water = $("#carousel").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');

		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');

		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');


		}
	});
	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца с цирконом", id = carousel_02
	var carousel_water2 = $("#carousel_02").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
		}
	});

	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца с цветными камнями", id = carousel_03
	var carousel_water3 = $("#carousel_03").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');

		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');

		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');


		}
	});

	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца с цветными камнями", id = carousel_04
	var carousel_water4 = $("#carousel_04").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');

		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');

		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');


		}
	});

	//CATALOG_COLLECTION_PAGE - initialization waterwheel slider - "Кольца с цветными камнями", id = carousel_05
	var carousel_water5 = $("#carousel_05").waterwheelCarousel({
		flankingItems: 4,
		horizon: 215,
		horizonOffset: 40,
		horizonOffsetMultiplier: .79999,
		separation: 250,
		edgeFadeEnabled: true,
		opacityMultiplier: 1,
		movingToCenter: function ($item) {
			$('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
		},
		movedToCenter: function ($item) {
			$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
		},
		movingFromCenter: function ($item) {
			$('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');

		},
		movedFromCenter: function ($item) {
			$('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');

		},
		clickedCenter: function ($item) {
			$('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');


		}
	});
//Calculate the width of the browser window
	var viewportWidth = $(window).width();

	if (viewportWidth <= 600) {
		carousel_water.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
		carousel_water2.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
		carousel_water3.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
		carousel_water4.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
		carousel_water5.reload({
			flankingItems: 1,
			separation: 0,
			edgeFadeEnabled: false,
			opacityMultiplier: 0
		});
	}
	else if (viewportWidth <= 767) {
		carousel_water.reload({
			flankingItems: 3
		});
		carousel_water2.reload({
			flankingItems: 3
		});
		carousel_water3.reload({
			flankingItems: 3
		});
		carousel_water4.reload({
			flankingItems: 3
		});
		carousel_water5.reload({
			flankingItems: 3
		});
	}
	else if (viewportWidth <= 991) {
		carousel_water.reload({
			flankingItems: 4
		});
		carousel_water2.reload({
			flankingItems: 4
		});
		carousel_water3.reload({
			flankingItems: 4
		});
		carousel_water4.reload({
			flankingItems: 4
		});
		carousel_water5.reload({
			flankingItems: 4
		});
	}
	//his arrows, id = carousel
	$('#prev').bind('click', function () {
		carousel_water.prev();
		return false
	});
	$('#next').bind('click', function () {
		carousel_water.next();
		return false;
	});

	//his arrows, id = carousel_02
	$('#prev_02').bind('click', function () {
		carousel_water2.prev();
		return false
	});
	$('#next_02').bind('click', function () {
		carousel_water2.next();
		return false;
	});

	//his arrows, id = carousel_03
	$('#prev_03').bind('click', function () {
		carousel_water3.prev();
		return false
	});
	$('#next_03').bind('click', function () {
		carousel_water3.next();
		return false;
	});

	//his arrows, id = carousel_04
	$('#prev_04').bind('click', function () {
		carousel_water4.prev();
		return false
	});
	$('#next_04').bind('click', function () {
		carousel_water4.next();
		return false;
	});

	//his arrows, id = carousel_05
	$('#prev_05').bind('click', function () {
		carousel_water5.prev();
		return false
	});
	$('#next_05').bind('click', function () {
		carousel_water5.next();
		return false;
	});

//Finger a finger - "Кольца без камней", id = carousel
	$("#carousel").swiperight(function() {
		carousel_water.prev();
	});
	$("#carousel").swipeleft(function() {
		carousel_water.next();
	});

	//Finger a finger - "Кольца с цирконом", id = carousel_02
	$("#carousel_02").swiperight(function() {
		carousel_water2.prev();
	});
	$("#carousel_02").swipeleft(function() {
		carousel_water2.next();
	});

//Finger a finger - "Кольца с цветными камнями", id = carousel_03
	$("#carousel_03").swiperight(function() {
		carousel_water3.prev();
	});
	$("#carousel_03").swipeleft(function() {
		carousel_water3.next();
	});

//Finger a finger - "Кольца с жемчугом", id = carousel_04
	$("#carousel_04").swiperight(function() {
		carousel_water4.prev();
	});
	$("#carousel_04").swipeleft(function() {
		carousel_water4.next();
	});

//Finger a finger - "Рекомендуем", id = carousel_05
	$("#carousel_05").swiperight(function() {
		carousel_water5.prev();
	});
	$("#carousel_05").swipeleft(function() {
		carousel_water5.next();
	});

	$('#reload').bind('click', function () {
		var newOptions = eval("(" + $('#newoptions').val() + ")");
		carousel_water.reload(newOptions);
		carousel_water2.reload(newOptions);
		carousel_water3.reload(newOptions);
		carousel_water4.reload(newOptions);
		carousel_water5.reload(newOptions);
		return false;
	});




});