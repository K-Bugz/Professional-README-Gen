// Returns the license link and if there is no license, return an empty string
function renderLicenseLink(data) {
  // "MIT", "GNU", "Eclipse", "IBM", "Mozilla"
  let licenseLink = "";
  switch (data.license) {
    case "MIT": licenseLink = "https://opensource.org/licenses/MIT";
      return licenseLink;
    case "GNU": licenseLink = "https://opensource.org/licenses/GPL-3.0";
      return licenseLink;
    case "Eclipse": licenseLink = "https://opensource.org/licenses/EPL-2.0";
      return licenseLink;
    case "IBM": licenseLink = "https://opensource.org/licenses/IPL-1.0";
      return licenseLink;
    case "Mozilla": licenseLink = "https://opensource.org/licenses/MPL-2.0";
    default: licenseLink = "";
      return licenseLink;
  }
}
// Function to generate markdown for README
function generateMarkdown(data) { // not sure this works yet need to check this badge thing out. 
  return `
[![Generic badge](https://img.shields.io/badge/license-${data.license}-blue.svg)](${renderLicenseLink(data)})
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
This app is licensed under the ${data.license} license.
## Questions
* GitHub: [${data.username}](https://github.com/${data.username})
* Email: 
[${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;