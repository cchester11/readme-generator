// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const readme = [];
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Give your README a title.',
      default: 'Readme Generator'
    },
    {
      type: 'input', 
      name: 'tableOfContents',
      message: 'Enter your name',
      default: 'Charles'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give your README a description.',
      default: 'description'
    },
    {
      type: 'input',
      name: 'components',
      message: 'What did you use to generate your README?',
      default: 'I used node.js as my library and javascript as my language to write the code to generate the README'
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Would you like to give your README a link?',
      default: true
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter your projects link',
      default: 'github.com',
      when: ({ confirm}) => confirm
    },
    {
      type: 'confirm',
      name: 'license',
      message: 'Would you like to link the license for this project?',
      default: true
    }
  ]
// TODO: Create a function to write README file
const writeToFile = function(data) {
  fs.writeFile('./README.md',data, err => {
    if(err) {
      throw new Error(err)
    }
    console.log('README complete')
  })
};

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answers) {
    const READMEfile = generateMarkdown(answers)
    writeToFile(READMEfile)
  });
}

// // Function call to initialize app
init();


