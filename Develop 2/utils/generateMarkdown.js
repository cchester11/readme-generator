const index = require('../index')

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === true) {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else {
    return ''
  }
};

// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ## ${answers.name}
  ## Summary
  ${answers.description}
  ## Generator Made With
  ${answers.components}
  ## Wesbite Link
  ${answers.link}
  ## License Link
  ${renderLicenseLink(answers.license)}
`
};
