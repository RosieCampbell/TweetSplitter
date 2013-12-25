var tweetBoxes = [];
var idNum = 0;

$(function(){
	document.getElementById('draft').addEventListener("input", onInput, false);
});

function onInput(){
	document.getElementById('count').innerHTML = document.getElementById('draft').value.length;
	splitTweets();
}

function splitTweets(){
	parseTweetString();
}

function parseTweetString(){
	var boxes = [];
	var words = [];
	var j = 0;

	words = document.getElementById('draft').value.split(" ");
	var tempTweet = [];
	for (var i = 0; i < words.length; i++) {
		tempTweet.push(words[i]);
		if(tempTweet.join(" ").length < 134){
			boxes[j] = tempTweet.join(" ");
		}else{
			tempTweet.pop();
			boxes[j] = tempTweet.join(" ");
			tempTweet = [];
			tempTweet.push(words[i]);
			j++;
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
		var tweetCount = i + 1;
		tweetBoxes[i].domElement.value += " (" + tweetCount + "/" + tweetBoxes.length + ")";
		document.getElementById('count' + tweetBoxes[i].idNum).innerHTML = tweetBoxes[i].domElement.value.length;

	};
}

function updateTweetCount(){
	for (var i = 0; i < tweetBoxes.length; i++) {
		tweetBoxes[i].domElement.value += "(" + i + "/" + tweetBoxes.length + ")";
	};
}