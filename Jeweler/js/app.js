$('.js_hide').hide();

$('.btn_js-hide .dropdown-toggle').click(function (  ) {
	$('.js_hide').toggle('slow');
});
$('.dc_txt .close').click(function (  ) {
	$('.js_hide').hide('slow');
});

$(document).click(function(event) {
	if ($(event.target).closest(".js_hide").length) return;
	$(".js_hide").hide("slow");
	// $("body").css("overflow-y", "auto");
	event.stopPropagation();
});
function scroll_menu_fixed () {
	$('.burger_scroll_menu .menu_burger').css('display', 'none');

	$(document).scroll(function(){
		// $ ('.burger_scroll_menu .menu_burger').hide ();
		if($(this).scrollTop()>150 ){
			$('.header').addClass('fixed');
			$('.fixed').css({'top':'0px', 'transition':'all .4s ease'});
			// $ ('.burger_scroll_menu .menu_burger').show ();

			$('#floating_map .cs_block').css("padding-top", "201px");
			$('.cards_section .cs_block_img img').css('top','55%');
			if($(this).scrollTop()>560 )
				$('.h_pagination').show('slow');
			if($(window).width() >= 768) {
				$ ('.burger_scroll_menu .menu_burger').css ('display', 'inline-block');
				$ ('.burger_scroll_menu #ul_menu_nav').hide ();
				$ ('.burger_scroll_menu #ul_menu_nav').addClass ('hide_menu');

			}

			else
			{}
		}

		else if ($(this).scrollTop()<560)
		{
			$('.header').removeClass('fixed');
			// $('.fixed').slideUp('slow');

			$('.fixed').css({'top':'-200px', 'transition':'all .4s ease'});
			// $('.h_top').css({'top':'0px', 'transition':'all .4s ease'});

			$('.h_pagination').hide('slow');
			$('.burger_scroll_menu .menu_burger').css('display', 'none');
			$('.burger_scroll_menu #ul_menu_nav').show();
			$('.burger_scroll_menu #ul_menu_nav').removeClass('hide_menu');
			$('#floating_map .cs_block').css("padding-top", "61px");
			$('.cards_section .cs_block_img img').css('top','50%');

		}

});

}
//UI_PAGE (and CATALOG_COLLECTION_PAGE) - show drop down menu with checkbox sort
function sort_block_click (  ) {
	$("#sort").click(function (e) {
		$(this).siblings(".drop_sort_txt").show();
	});
//UI_PAGE (and CATALOG_COLLECTION_PAGE) - To set the selected radio value instead of Sort
	$('input:radio').click(function (  ) {
		var $radio_check_word = $("label[for='"+this.id+"']").text();

		// alert($radio_check_word);

		$("#sort").find("div.sort_txt").text($radio_check_word);
	});
	//UI_PAGE (and CATALOG_COLLECTION_PAGE) - hide drop down menu with checkbox sort
	$(document).click(function (e){ // событие клика по веб-документу
		var $elemSort = $("#sort");
		var $drop_filter_desk = $("#filtr");
		var $drop_filter_xs = $("#filtr-xs");
		if ($elemSort.has(e.target).length === 0)  // и не по его дочерним элементам
		{
			$elemSort.siblings(".drop_sort_txt").hide();
		}

	});
}
function init_accordion () {
	//CARDS_PAGE accordion with initialization slick slider "Как купить"
	$("#accordion_js div.panel").hide();
	// var $accord = $(".accordion");
	$("#accordion_js .accordion").click(function () {

			if($(".accordion").hasClass("active") && $(".accordion").next().hasClass("open_panel"))
			{
				$(".accordion").removeClass("active");
				$(".accordion").next().removeClass("open_panel");
				$(".accordion").next().slideUp(100);
			}
			$(this).prev().slideUp(100);
			$(this).addClass("active");
			$(this).next().addClass("open_panel");
			$(this).next().slideDown(100);
			// $(".accordion").next().slideUp();


	});


}
function footer_init_accordion992 (  ) {
	//footer init accordion
	$(".footer_menu div.panel").hide();
	// var $accord = $(".accordion");
	$(".footer_menu div.accordion").click(function () {
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$(this).next().removeClass("open_panel");
			$(this).next().slideUp(200);

		}
		else
		{
			if($(".accordion").hasClass("active") && $(".accordion").next().hasClass("open_panel"))
			{
				$(".accordion").removeClass("active");
				$(".accordion").next().removeClass("open_panel");
				$(".accordion").next().slideUp(200);
			}
			$(this).prev().slideUp(200);
			$(this).addClass("active");
			$(this).next().addClass("open_panel");
			$(this).next().slideDown(200);
		}
	});

}


