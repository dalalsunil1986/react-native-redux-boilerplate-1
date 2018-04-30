#!/usr/bin/env node
const inquirer = require('inquirer');
var shell = require('shelljs');
var git = require('download-git-repo')

const fs = require('fs');

const CURR_DIR = process.cwd();

const DEPENDENCIES = [
  "react-native-router-flux",
  "react-redux",
  "redux",
  "redux-logger",
  "redux-thunk",
]

const QUESTIONS = [
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }

// Getting project Name
inquirer.prompt(QUESTIONS)
.then(answers => {
  const projectName = answers['project-name'];

  install(projectName);
});

function install(projectName){
  // Checking if react native is Installed
  if (!shell.which('react-native')) {
    console.warn('react-native NOT found.')
    console.log('Installing React Native')
    shell.exec('npm install -g react-native-cli')
  }

  // React Native needs version 4.6.1
  console.log("Installing npm version 4.6.1")
  shell.exec('npm install -g npm@4.6.1')

  // Creating React Native project
  shell.exec(`React-native init ${projectName}`);

  // Moving into the project directory
  shell.cd(`${projectName}/`);

  /***************************************************************************
  * Already in the project directory
  *****************************************************************************/

  // Installing all the dependencies for a redux app
  DEPENDENCIES.forEach( (dependency) => {
    shell.exec(`npm install -save ${dependency}`)
  })
}
