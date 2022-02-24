// Imported packages from NPM
const fs = require("fs"); // Very popular fs is a filewriting System documentation https://www.npmjs.com/package/file-system
// const util = require("util");
const inquirer = require("inquirer");
// Local imports from myself
const generateReadme = require("./utils/generateMarkdown")

// An array of questions that the const inquirer will use, 
// I chose to use defaults when possible & validation for required
const questions = [
    { // GitHub username
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        default: "K-Bugz",
        validate: function (answer) {
            if (answer.length <= 1) {
                return console.log("Please give your GitHub repo name. ");
            }
            return true;
        }
    },
    { // Repo name
        type: "input",
        message: "What is the name of your GitHub repo?",
        name: "repo",
        validate: function (answer) {
            if (answer.length <= 1) {
                return console.log("Please give your GitHub repo.");
            }
            return true;
        }
    },
    { // Project title
        type: "input",
        message: "What is the project title?",
        name: "title",
        validate: function (answer) {
            if (answer.length <= 1) {
                return console.log("Please give a project title.");
            }
            return true;
        }
    },
    { // Description
        type: "input",
        message: "Write a description.",
        name: "description",
    },
    { // Install process
        type: "input",
        message: "Describe the installation process.",
        name: "installation"
    },
    { // Usage
        type: "input",
        message: "Provide instructions and examples.",
        default: "Helps you make quick proffesional README.md files for projects",
        name: "usage"
    },
    {  // Tests
        type: "input",
        message: "Provide any tests written if applicable.",
        name: "tests"
    },
    { // List of licences
        type: "list",
        message: "Choose a license for your project.",
        choices: ["MIT", "BSD", "GNU", "Eclipse", "IBM", "Mozilla"],
        default: "MIT",
        name: 'license'
    }
];

// Function that uses the fs module to writeFile method. 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README.md has been generated")
    });
}


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
