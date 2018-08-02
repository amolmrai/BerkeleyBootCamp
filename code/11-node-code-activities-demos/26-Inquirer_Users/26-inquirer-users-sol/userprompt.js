var inquirer = require('inquirer');

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your age?",
      name: "age"
    },
    {
      type: "input",
      message: "What is your height?",
      name: "height"
    },
    {
      type: "input",
      message: "What is your hair color?",
      name: "hair"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "pass"
    }
  ])
  .then(function(inquirerResponse) {

  	if (inquirerResponse.pass == 'giraffes'){
  		console.log(inquirerResponse);
  	}

    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
   // console.log(inquirerResponse);
   console.log("No response");
  });


// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================




