$(document).ready(function() {

	$('.price_block').click(function (event) {
		var currParentElement = $(this).parent().parent().parent();
		var allElementsPriceBlock  = $('.price_block');

		if(currParentElement.hasClass('act_indiv'))
		{
			if(allElementsPriceBlock.hasClass('active'))
			{
				allElementsPriceBlock.removeClass('active');
			}
			currParentElement.siblings().removeClass('active');
			currParentElement.find('price_block').each(function () {
				$(this).removeClass('active');
			});
			currParentElement.addClass('active');

			currParentElement.find('.price_block').each(function () {
				$(this).removeClass('active');
			});
			$(this).addClass('active');
		}

		if(currParentElement.hasClass('act_fam'))
		{
			if(allElementsPriceBlock.hasClass('active'))
			{
				allElementsPriceBlock.removeClass('active');
			}
			currParentElement.siblings().removeClass('active');
			currParentElement.addClass('active');
			currParentElement.find('.price_block').each(function () {
				$(this).removeClass('active');
			});
			$(this).addClass('active');
		}

		if(currParentElement.hasClass('act_busin'))
		{

			if(allElementsPriceBlock.hasClass('active'))
			{
				allElementsPriceBlock.removeClass('active');
			}
			currParentElement.siblings().removeClass('active');
			currParentElement.addClass('active');
			currParentElement.find('.price_block').each(function () {
				$(this).removeClass('active');
			});
			$(this).addClass('active');
		}


	});





});





