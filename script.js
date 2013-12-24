var tweetBoxes = [];
var idNum = 0;

$(function(){
	document.getElementById('draft').addEventListener("input", onInput, false);
});

function onInput(){
	splitTweets();
}

function splitTweets(){
	parseTweetString();
}

function parseTweetString(){
	var boxes = [];
	var words = [];
	var charCount = 0;
	var j = 0;

	words = document.getElementById('draft').value.split(" ");
	var tempTweet = "";
	for (var i = 0; i < words.length; i++) {
		charCount += words[i].length;
		tempTweet += words[i] + " ";
		console.log(tempTweet);
		boxes[j] = tempTweet;
		if(charCount >= 140){
			j++;
			tempTweet = "";
			charCount = 0;
		}
	};

	if(boxes.length > tweetBoxes.length){
		var diff = boxes.length - tweetBoxes.length;
		for (var i = 0; i < diff; i++) {
			new TweetBox(idNum, idNum);
			idNum++;
		}
	}
	for (var i = 0; i < tweetBoxes.length; i++) {
		tweetBoxes[i].domElement.value = boxes[i];
	};
}