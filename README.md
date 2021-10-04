# CLI Checklist
A CLI checklist app.

>Powered by [Inquirer.js](https://www.npmjs.com/package/inquirer).

 ## How to use

Install globally using `npm install -g cli-checklist` or install as a developer dependency using `npm install -D cli-checklist`

Initialize (create a sample input file) using `cli-checklist init`

Run the checklist using `cli-checklist checklist.json` or `cli-checklist /path/to/your/file`

This can be used with [Husky](https://github.com/typicode/husky) to perform checklists before committing or pushing to repos.

## Structure of the input file

```json
{
    "name": "Checklist", // Name for the checklist, will be shown in prompt
    "items": [
        "Question 1", // Checklist item 1
        "Question 2" // Checklist item 2
    ]
}
```

## Screenshots

![](./images/checklist1.png?raw=true)

![](./images/checklist2.png?raw=true)
