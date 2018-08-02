// Load the NPM Package inquirer
var inquirer = require("inquirer");

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
      type: "confirm",
      message: "Are you sure:",
      name: "conf",
      default: true
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "pass"
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],
      name: "pokemon",
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    console.log(inquirerResponse);
  });
