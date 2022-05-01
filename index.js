// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path")

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'title',
        message:'What is the Projects Title? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("You must enter a Project Title");
            }
        }
    },
    {
        type: 'input', 
        name: 'description',
        message: "Add a description of your Project. (Required)",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("You must enter a Project Description");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Include instructions for installation.',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information about the usage of this project.'

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide instruction for other contributers.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide information about testing of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your product or press enter for none).',
        choices: [{
            name:'GNU AGPLv3',
            value:'GNU_APLv3'},
            {
            name: 'Boost SL 1.0',
            value: 'Boost_SL_1.0'},
            {
            name: 'Mozilla PL 2.0',
            value: 'Mozilla_PL_2.0'},
            {
            name: 'Apache 2.0',
            value: 'Apache_2.0'},
            {
            name: 'MIT',
            value: 'MIT'},
            {
            name: 'The Unlicense',
            value: 'The_Unlicense'},
            {
            name: 'None',
            value: "None"} 
             ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
    
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
