// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) { // What goes here? 

}


// Returns the license link and if there is no license, return an empty string
function renderLicenseLink(data) { // I believe this section is correct. 
  let licenseLink = "";
  // "MIT", "GNU", "Eclipse", "IBM", "Mozilla"
  switch (data.license) {
    case "MIT": licenseLink = "https://opensource.org/licenses/MIT"; break;
    case "GNU": licenseLink = "https://opensource.org/licenses/GPL-3.0"; break;
    case "Eclipse": licenseLink = "https://opensource.org/licenses/EPL-2.0"; break;
    case "IBM": licenseLink = "https://opensource.org/licenses/IPL-1.0"; break;
    case "Mozilla": licenseLink = "https://opensource.org/licenses/MPL-2.0"; break;
    default: licenseLink = ""; // Empty String
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// Function to generate markdown for README
function generateMarkdown(data) { // not sure this works yet need to check this badge thing out. 
  return `
  [![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)
## Installation
${data.installation}
## Tests
${data.tests}
## Usage
${data.usage}
## Contributing
${data.contribute}
## License
### This app is licensed under the [${data.license}](${licenseLink}) license.
## Questions
* GitHub: [${data.username}](https://github.com/${data.username})
* Email: 
[${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;