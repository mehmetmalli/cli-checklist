const inquirer = require('inquirer');
const { name, items } = require('./checklist.json');

const choices = items.map(el => {return { name: el }});

inquirer
    .prompt([{
        type: 'checkbox',
        message: name,
        name,
        choices,
        validate(answer) {
            if (answer.length < items.length) {
                return 'You must check all items.';
            }

            return true;
        },
    }, ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, 2));
    });