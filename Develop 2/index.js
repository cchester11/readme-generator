// TODO: Include packages needed for this application
inquirer = require('inquirer');
fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'Whats your favorite language?',
    choices: ['HTML', 'CSS', 'Javascript', 'Python']
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', questions, function(error) {
    if(error) {
      return new error
    }
    console.log(questions)
  })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
