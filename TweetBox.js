function TweetBox(id){
	var self = this;
	this.idNum = id;
	this.domElement = document.createElement("textarea");
	this.domElement.id = "tweet"+idNum;
	this.domElement.className = "form-control";
	this.domElement.rows = "3"

	$("#wrapper").append("<div id='tweets" + this.idNum + "' class='row clearfix'><div id = 'tweetColumn" + this.idNum + "' class='col-xs-8 column'></div><div id= 'buttons" + this.idNum + "' class='col-xs-4 column'><div class='row clearfix'><a class='btn btn-primary' id='custom-tweet-button" + this.idNum + "' >Tweet</a></div><div  class='row clearfix'><label id='count" + this.idNum + "' for='tweet'></label></div><script> document.getElementById('custom-tweet-button" + this.idNum + "').addEventListener('click', function (el) {  el.target.href = ''; var tweet = ($('#tweet" + this.idNum + "').val()); el.target.href = href='http://twitter.com/intent/tweet?text=' +  tweet});</script></div></div>");
	document.getElementById("tweetColumn" + this.idNum + "").appendChild(this.domElement);

	this.tweetWrapper = document.getElementById('tweets'+this.idNum);

	this.charLength = function (){
		return this.domElement.value.length;
	}
	
	this.domElement.addEventListener("input", onInput, false);
	this.domElement.addEventListener('keyup', this.isEmpty, false);

	this.checkMaxLength = function() {
		if(self.charLength() === 140){
			idNum++;
			var tweetbox = new TweetBox(idNum);
			tweetBoxes.splice(tweetBoxes.indexOf(self)+1, 0, tweetbox);
			$.each(tweetBoxes, function(){
				$('#wrapper').append(this.tweetWrapper);
			});
			//tweetBox.domElement
			tweetbox.domElement.focus();
			self.countURLs();
		}
	}


	function onInput(){
		var urls = self.countURLs();
		var urlChars = 0;
		var adjustment= 0;
		if(urls){
			for (var i = urls.length - 1; i >= 0; i--) {
				urlChars += urls[i].length;
			};
			adjustment = urls.length*23;
		}
		var chars = self.charLength() - urlChars + adjustment;
		document.getElementById('count' + self.idNum).innerHTML = chars;
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

	this.countURLs = function(){
		var str = this.domElement.value;
		var re = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
		var res = str.match(re);
		return res;
	}
}

