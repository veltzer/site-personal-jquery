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
			html += '<img src="'+item.image+'" style="width:100%"></img>';
			html += '<div class="card_container">';
			html += '<h3>'+ item.title+'</h3>';
			html += '<h4>'+ item.subtitle+'</h4>';
			html += '<ul class="bc-list-nostyle">';
			html += '<li>By: '+item.authors+'</li>';
			html += '<li>Narrated by: '+item.narrators+'</li>';
			html += '<li>Length: '+item.length+'</li>';
			html += '<li>'+item.type+'</li>';
			html += '<li>Release Date: '+item.released+'</li>';
			html += '<li>Language: '+item.language+'</li>';
			html += '<li>Publisher: '+item.publisher+'</li>';
			html += '<li>Rating: '+item.rating+' ('+item.ratings_count+' ratings)</li>';
			html += '<li>Added: '+item.added+'</li>';
			html += '</ul>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
		});
		return html;
	}
	$.getJSON('books-data.json', function(data) {
		$('#pagination-container').pagination({
			dataSource: data,
			totalNumberLocator: function(response) {
				return data.length;
			},
			locator: "",
			showGoInput: true,
			showGoButton: true,
			formatGoInput: 'go to <%= input %> st/rd/th',
			pageSize: 4,
			showPageNumbers: false,
			showNavigator: true,
			callback: function(data, pagination) {
				dataContainer.html(simpleTemplating(data));
			},
		});
	});
});
