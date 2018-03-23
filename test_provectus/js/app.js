$(document).ready(function() {

	$('.price_block-js').click(function (event) {
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
		event.preventDefault();


	});
	var o = {
		a: 2,
		m: function(){
			return this.a + 1;
		}
	};

	console.log(o.m()); // 3
// в этом случае при вызове 'o.m' this указывает на 'o'

	var p = Object.create(o);
// 'p' - наследник 'o'

	p.a = 12; // создаст собственное свойство 'a' объекта 'p'
	console.log(p.m()); // 13
// при вызове 'p.m' this указывает на 'p'.
// т.е. когда 'p' наследует функцию 'm' объекта 'o',
// this.a означает 'p.a', собственное свойство 'a' объекта 'p'

	"use strict";

	class Polygon {
		constructor(height, width) {
			this.height = height;
			this.width = width;
		}
	}

	class Square extends Polygon {
		constructor(sideLength) {
			super(sideLength, sideLength);
		}
		get area() {
			return this.height * this.width;
		}
		set sideLength(newLength) {
			this.height = newLength;
			this.width = newLength;
		}
	}

	var square = new Square(2);




});





