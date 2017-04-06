var inquirer = require("inquirer");
var fs = require("fs");
var request = require("request");
//var operation = process.argv[2];
// var type = process.argv[3];
var input1 = process.argv[2];
var input2 = process.argv[3];
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
                  //get();
                  console.log("yes");
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
                  //get();
                  console.log("yes2");
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



  var basicFlashCard = function(front,back){
      var basicCard = new basic(front,back);
        basicCard.storeCard(front,back);
        console.log('you logged this to the text file: ' +"'"+basicCard.front+"'" + "for the front side "+"and" + "'" +basicCard.back + "'"+"for the back side" );
        
  }

//   {
//     type: "list",
//     name: "doingWhat",
//     message: "What are you doing in my house??",
//     choices: ["I made you cookies!", "No lie dude. I'm here to rob you.", "Uh. This is my house... Who are YOU???"]
//   },

//   {
//     type: "checkbox",
//     name: "carryingWhat",
//     message: "What are you carrying in your hands??",
//     choices: ["TV", "Slice of Toast", "Butter Knife"]
//   },

//   {
//     type: "confirm",
//     name: "canLeave",
//     message: "Can you leave now?"
//   },

//   {
//     type: "password",
//     name: "myPassword",
//     message: "Okay fine. You can stay. But only if you say the magic password."
//   }

// ]).then(function(user) {

//   // If the user guesses the password...
//   if (user.myPassword === "myHouse") {

//     console.log("==============================================");
//     console.log("");
//     console.log("Well a deal's a deal " + user.name);
//     console.log("You can stay as long as you like.");
//     console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
//     console.log("");
//     console.log("==============================================");
//   }


//   // If the user doesn't guess the password...
//   else {

//     console.log("==============================================");
//     console.log("");
//     console.log("Sorry " + user.name);
//     console.log("I'm calling the cops!");
//     console.log("");
//     console.log("==============================================");

//   }
//});









  // switch (operation) {
  //     case "basic":
  //       var basicCard = new basic(input1,input2);
  //       basicCard.storeCard(input1,input2);
  //       console.log('you logged: ' +"'"+basicCard.front+"'" + "for the front side "+"and" + "'" +basicCard.back + "'"+"for the back side" );
  //       console.log(basicCard.cardFronts);
  //       console.log(basicCard.cardBacks);
  //     break;

  //         case "cloze":
  //         var clozeCard = new cloze(input1,input2);
  //         clozeCard.storeCard(input1,input2);
  //         console.log('you logged: ' +"'"+clozeCard.text+"'" + "for the sentence "+"and" + "'" +clozeCard.cloze + "'"+"for the missing part" );
  //         console.log('the full text is: ' + clozeCard.text + " " +clozeCard.cloze);
  //         break; 

  //         case "fullcloze":
  //         fs.readFile("clozelog.txt", "utf8", function(error, data) {
  //         console.log(data);
  //         });
  //         break;  

  //         case "fullbasic":
  //         fs.readFile("log.txt", "utf8", function(error, data) {
  //         console.log(data);
  //         });
  //         break;  
  //       }









  //     // case "cloze": 
      //   switch (input2){
      //     case "partial":
      //     partial(input3);
      //     break;

      //     case "deletion":
      //     back(input3);
      //     break;

      //     case "text":
      //     text(input3);
      //     break;    
      //   }
  //} 
// Created a series of questions

