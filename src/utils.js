const inquirer = require('inquirer');
const { writeFileSync } = require('fs');
const { join, isAbsolute } = require('path');

const errorMessage = () => {
    console.error("Please provide a valid JSON file for input.");
}

module.exports.isInit = (arg) => {
    return arg === 'init';
}

module.exports.createSampleFile = () => {
    const sampleFile = require('../sample/checklist.json')
    writeFileSync(join(process.cwd(), 'checklist.json'), JSON.stringify(sampleFile, null, 2))
    console.log("The sample file (checklist.json) was created.");
}

module.exports.getFilePath = (filename) => {
    return join((isAbsolute(filename) ? '' : process.cwd()), filename);
}

module.exports.getChoices = (items) => {
    if (Array.isArray(items)) {
        return items.map(name => {
            return {
                name
            }
        });
    } else {
        errorMessage();
    }
}

module.exports.prompt = (message, name, choices) => {
    if (message && name && Array.isArray(choices)) {
        inquirer
            .prompt([{
                type: 'checkbox',
                message,
                name,
                choices,
                validate(answer) {
                    return answer.length == choices.length || 'All items must be checked.'
                }
            }, ])
            .then(() => {
                console.log("Checked all items, you are good to go !");
            });
    } else {
        errorMessage();
    }
}