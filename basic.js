
var fs = require("fs");

var BasicCard =function(front,back){
	//this.cardFronts = [];
  	//this.cardBacks = [];
	  	this.front = front;
	  	this.back = back;
	  	
	  	this.storeCard = function (front,back){
			// this.cardFronts.push(front);
			// this.cardBacks.push(back);
			if(!front){
			console.log("Front text was not entered")
			}
			if(!back){
			console.log("Back text was not entered")
			}
			else{
	        fs.appendFile("log.txt", "," + "front:" + front +","+ "Back:" + back);
			}
		}

		this.cardFront = function (front){
	        fs.appendFile("frontlog.txt", "," + front);
		}
		
		this.cardBack = function (back){
	        fs.appendFile("backlog.txt", "," + back);
		}
}

module.exports = BasicCard;


       
        