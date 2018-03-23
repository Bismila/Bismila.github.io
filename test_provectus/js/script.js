$(document).ready(function() {
	
	$("td.td_top a").each(function() {
		
		var text = $(this).text();
		text = "Тестовый сайт -> " + text;
		
		$(this).tooltip({
			content:text
		});
	});
	
	$('img').tooltip({
		show:{
			effect:'drop',
			duration:700,
			easing:"easeOutBounce"
		},
		hide:{
			effect:'explode',
			duration:500,
			delay:500
		},
		//disabled:true
		//items:'#id'
		position:{
			my:'left top',
			at:'right bottom'
		},
		tooltipClass: "my_class",
		open:function() {
			//alert('Open widget')
		}
		//track:true
	});
	
	
});