function sticking_of_the_card_when_scrolling () {

	var a = document.querySelector('#floating_map'), b = null, P = 0;
	window.addEventListener('scroll', Ascroll, false);
	document.body.addEventListener('scroll', Ascroll, false);
	function Ascroll() {
		if (b == null) {
			var Sa = getComputedStyle(a, '');

			var s = '';
			for (var i = 0; i < Sa.length; i++) {
				if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
					s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; ';
				}
			}

			b = document.createElement('div');
			b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
			a.insertBefore(b, a.firstChild);

			var l = a.childNodes.length;
			for (var i = 1; i < l; i++) {
				b.appendChild(a.childNodes[1]);
			}
			a.style.height = b.getBoundingClientRect().height + 'px';
			a.style.padding = '0';
			a.style.border = '0';
		}
		var Ra = a.getBoundingClientRect(),
			R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#description_card').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
		if ((Ra.top - P) <= 0) {
			if ((Ra.top - P) <= R) {
				b.className = 'stop';
				b.style.top = - R +'px';
			} else {
				b.className = 'sticky';
				b.style.top = P + 'px';
			}
		} else {
			b.className = '';
			b.style.top = '';
		}
		window.addEventListener('resize', function() {
			a.children[0].style.width = getComputedStyle(a, '').width
		}, false);
	}

}

