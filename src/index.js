/* 
TO DO:
- Validate the file and inputs
- Default values for name and message
*/

const inquirer = require('inquirer');
const { join, isAbsolute } = require('path');
const filename = process.argv.pop();
const file = join((isAbsolute(filename) ? '' : __dirname), filename);
const { name, items } = require(file);
const choices = items.map(name => { return { name } });

inquirer
    .prompt([{
        type: 'checkbox',
        message: name,
        name,
        choices,
        validate(answer) { return answer.length == items.length || 'All items must be checked.' }
    }, ])
    .then(() => {
        console.log("Checked all items, you are good to go !");
    });
