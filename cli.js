#!/usr/bin/env node
var inquirer = require('inquirer');
var shell = require('shelljs');
require('download-git-repo');
// var git = require('download');

const fs = require('fs');

const CURR_DIR = process.cwd();
const MAIN_DIR = __dirname;
console.log(__dirname);

const GIT_REPOSITORY = "mgarciacruzz/react-native-redux-boilerplate/"
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
]


// Getting project Name
inquirer.prompt(QUESTIONS)
.then(answers => {
  const projectName   = answers['project-name'];

  const templatePath  = `${__dirname}/src`;
  const filesPath   = `${projectName}/src`

  /***************************************************************************
  * Installing required packages
  *****************************************************************************/
  install(projectName);


  /***************************************************************************
  * Copying files
  *****************************************************************************/
  fs.mkdirSync(`${CURR_DIR}/${filesPath}`);

  createDirectoryContents(templatePath, filesPath);

  /***************************************************************************
  * Removing old App.js file
  *****************************************************************************/
  shell.exec(`rm App.js`);

  /***************************************************************************
  * Adding new App.js file
  *****************************************************************************/
  const originalFilePath = fs.readFileSync(`${__dirname}/App.js`, 'utf8');

  const newFilePath = `${CURR_DIR}/${projectName}/App.js`;

  fs.writeFileSync(newFilePath, originalFilePath, 'utf8');


});

/**
 * This fucntion creates the project and install all the required packages.
 * @param  {String} projectName folder where the project is created.
 * @return {void}
 */
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



function createDirectoryContents (templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');

      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });

}
