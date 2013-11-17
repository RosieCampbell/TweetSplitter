var tweetBoxes = [];
var idNum = 0;
$(function(){
	var tweetBox = new TweetBox(idNum, 0);
});

function CheckEmpties(){
	for (var i = tweetBoxes.length - 1; i >= 0; i--) {
		if(tweetBoxes[i].value.trim === ""){

		}
	}
}