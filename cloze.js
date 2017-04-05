var fs = require("fs");

var ClozeCard=function(text,cloze){
	this.text = text;
	this.cloze= cloze;
	this.storeCard = function (text,cloze){
			// this.cardFronts.push(text);
			// this.cardBacks.push(cloze);
	        fs.appendFile("clozelog.txt", "," + "front:" + text +","+ "Back:" + cloze);
		}

}

module.exports = ClozeCard;
