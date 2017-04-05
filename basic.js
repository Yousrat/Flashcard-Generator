
var fs = require("fs");

var BasicCard =function(front,back){
	this.cardFronts = [];
  	this.cardBacks = [];
  	this.front = front;
  	this.back = back;
	  	this.storeCard = function (front,back){
			this.cardFronts.push(front);
			this.cardBacks.push(back);
	        fs.appendFile("log.txt", "," + "front:" + front +","+ "Back:" + back);
		}

}

module.exports = BasicCard;


       // fs.readFile("bank.txt", "utf8", function(error, data) {
       	// console.log(data);
       // });
        