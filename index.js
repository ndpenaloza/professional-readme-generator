const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const readmeQuestPrompts = () =>
    inquirer.prompt([
        { 
            type: "input",
            message: "What is the title of your project?",
            name: "projectTitle"
        },  
        {  
            type: "input",
            message: "Please write a description of your project:",
            name: "description"
        },
        {  
            type: "input",
            message: "Please write installation instructions:",
            name: "installation"
        },
        {  
            type: "input",
            message: "Please write usage information:",
            name: "usage"
        },
        {  
            type: "input",
            message: "Please write in contribution guidlines:",
            name: "contributing"
        },
        {  
            type: "input",
            message: "Please write in test instructions:",
            name: "test"
        },
        {  
            type: "list",
            message: "What license would you like to use?",
            choices: ["MIT", "Apache 2.0", "Mozilla Public Licence 2.0", "Unlicensed"],
            name: "license"
        },
        {  
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        },
        {  
            type: "input",
            message: "What is your email address?",
            name: "email"
        }
    ]);

const licenseOptions = {
    "MIT": {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT"
    },
    "Apache 2.0": {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0"
    },
    "Mozilla Public License 2.0": {
        name: "Mozilla Public License 2.0",
        url: "https://www.mozilla.org/en-US/MPL/2.0/"
    },
    "Unlicensed": {
        name: "Unlicensed",
        url:"#"
    }
}

// function to create markdown
const generateMarkDown = (response) =>
// Template literal
`# ${response.projectTitle}

## Table of Contents
  1.  [Description](#Description)
  2.  [Installation](#Installation)
  3.  [Usage](#Usage)
  4.  [Contributing](#Contributing)
  5.  [Tests](#Tests)
  6.  [License](#License)
  7.  [Questions](#Questions)

## Description: 
${response.description}

## Installation:
${response.installation}

## Usage:
${response.usage}

## Contributing:
${response.contributing}

## Tests:
${response.test}

## License:
${licenseOptions[response.license].name}
[${licenseOptions[response.license].url}](${licenseOptions[response.license].url})

## Questions:
### GitHub Username:
${response.github}
### Email Address:
${response.email}
`;

readmeQuestPrompts()
    .then((response) => writeFileAsync("readmeExample.md", generateMarkDown(response)))
    .then(() => console.log("Success!"))
    .catch(console.error);