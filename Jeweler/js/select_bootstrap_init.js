$(document).ready(function() {

	//UI_PAGE - select bootstrap "Выберите размер"
	$("#ring_size_list_1.js-example-single").select2({
		tags: true,
		// placeholder: "Выберите размер"
		// allowClear: true,
	});
	//UI_PAGE - scroll for select bootstrap "Выберите размер"
	$("#ring_size_list_1.js-example-single").on('select2:open', function () {
		$('.select2-results__options').slimScroll({
			size: '2px',
			position: 'right',
			color: '#7d7d7d',
			distance: '17px',
			railOpacity: 0.3,
			wheelStep: 10
		});
	});

	//UI_PAGE - function for show image select-search bootstrap "Поиск среди 50 000 изделий"
	function formatState (state) {
		if (!state.id) { return state.text; }
		var $state = $(
			'<span><img src="img/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>'
		);
		return $state;
	}
	//UI_PAGE - select-search bootstrap "Поиск среди 50 000 изделий"
	$(".js-example-placeholder-multiple").select2({
		tags: true,
		placeholder: "Поиск среди 50 000 изделий",
		templateResult: formatState,
		templateSelection: formatState
	});
	//UI_PAGE - scroll for select-search bootstrap "Поиск среди 50 000 изделий"
	$(".js-example-placeholder-multiple").on('select2:open', function () {
		$('.select2-results__options').slimScroll({
			size: '2px',
			position: 'right',
			color: '#7d7d7d',
			distance: '17px',
			railOpacity: 0.3,
			wheelStep: 10
		});
	});
});