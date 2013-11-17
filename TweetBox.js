function TweetBox(id){
	var self = this;
	this.idNum = id;
	this.domElement = document.createElement("textarea");
	this.domElement.id = "tweet"+idNum;
	this.domElement.className = "form-control";
	this.domElement.rows = "3"

	$("#wrapper").append("<div id='tweets" + this.idNum + "' class='row clearfix'><div id = 'tweetColumn" + this.idNum + "' class='col-xs-8 column'></div><div id= 'buttons" + this.idNum + "' class='col-xs-4 column'><div class='row clearfix'><a class='btn btn-primary' id='custom-tweet-button" + this.idNum + "' >Tweet</a></div><div  class='row clearfix'><label id='count" + this.idNum + "' for='tweet'></label></div><script> document.getElementById('custom-tweet-button" + this.idNum + "').addEventListener('click', function (el) {  el.target.href = ''; var tweet = ($('#tweet" + this.idNum + "').val()); el.target.href = href='http://twitter.com/intent/tweet?text=' +  tweet});</script></div></div>");
	document.getElementById("tweetColumn" + this.idNum + "").appendChild(this.domElement);



	this.charLength = function (){
		return this.domElement.value.length;
	}
	
	this.domElement.addEventListener("input", onInput, false);
	this.domElement.addEventListener('keyup', this.isEmpty, false);

	this.checkMaxLength = function() {
		if(self.charLength() === 140){
			idNum++;
			var tweetbox = new TweetBox(idNum);
			tweetbox.domElement.focus();
			tweetBoxes.splice(tweetBoxes.indexOf(self)+1, 0, tweetbox);
		}
	}


	function onInput(){
		document.getElementById('count' + self.idNum).innerHTML = self.charLength();
		self.checkMaxLength();
		self.isEmpty();
	}

	this.isEmpty = function(){
		if(this.charLength() === 0){
			var currentIndex = tweetBoxes.indexOf(self);
			if(currentIndex !== 0){
				tweetBoxes[currentIndex-1].domElement.focus();
				tweetBoxes.splice(currentIndex,1);
				document.getElementById("wrapper").removeChild(document.getElementById("tweets" + this.idNum));
			}
		}
	}
}

