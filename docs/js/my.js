$(document).ready(function() {
	$('#tabs').tabslet({
		animation: true,
	});
	dataContainer=$('#books-data');
	$('#pagination-container').pagination({
		dataSource: "books-data.json",
		locator: 'items',
		totalNumberLocator: function(response) {
			return response.items.length;
		},
		pageSize: 4,
		ajax: {
			beforeSend: function() {
				dataContainer.html('Loading data...');
			}
		},
		callback: function(data, pagination) {
			// template method of yourself
			//var html = template(data);
			dataContainer.html('name is '+data[0].name);
		}
	});
});
