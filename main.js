//use inquirer npm package to prompt the user and have him/her input a choice
var inquirer = require("inquirer");
//use fs npm package to read and write to text files
var fs = require("fs");
//use request npm package to request other files
var request = require("request");

//require or call js files that contain the constructors needed to execute user choices
var basic = require("./basic.js");
var cloze = require("./cloze.js");

//prompt user to input the operation: store cards or get card info
      inquirer.prompt([
          {
            type: "input",
            name: "operation",
            message: "Hi There, To store a flashcard type store, to retrieve flashcard information type get"
          }
            ]).then(function(answer){
               //if user chooses to store info call the function for that
                if (answer.operation === "store") {
                  storeOperation();
                }
              //if user chooses to retrieve info call the function for that
                if (answer.operation === "get") {
                  readOperation();
                }

      });


var storeOperation= function(){
  //prompt user to input the type of flashcards he wants to store
    inquirer.prompt([
          {
            type: "input",
            name: "basicOrCloze",
            message: "To store a basic flashcard type basic,to store a cloze flashcard type cloze"
          }
            ]).then(function(answer){
              //if user chooses basic run the funtion that stores basic flashcards
            if (answer.basicOrCloze === "basic") {
                  storeBasic();

                }
              //if user chooses cloze run the funtion that stores cloze flashcards
                if (answer.basicOrCloze === "cloze") {
                  storeCloze();
                }

                
    });
}
  //prompt user to input the type of flashcards he wants to read
var readOperation= function(){
    inquirer.prompt([
          {
            type: "input",
            name: "basicOrCloze",
            message: "To retrieve basic flashcards type basic,to retrieve cloze flashcards type cloze"
          }
            ]).then(function(answer){
            //if user chooses basic run the funtion that reads basic flashcards
            if (answer.basicOrCloze === "basic") {
                  readBasic();
                  //console.log("yes1");

                }
            //if user chooses cloze run the funtion that reads cloze flashcards
                if (answer.basicOrCloze === "cloze") {
                  readCloze();
                }

    });
}
// function to get info needed for storing basic flashcards
var storeBasic= function(){
    inquirer.prompt([
    //prompt user to input front text for basic flashcards
          {
            type: "input",
            name: "front",
            message: "Enter front text between quotations"
          },
    //prompt user to input back text for basic flashcards
          {
             type: "input",
             name: "back",
             message: "Enter back text between quotations"

          }
            ]).then(function(answer){
        // pass values to a function that calls constructors from basic.js file
            basicFlashCard(answer.front,answer.back);

    });
}

// function to get info needed for storing cloze flashcards
var storeCloze= function(){
    inquirer.prompt([
        //prompt user to input partial text for cloze flashcards
          {
            type: "input",
            name: "text",
            message: "Enter partial text between quotations"
          },
        //prompt user to input the deleted text for cloze flashcards
          {
             type: "input",
             name: "deletion",
             message: "Enter deletion between quotations"

          }
            ]).then(function(answer){
        // pass values to a function that calls constructors from cloze.js file    
            clozeFlashCard(answer.text,answer.deletion);

    });
}

//function that passes values to constructor in basic.js file
  var basicFlashCard = function(front,back){
      var basicCard = new basic(front,back);
      basicCard.storeCard(front,back);
      console.log('you logged this to the text file: ' +"'"+basicCard.front+"'" + "for the front side "+"and" + "'" +basicCard.back + "'"+"for the back side" );
        
  }

//function that passes values to constructor in cloze.js file
  var clozeFlashCard = function(text,deletion){
      var clozeCard = new cloze(text,deletion);
      clozeCard.fullText(text,deletion);
      clozeCard.partialText(text);
      clozeCard.deletion(deletion);

      console.log('the full text you logged to the text file is: '+ text + " " +deletion);
  }

//function that reads text file values using constructor in basic.js file
var readBasic = function(){
fs.readFile("log.txt", "utf8", function(error, data) {
          console.log("these are all stored basic flashcards: " +data);
          });
}

//function that reads text file values using constructor in cloze.js file
var readCloze = function(){
fs.readFile("fulllog.txt", "utf8", function(error, data) {
          console.log("these are all stored cloze flashcards: "+data);
          });
}