function addActive(){
	$("#accordion").ready(function (e) {
		$(this).find(".in").parent("div.panel.panel-default").removeClass('active');
		// $(this).find(".in").parent(".panel-heading").addClass('active');
		// $(this).find(".in").siblings().addClass('active');
		$(this).find(".in").parent("div.panel.panel-default").addClass('active');
	});
}
function setting_effects_when_clicking () {

	//blue check for slide in the filtr window
	$(".selection").click(function () {
		$(this).toggleClass("selection_active");
	});
	//CARDS_PAGE - set blue check on the cards' slick slider "дополнить свой образ"
	$(".cards_page .complement_slider .cards .card_img .selection").click(function () {
		$(this).parent().parent("div.cards").toggleClass("active_cards");
	});
	//CARDS_PAGE - set arrow for accordion
	addActive();
	$(".panel-default").click(function (e) {
		$(".panel-default").removeClass('active');
		// $(".panel-heading").removeClass('active');
		if($(this).children().hasClass("in")){
			$(this).removeClass('active');
		}
		else{
			$(this).addClass('active');
		}
		$('#accordion').on('shown.bs.collapse', function () {
			if($(".how_to_buy_slider").length)
			{
				$(".how_to_buy_slider").slick({
					arrow: true,
					dots: false,
					// centerMode: true,
					// centerPadding: '10px',
					infinite: true,
					slidesToShow: 1
				});
			}
		});
	});
	//CARDS_PAGE - set blue border on the cards' slick slider "Металл"
	$(".scale_block .sc_metall_js").click(function () {
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active")
		}

		$(".scale_block .owl-item .sc_metall_js").removeClass("active");
		$(this).addClass("active")
	});
	//CARDS_PAGE - set blue border on the cards' slick slider  "Камень"
	$(".scale_block .sc_js").click(function () {
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active")
		}

			$(".scale_block .owl-item .sc_js").removeClass("active");
			$(this).addClass("active")
	});
	//CARDS_PAGE - set blue border on the  switches on the UI_PAGE and CARDS_PAGE
	$(".switch_big").click(function (e) {
		if ($(this).siblings().hasClass("active"))
		{
			$ (this).siblings().toggleClass ("active");
		}
		$ (this).toggleClass ("active");
	});
	//ALL PAGES show/hide form search
	$("#form_serch").click(function () {
		$(".search_field").show();
		$("body").css("overflow", "scroll");


	});

	//CATALOG_COLLECTION_PAGE / CATALOG_FULL_PAGE - button close for filtr window
	$(".close").click(function (e) {
		$(".filtr_shadow").css("display", "none");
		// $("body").css("overflow-y", "auto");
		$(".buttons_block").css("right", "-700px");
		$(".filtr_window").css("right", "-700px");
		$(".filtr-xs").css("right", "-700px");
		$(".search_field").hide();

		$("body").css("overflow-y", "auto");

	});
	$(".proba").click(function (e) {
		$(this).toggleClass("proba_active");
	});

	//button "Сбросить" - all checked off
	$("#reset_fltr").click(function () {
		if($(".proba").hasClass("proba_active"))
		{
			$(".proba").removeClass("proba_active");
			$(".count_selection_proba").text(" ");//Zero the number of selected items - "Проба"
			$(".count_selection_size").text(" "); //Zero the number of selected items - "Размер"
		}
		if($(".selection").hasClass("selection_active"))
		{
			$(".selection").removeClass("selection_active");//Remove ticks from the squares of the sliders
			$(".count_selection_metall").text(" "); //Zero the number of selected items - "Металл"
			$(".count_selection_scale").text(" "); //Zero the number of selected items - "Камень"
			$(".count_selection_style").text(" "); //Zero the number of selected items - "Стиль"
			$(".count_selection_collections").text(" "); //Zero the number of selected items - "Коллекции"
			$(".count_selection_in_the_shop").text(" "); //Zero the number of selected items - "Наличие в магазине"
		}
		else {}

	});
	//end CATALOG_COLLECTION_PAGE / CATALOG_FULL_PAGE

    //MAIN_PAGE - full heart when clicked
    $(".hard").click(function (e) {
        $(this).toggleClass("full");
    });
}
function close_the_filter_by_click_shadow(){
	$("body").css("position", "relative");
	$(".filtr_shadow").css("display", "none");
	$(".filtr_window").css("right", "-700px");
	$(".buttons_block").css("right", "-700px");


}
function hide_show_main_menu() {
	//BEGIN CATALOG COLLECTION PAGE - hide/show main menu
	// $("#ul_menu_nav").hide();
	if($("#ul_menu_nav").hasClass("hide_menu"))
	{
		$("#ul_menu_nav").hide();
	}
	if( $("#ul_menu_nav_scroll").hasClass("hide_menu"))
	{
		$("#ul_menu_nav_scroll").hide();
	}
	else
	{ }
	if($(window).width() >= 768)
	{
		$("#id_burger").click(function() {
			$(this).toggleClass("is-active");
			if ($(this).hasClass("is-active")) {
				if ($("#ul_menu_nav").hasClass("hide_menu")) {
					$("#ul_menu_nav").slideDown(400);
				}
			}
			else {
				$("#ul_menu_nav").slideUp(400);
			}

		});
		$("#id_burger2").click(function() {
			$(this).toggleClass("is-active");
			if ($(this).hasClass("is-active")) {
				if ($("#ul_menu_nav_scroll").hasClass("hide_menu")) {
					$("#ul_menu_nav_scroll").slideDown(400);
				}
			}
			else {
				$("#ul_menu_nav_scroll").slideUp(400);
			}

		});
	}
	else if ($(window).width() <= 768)
	{
		$(".menu_burger").css("display", "none");
		$('.burger_scroll_menu .menu_burger').css('display', 'none');
		$("#ul_menu_nav").css("display", "block");
		$("#ul_menu_nav_scroll").css("display", "block");
		$('.nav .navbar-nav').removeClass('hide_menu');
	}
//end CATALOG COLLECTION PAGE - hide/show main menu
}
function filtr_hide_show () {
	//hide/show window filtr for desktop
	$("#filtr").click(function () {
		$(".filtr_shadow").css("display", "block");
		$(".filtr_window").css("right", "0px");
		$(".buttons_block").css("right", "0px");
		$("body").css("overflow", "scroll");
		// OffScroll ();  //Запустили отмену прокрутки
	});
	//hide/show window filtr for mobile
	$("#filtr-xs").click(function () {
		$(".filtr_shadow").css("display", "block");
		$(".filtr_window").css("right", "0px");
		$(".buttons_block").css("right", "0px");
		$("body").css("overflow", "scroll");
		// OffScroll ();  //Запустили отмену прокрутки
	});
}
function progress_bar_in_filter () {
	//FILTER - PROGRESS BAR FOR PRICE IN CATALOG COLLECTION PAGE
	var rub = " ₽";
	$("#filtr_id").ionRangeSlider({
		type: "double",
		min: 1500,
		max: 999999,
		from: 1500,
		to: 999999,
		step: 1,
		grid: true,
		onStart: function(data) {
			console.log(data);
			$(".f__sl-input-from").val(data.from + rub);
			$(".f__sl-input-to").val(data.to + rub);
		},
		onChange: function(data) {
			console.log(data);
			$(".f__sl-input-from").val(data.from + rub);
			$(".f__sl-input-to").val(data.to + rub);
		},
		onFinish: function(data) {
			console.log(data);
			$(".f__sl-input-from").val(data.from + rub);
			$(".f__sl-input-to").val(data.to + rub);
		},
		onUpdate: function(data) {
			console.log(data);
			$(".f__sl-input-from").val(data.from + rub);
			$(".f__sl-input-to").val(data.to + rub);
		}
	});

}
function discount_card_hide_show () {
	for(var i = 0; i < $("div.cards").length; i++)
	{
		// alert($("div.cards").find(".discount p").eq(i).text());
		if($("div.cards").find(".discount p").eq(i).text() == "" )
		{
			$("div.cards").find(".discount").eq(i).css("visibility", "hidden");

		}
		else
		{
			$("div.cards").find(".discount").eq(i).css("visibility", "visible");
		}
		if($("div.cards").find(".three_d p").eq(i).text() == "" )
		{
			$("div.cards").find(".three_d").eq(i).css("visibility", "hidden");
		}
		else
		{
			$("div.cards").find(".three_d").eq(i).css("visibility", "visible");
		}
	}
}
function discount_basket_hide_show (  ) {
	// hide / show discount in the basket
	for(var i = 0; i < $(".list__one").length; i++)
	{
		// alert($("div.cards").find(".discount p").eq(i).text());
		if($(".list__one").find(".discount p").eq(i).text() == "" )
		{
			$(".list__one").find(".discount").eq(i).css("visibility", "hidden");

		}
		else
		{
			$(".list__one").find(".discount").eq(i).css("visibility", "visible");
		}
	}
}
function count_goods_in_basket () {
	$(".sum__gds").text($(".list__one").length);

}
function filter_count_selection_active () {

	$('.cc_sl_05 .selection').click(function (  ) { //filter-window count and display the number of selected items "Металл"

		if($('.cc_sl_05 .selection_active').length > 0)
		{
			$("span.count_selection_metall").text("(" + $('.cc_sl_05 .selection_active').length + ")");
		}
		if ($('.cc_sl_05 .selection_active').length == 0)
		{
			$(".count_selection_metall").text(" ");
		}
	});

	$('.cc_sl_06 .proba').click(function (  ) { //filter-window count and display the number of selected items "Проба"

		if($('.cc_sl_06 .proba_active').length > 0)
		{
			$("span.count_selection_proba").text("(" + $('.cc_sl_06 .proba_active').length + ")");
		}
		if ($('.cc_sl_06 .proba_active').length == 0)
		{
			$(".count_selection_proba").text(" ");
		}
	});

	$('.cc_sl_02 .selection').click(function (  ) { //filter-window count and display the number of selected items "Металл"

		if($('.cc_sl_02 .selection_active').length > 0)
		{
			$("span.count_selection_scale").text("(" + $('.cc_sl_02 .selection_active').length + ")");
		}
		if ($('.cc_sl_02 .selection_active').length == 0)
		{
			$(".count_selection_scale").text(" ");
		}
	});

	$('.cc_sl_03 .proba').click(function (  ) { //filter-window count and display the number of selected items "Размер"

		if($('.cc_sl_03 .proba_active').length > 0)
		{
			$("span.count_selection_size").text("(" + $('.cc_sl_03 .proba_active').length + ")");
		}
		if ($('.cc_sl_03 .proba_active').length == 0)
		{
			$(".count_selection_size").text(" ");
		}
	});

	$('.cc_sl_04 .selection').click(function (  ) { //filter-window count and display the number of selected items "Стиль"

		if($('.cc_sl_04 .selection_active').length > 0)
		{
			$("span.count_selection_style").text("(" + $('.cc_sl_04 .selection_active').length + ")");
		}
		if ($('.cc_sl_04 .selection_active').length == 0)
		{
			$(".count_selection_style").text(" ");
		}
	});
	$('.cc_sl_07 .selection').click(function (  ) { //filter-window count and display the number of selected items "Коллекции"

		if($('.cc_sl_07 .selection_active').length > 0)
		{
			$("span.count_selection_collections").text("(" + $('.cc_sl_07 .selection_active').length + ")");
		}
		if ($('.cc_sl_07 .selection_active').length == 0)
		{
			$(".count_selection_collections").text(" ");
		}
	});
	$('.cc_sl_08 .selection').click(function (  ) { //filter-window count and display the number of selected items "Наличие в магазине"

		if($('.cc_sl_08 .selection_active').length > 0)
		{
			$("span.count_selection_in_the_shop").text("(" + $('.cc_sl_08 .selection_active').length + ")");
		}
		if ($('.cc_sl_08 .selection_active').length == 0)
		{
			$(".count_selection_in_the_shop").text(" ");
		}
	});
}
function count_cash_gds_in_basket () {
	var $sum_cash = 0;
		$(".price_product").each(function () {
			var $number = $(this).text();

				$sum_cash += parseInt($number.replace(/[^-0-9]/gim,''));
			$(".sum__cash").text($sum_cash);
		});

}
function drop_down_basket () {
	$('#basket-js, #basket-js-xs').click(function () {
		$('.basket-shadow').css('display', 'block');
		$('.drop-basket').show();
	});
	$('#basket-js').click(function () {
		$('.basket-shadow').css('display', 'block');
		$('.drop-basket').show();
	});
}
function remove_gds_in_basket () {
	$(".list__one .close").click(function (  ) {
		$(this).closest('.list__one').remove();
		count_goods_in_basket();
		count_cash_gds_in_basket();
		$("body").css("overflow", "scroll");

	});

}
function mask_for_phone () {
	//CARDS_PAGE - Phone mask
	$("#phone_number").mask("+7(999)999-99-99", {placeholder:"+7(___)___-__-__"});
}
function mask_for_email (  ) {
	//CARDS_PAGE - Email mask
	$('#mail').blur(function() {
		if($(this).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test($(this).val()))
			{
				// $(this).css({'border' : '1px solid #569b44'});
				// $('#valid').text('Верно');
			}
			else
			{
				$(this).css({'border' : '1px solid #ff0000'});
				$('.valid').text('Введите e-mail, используя @');
			}
		} else {
			$(this).css({'border' : '1px solid #ff0000'});
			$('.valid').text('Введите e-mail, используя @');
		}
	});
}
function slow_scroll_ring_size (  ) {
	$(".ring_size_block ").click(function () {

		$('html, body').animate({ scrollTop: $(".ring_size_block ").offset().top - 200 }, 1500);
		// alert($(".ring_size_block ").offset().top - 500);
	});
}
slow_scroll_ring_size();

