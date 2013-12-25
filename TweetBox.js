function TweetBox(id, index){
	var self = this;
	this.idNum = id;
	this.domElement = document.createElement("textarea");
	this.domElement.disabled = true;
	this.domElement.id = "tweet"+idNum;
	this.domElement.className = "form-control";
	this.domElement.rows = "3"
	this.index = index;
	tweetBoxes.splice(this.index, 0, this);
	this.humanIndex = this.index + 1;
	this.currentCountTag = " (" + this.humanIndex + "/" + tweetBoxes.length + ")"
	this.domElement.value += this.currentCountTag;

	$("#wrapper").append("<div id='tweets" + this.idNum + "' class='row clearfix'><div id = 'tweetColumn" + this.idNum + "' class='col-xs-8 column'></div><div id= 'buttons" + this.idNum + "' class='col-xs-4 column'><div class='row clearfix'><a class='btn btn-primary' id='custom-tweet-button" + this.idNum + "' >Tweet</a></div><div  class='row clearfix'><label id='count" + this.idNum + "' for='tweet'></label></div><script> document.getElementById('custom-tweet-button" + this.idNum + "').addEventListener('click', function (el) {  el.target.href = ''; var tweet = encodeURIComponent(($('#tweet" + this.idNum + "').val())); el.target.href = href='http://twitter.com/intent/tweet?text=' +  tweet});</script></div></div>");
	document.getElementById("tweetColumn" + this.idNum + "").appendChild(this.domElement);

	this.tweetWrapper = document.getElementById('tweets'+this.idNum);

	this.charLength = function (){
		return this.domElement.value.length;
	}

	this.checkMaxLength = function() {
		if(self.charLength() === 140){
			idNum++;
			var index = tweetBoxes.indexOf(self)+1;
			var tweetbox = new TweetBox(idNum, index);
			var i = 1;
			$.each(tweetBoxes, function(){
				$('#wrapper').append(this.tweetWrapper);
				this.newCountTag = " (" + i + "/" + tweetBoxes.length + ")";
				this.domElement.value = this.domElement.value.replace(this.currentCountTag,this.newCountTag);
				this.currentCountTag = this.newCountTag;
				i++;
			});
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

	this.countURLs = function(){
		var str = this.domElement.value;
		var re = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
		var res = str.match(re);
		return res;
	}
}

