$(document).ready(function() {
	$('#tabs').tabslet({
		animation: true,
	});
	html_loading="<div id='msg'>Loading data...</div>";
	dataContainer=$('#books-data');
	dataContainer.html(html_loading);
	function simpleTemplating(data) {
		var html ='';
		$.each(data, function(index, item){
			html += '<div class="column">';
			html += '<div class="card">';
			html += '<img src="img_avatar.png" alt="Avatar" style="width:100%"></img>';
			html += '<div class="card_container">';
			html += '<h4><b>'+ item.name +'</b></h4>';
			html += '<p>'+item.author +'</p>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
		});
		return html;
	}
	$.getJSON('books-data.json', function(data) {
		$('#pagination-container').pagination({
			dataSource: data.items,
			totalNumberLocator: function(response) {
				return data.items.length;
			},
			pageSize: 4,
			callback: function(data, pagination) {
				dataContainer.html(simpleTemplating(data));
			},
		});
	});
});