scroll_menu_fixed();
init_accordion();   //CALL ACCORDION for FOOTER and CARDS_PAGE

// position_drop_menu($("#ul_menu_nav")); //SET position drop down menu on all pages
// position_blue_slide();
setting_effects_when_clicking(); //SET effects when click
hide_show_main_menu(); // hide/show main menu

filtr_hide_show(); //FILTER - PROGRESS BAR FOR PRICE IN CATALOG COLLECTION PAGE
filter_count_selection_active();

progress_bar_in_filter();
sort_block_click(); //UI_PAGE (and CATALOG_COLLECTION_PAGE) - show drop down menu with checkbox sort and  hide drop down menu with checkbox sort
discount_card_hide_show(); //hide / show discount or three_d on the card
discount_basket_hide_show();// hide / show discount in the basket
count_goods_in_basket();//count goods in the basket
count_cash_gds_in_basket(); //count cash goods in the basket
remove_gds_in_basket();

drop_down_basket(); //drop down basket
mask_for_phone(); //CARDS_PAGE - Phone mask()
mask_for_email(); //CARDS_PAGE - Email mask

//close FILTER_WINDOW by clicking on the shadow
$(".filtr_shadow, .basket-shadow").click(function ( ) {
	close_the_filter_by_click_shadow();
	$('.basket-shadow').css('display', 'none');
	$('.drop-basket').hide();
	$('body').css('overflow-y', 'auto');
});

