function renderLicenseLink(license) {
  if(license === true) {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else {
    return ''
  }
};

function renderBadge (badge) {
  if (badge) {
    return `badge license`
  } else {
    return 'N/A'
  }
}

function getGitHub(username) {
  if (username) {
    return username;
  }
}

function getVideo(video) {
  if (video) {
    return video;
  }
  }


// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(answers) {
  return `
  # Title
  ${answers.title}

  ## Table of Contents
  * [Description](#description)
  * [Code Used](#code_used)
  * [Screenshot](#screenshot)
  * [License](#license)
  * [Contributed](#contributed)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Summary
  ${answers.description}

  ## Generator Made With
  ${answers.components}

  ## Screenshot 
  ${getVideo(answers.imageDisplay)}

  ## Wesbite Link
  ${answers.link}

  ## Collaborators
  ${answers.collaborators}

  ## Collaborators Link's
  ${getGitHub(answers.username)}

  ## Badge's
  ${renderBadge(answers.badgeLink)}

  ## License Link
  ${renderLicenseLink(answers.license)}
`
};
