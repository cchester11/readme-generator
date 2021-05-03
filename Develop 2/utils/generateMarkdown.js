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
  * [Summary](#summary)
  * [Made With](#components)
  * [Screenshot](#imageDisplay)
  * [Website Link](#license)
  * [Collaborators](#collaborators)
  * [Collaborators Links](#username)
  * [Badge](#badgeLink)
  * [License](#license)

  ## Summary
  ${answers.description}

  ## Installation
  ${answers.installation}

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
