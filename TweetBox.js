function TweetBox(idNum){
	var self = this;
	this.domElement = document.createElement("textarea");
	this.domElement.id = "tweet"+idNum;
	this.domElement.className = "form-control";
	this.domElement.rows = "3"

	$("#tweets").append("<div id = 'tweetColumn" + idNum + "' class='col-xs-8 column'></div><div class='col-xs-4 column'><div class='row clearfix'><a class='btn btn-primary' id='custom-tweet-button" + idNum + "' href='http://twitter.com/intent/tweet'>Tweet</a></div><div class='row clearfix'><label id='count" + idNum + "' for='tweet'></label></div><script> document.getElementById('custom-tweet-button" + idNum + "').addEventListener('click', function (el) { var tweet = ($('#tweet" + idNum + "').val()); el.target.href += '?text=' +  tweet});</script></div>");
	document.getElementById("tweetColumn" + idNum + "").appendChild(this.domElement);

	this.charLength = function (){
		return this.domElement.value.length;
	}
	
	this.domElement.addEventListener("input", onInput, false);
	this.checkMaxLength = function() {
		if(self.charLength() === 140){
			var tweetbox = new TweetBox(idNum+1);
			tweetbox.domElement.focus();
			tweetBoxes.push(tweetbox);
		}
	}
	function onInput(){
		document.getElementById('count' + idNum).innerHTML = self.charLength();
		self.checkMaxLength();
	}
	

}

