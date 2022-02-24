// Imported packages from NPM
const fs = require("fs"); // Very popular fs is a filewriting System documentation https://www.npmjs.com/package/file-system
const inquirer = require("inquirer"); // const util = require("util");
// Local imports from myself
const { generateMarkdown, renderLicenseBadge } = require('./utils/generateMarkdown');

// An array of questions that the const inquirer will use, 
// I chose to use defaults when possible & validation for required
const questions = [
    { // GitHub username
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        default: "K-Bugz",
        validate: function (answer) {
            if (!answer) {
                return console.log("Please give your GitHub repo name. ");
            }
            return true;
        }
    },
    { // Email
        type: "input",
        message: "What is your email?",
        name: "email",
        default: "kbugusky@gmail.com",
        validate: function (answer) {
            if (!answer) {
                return console.log("Please give your email contact. ");
            }
            return true;
        }
    },
    { // Project title
        type: "input",
        message: "What is the project title?",
        name: "title",
        validate: function (answer) {
            if (!answer) {
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
    {  // Contributors 
        type: "input",
        name: "contribution",
        message: "Please enter contributors to the project.",
    },
    { // List of licences
        type: "list",
        message: "Choose a license for your project.",
        choices: ["MIT", "GNU", "Eclipse", "IBM", "Mozilla"],
        default: "",
        name: "license"
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

// A function to initialize app
function init() {
    return inquirer.prompt(questions).then((answers) => writeToFile("./dist/README.md", generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
