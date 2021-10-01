/* 
TO DO:
- Validate the file and inputs
- Default values for name and message
*/

const inquirer = require('inquirer');
const { join, isAbsolute } = require('path');
const filename = join((isAbsolute(process.argv.at(-1)) ? '' : __dirname), process.argv.at(-1));
const { name, items } = require(filename);
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