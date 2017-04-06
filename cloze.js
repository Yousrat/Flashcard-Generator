var fs = require("fs");

var ClozeCard=function(text,cloze){
	this.text = text;
	this.cloze= cloze;
	
	this.fullText = function (text,cloze){
		if(!cloze){
			console.log("Deletion text was not entered")
		}
		if(!text){
			console.log("Partial text was not entered")
		}
		else{
	        fs.appendFile("fulllog.txt", "," + text +" " + cloze);
		}
		}
		}
	this.partialText = function (text){
	        fs.appendFile("partiallog.txt", "," + text);
		}
	this.deletion = function (cloze){
	        fs.appendFile("clozelog.txt", "," + cloze);
		}
}

module.exports = ClozeCard;


// this.storeCard = function (text,cloze){
	// 		// this.cardFronts.push(text);
	// 		// this.cardBacks.push(cloze);
	//         fs.appendFile("clozelog.txt", "," + "Text:" + text +","+ "Cloze:" + cloze);
	// 	}