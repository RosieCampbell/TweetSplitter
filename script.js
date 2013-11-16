$(function(){
	$("#tweet").keyup(function(){
	  $("#count").text($(this).val().length);
	});
});

