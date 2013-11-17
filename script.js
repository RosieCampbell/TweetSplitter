$(function(){
	newTextArea(0);
});

function checkLength(chars, i){
	if(chars === 140){
		newTextArea(i+1);
	}
}

function addListeners(i){
	var t = document.getElementById("tweet"+i);
	t.addEventListener("input", function(){
		var chars;
		chars = $(this).val().length; 
		$("#count"+i).text(chars);
		checkLength(chars, i);
	}, false);
}

function newTextArea(i){
	$("#tweets").append("<div class='col-xs-8 column'><textarea id='tweet" + i + "' class='form-control' rows='3'></textarea></div><div class='col-xs-4 column'><label id='count" + i + "' for='tweet" + i + "'></label><a id='custom-tweet-button" + i + "' href='http://twitter.com/intent/tweet'>Tweet</a><script> document.getElementById('custom-tweet-button" + i + "').addEventListener('click', function (el) { var tweet = ($('#tweet" + i + "').val()); el.target.href += '?text=' +  tweet});</script></div>");
		document.getElementById("tweet" + i).focus();
		addListeners(i);

}