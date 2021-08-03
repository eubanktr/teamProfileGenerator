const fs = require('fs');
const inquirer = require('inquirer');

const initQuestions = [
  {
    type: `confirm`,
    message: `Do you have employees to add?`,
    name: `empConfirm`,
  }
]

const teamManager = [
  {
    type: `input`,
    message: `What is the employee's name?`,
    name: `managerName`, 
  },
  {
    type: `number`,
    message: `What is the emplyee's identification number?`,
    name: `managerId`, 
  },
  {
    type: `input`,
    mesage: `What is the employee's email address?`,
    name: `managerEmail`
  },
  {
    type: `number`,
    message: `What is the emplyee's office number?`,
    name: `managerOfficeNum`
  }
];
const teamEngineer = [
  {
    type: `input`,
    message: `What is the employee's name?`,
    name: `engineerName`, 
  },
  {
    type: `number`,
    message: `What is the emplyee's identification number?`,
    name: `engineerId`, 
  },
  {
    type: `input`,
    message: `What is the employee's email address?`,
    name: `engineerEmail`
  },
  {
    type: `number`,
    message: `What is the emplyee's GitHub username?`,
    name: `engineerGit`
  }
];
const teamIntern = [
  {
    type: `input`,
    message: `What is the intern's name?`,
    name: `internName`, 
  },
  {
    type: `number`,
    message: `What is the intern's identification number?`,
    name: `internId`, 
  },
  {
    type: `input`,
    mesage: `What is the intern's email address?`,
    name: `internEmail`
  },
  {
    type: `number`,
    message: `What school does the intern attend?`,
    name: `internSchool`
  }
];

function init() {
  inquirer
    .prompt(initQuestions)
    
    .then((answer => {
      console.log(answer);
      if (answer.empConfirm) {
      empQuestions();
      } else if (!answer.empConfirm) {
      console.log(`Please run again when you have employees to add`);
      return;
      }
    }));

    fs.writeFile(`index.html`, `<h1>PLACEHOLDER for HTML</h1>`, (error,data) =>
      error ? console.error(error) : console.log(data)
    );
    
};

function empQuestions() { 
  inquirer
    .prompt(teamManager)
    .then((answer) => {
      console.log(answer)
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error(error);
      } else {
        console.log(`Something else went wrong`);
      }
    })
};

function engQuestions() { 
  inquirer
    .prompt(teamEngineer)
    .then((answer) => {
      console.log(answer)
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error(error);
      } else {
        console.log(`Something else went wrong`);
      }
    })
};





init();




















//   var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });