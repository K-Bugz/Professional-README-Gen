// Imported packages from NPM
const fs = require("fs"); // Very popular fs is a filewriting System documentation https://www.npmjs.com/package/file-system
const inquirer = require("inquirer"); // const util = require("util");
// Local imports from myself
const generateMarkdown = require('./utils/generateMarkdown');
// const { generateMarkdown, renderLicenseBadge } = require('./utils/generateMarkdown'); // deconstructing the page

// An arrow function that  const inquirer will use, data argument going out!!!!
const questions = (data) => {
    return inquirer.prompt([
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
            name: "contribute",
            message: "Please enter contributors to the project.",
        },
        { // List of licences
            type: "list",
            message: "Choose a license for your project.",
            choices: ["MIT", "GNU", "Eclipse", "IBM", "Mozilla"],
            default: "",
            name: "license"
        }
    ]);
}

// Function that uses the fs module to writeFile method. 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README.md has been generated")
    });
}

// Function call to initialize app
questions()
        .then(writeToFile = data => {
        const readMe = generateMarkdown(data)
        fs.writeFile("./dist/README.md", readMe, err => {
            if (err)
                throw new Error(err);
            console.log("Successfully wrote to README.md")
        })
    });
    // How I wrote it once and it worked. Make sure you study. 
    //  => writeToFile("./dist/README.md", generateMarkdown(answers)))
    // .then(() => console.log('Successfully wrote to README.md'))
    // .catch((err) => console.error(err));
