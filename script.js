$(function(){
	var chars;
	$("#tweet").keyup(function(){
		chars = $(this).val().length; 
	  $("#count").text(chars);
	  checkLength(chars);
	});
});

function checkLength(chars){
	if(chars >= 140){
		$("#tweets").append("<div class='col-xs-8 column'><textarea id='tweet2' class='form-control' rows='3'></textarea></div>");

	}
	console.log(chars);
}
