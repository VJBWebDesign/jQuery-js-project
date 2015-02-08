var current_size = 16;
var current_operation = 1;


$(document).ready(function() {
    load(current_size);
	default_colors();
});

function load(size) {
	var square_size = $("#container").width() / size - 2; //-2 for borders
	//Create the size x size grid.
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			$("#container").append("<div class='square'></div>");
		} 
	$("#container").append("<div class='new_row'></div>");
	}

	//Adjust the square size.
	$(".square").css('width', square_size);
	$(".square").css('height',square_size);
};