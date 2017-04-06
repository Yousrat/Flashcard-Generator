var inquirer = require("inquirer");
var fs = require("fs");
var request = require("request");
var basic = require("./basic.js");
var cloze = require("./cloze.js");


      inquirer.prompt([
          {
            type: "input",
            name: "operation",
            message: "Hi There, To store a flashcard type store, to retrieve flashcard information type get"
          }
            ]).then(function(answer){
                if (answer.operation === "store") {
                  storeOperation();
                }

                if (answer.operation === "get") {
                  readOperation();
                  //console.log("yes");
                }

                // else if(answer.operation != "store" || answer.operation != "get"){
                //  console.log("to start the application, type store or get");
                // }
      });

var storeOperation= function(){
    inquirer.prompt([
          {
            type: "input",
            name: "basicOrCloze",
            message: "To store a basic flashcard type basic,to store a cloze flashcard type cloze"
          }
            ]).then(function(answer){
            
            if (answer.basicOrCloze === "basic") {
                  storeBasic();
                  //console.log("yes1");

                }

                if (answer.basicOrCloze === "cloze") {
                  storeCloze();
                  //console.log("yes2");
                }

                // else if(answer.basicOrCloze != "basic" || answer.basicOrCloze != "cloze"){
                //  console.log("to continue, type basic or cloze");
                // }
    });
}

var readOperation= function(){
    inquirer.prompt([
          {
            type: "input",
            name: "basicOrCloze",
            message: "To retrieve basic flashcards type basic,to retrieve cloze flashcards type cloze"
          }
            ]).then(function(answer){
            
            if (answer.basicOrCloze === "basic") {
                  readBasic();
                  //console.log("yes1");

                }

                if (answer.basicOrCloze === "cloze") {
                  readCloze();
                  //console.log("yes2");
                }

                // else if(answer.basicOrCloze != "basic" || answer.basicOrCloze != "cloze"){
                //  console.log("to continue, type basic or cloze");
                // }
    });
}
var storeBasic= function(){
    inquirer.prompt([
          {
            type: "input",
            name: "front",
            message: "Enter front text between quotations"
          },
          {
             type: "input",
             name: "back",
             message: "Enter back text between quotations"

          }
            ]).then(function(answer){
            
            basicFlashCard(answer.front,answer.back);

    });
}

var storeCloze= function(){
    inquirer.prompt([
          {
            type: "input",
            name: "text",
            message: "Enter partial text between quotations"
          },
          {
             type: "input",
             name: "deletion",
             message: "Enter deletion between quotations"

          }
            ]).then(function(answer){
            //console.log("next steps");
            //console.log(answer.text,answer.cloze);
            clozeFlashCard(answer.text,answer.deletion);

    });
}


  var basicFlashCard = function(front,back){
      var basicCard = new basic(front,back);
      basicCard.storeCard(front,back);
      console.log('you logged this to the text file: ' +"'"+basicCard.front+"'" + "for the front side "+"and" + "'" +basicCard.back + "'"+"for the back side" );
        
  }

  var clozeFlashCard = function(text,deletion){
      var clozeCard = new cloze(text,deletion);
      clozeCard.fullText(text,deletion);
      console.log('the full text you logged to the text file is: '+ text + " " +deletion);
  }

var readBasic = function(){
fs.readFile("log.txt", "utf8", function(error, data) {
          console.log("these are all stored basic flashcards: " +data);
          });
}

var readCloze = function(){
fs.readFile("clozelog.txt", "utf8", function(error, data) {
          console.log("these are all stored cloze flashcards: "+data);
          });
}