var viewportWidth = $(window).width();
if(viewportWidth > 992)
{
	// sticking_of_the_card_when_scrolling(); //stick card CARD_PAGE
	$(".footer_menu div.panel").show();

	$('header .h_middle .navbar-nav>li').mouseenter(function(){
		// setTimeout(function (  ) {
			init_menu_all();
		// }, 500);


	}).mouseleave(function(){

	});

}
if(viewportWidth < 992)
{
	// $(".footer_menu div.panel").hide();
	footer_init_accordion992(); //Turn the footer into an accordion
}





$(document).ready(function() {
	$("#ring_size_list_1").select2();
	$("#ring_size_list_1").click(function (  ) {
		$('option', $("#my_select")).remove();
	});

    // BEGIN CATALOG COLLECTION PAGE - "Расширенный фильтр"
    // scroll for filtr window
    $("#filtr").on(function () {
        $("#scroll_for_filtr").slimScroll(
            {
                size: '2px',
                position: 'right',
                color: '#7d7d7d',
                distance: '17px',
                railOpacity: 0.3,
                wheelStep: 10
            });
    });

    //CATALOG_COLLECTION_PAGE hide/show form_search when we call bootstrap menu burger
    $(".navbar-toggle").click(function () {
      $("#form_serch").toggleClass("visib");
    });

    //style for input - "Введите имя"
    $('input.inp_enter_name').on('change', function ()
    {
        if ($(this).val()!='' && !$('input#enter_name').hasClass("inp_entered_name"))
            $(this).attr("class",'inp_entered_name');
        if ($(this).val()=='' && $('input#enter_name').hasClass("inp_entered_name"))
        {
            // alert("yes");
            $(this).removeAttr("class",'inp_entered_name');
            $(this).attr("class",'inp_enter_name');
        }
    });


    //ALL PAGES header top drop down menu city "Москва"
    $(".h_top .dropdown").on(function () {
                $('ul.ul_list_city').slimScroll({
                    size: '2px',
                    position: 'right',
                    color: '#7d7d7d',
                    distance: '17px',
                    railOpacity: 0.3,
                    wheelStep: 10
                });
            });




});


$(window).resize(function () {
    var viewportWidth = $(window).width();
	// if(viewportWidth > 992)
	// {
	// 	sticking_of_the_card_when_scrolling();
	//
	// }
	setting_effects_when_clicking();
    if(viewportWidth > 768)
    {
      // position_drop_menu($("#ul_menu_nav"));
    }
    if(viewportWidth <= 768)
    {
        // var $position_blue_block = $("#ul_menu_nav").offset().left;
        // $(".cc_padding").css("padding-left",$position_blue_block);
    }
});















