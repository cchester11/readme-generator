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
      name: 'installation',
      message: 'Describe the necessary steps for installing your application',
      default: 'First, create a folder for your README. Secondly, use a code editor to set up your files and install all your node modules including inquirer'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give your README a description.',
      default: 'This README was created using a personally built generator.'
    },
    {
      type: 'confirm',
      name: 'image',
      message: 'Would you like to provide a screenshot of your README?',
      default: true
    },
    {
      type: 'input',
      name: 'imageDisplay',
      message: 'provide the link to the image',
      default: 'https://drive.google.com/file/d/1pfIO3aXaEkv1jZMKSqBOJe5duj3HjWc9/view',
      when: ({ image }) => {
        if (image) {
            return true;
        } else {
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'components',
      message: 'What did you use to generate your README?',
      default: 'I used node.js as my library and javascript as my language to write the code to generate the README'
    },
    {
      type: 'input',
      name: 'collaborators',
      message: 'Name some of your collaborators',
      default: "My collaborators include Andrew Hardemon and the UT Bootcamp"
    },
    {
      type: 'input',
      name: 'username',
      message: 'Add the username of your collaborator'
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
      when: ({ confirm }) => confirm
    },
    {
      type: 'confirm',
      name: 'badgeLinkConfirm',
      message: 'Would you like to add a badge to your README?',
      default: false
    },
    {
      type: 'input',
      name: 'badgeLink',
      message: 'What is your badge link?',
      when: ({ badgeLinkConfirm }) => badgeLinkConfirm
    },
    {
      type: 'confirm',
      name: 'license',
      message: 'Would you like to link the license for this project?',
      default: true
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email',
      default: 'cchester1@angelo.edu'
    },
    {
      type: 'input',
      name: 'githubProfile',
      message: "Provide the link for your github profile",
      default: 'https://github.com/cchester11'
    }
  ]
// TODO: Create a function to write README file
const writeToFile = function(data) {
  fs.writeFile('./dist/README.md', data, err => {
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


