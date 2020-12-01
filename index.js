const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const readmeQuest = [
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
        choice: ["MIT", "Apache 2.0", "GNU - General Public License", "Mozilla Public Licence 2.0"],
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

]