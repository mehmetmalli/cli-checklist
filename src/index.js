#!/usr/bin/env node
const { isInit, createSampleFile, getFilePath, getChoices, prompt } = require('./utils');
const lastArg = process.argv.pop();

if (isInit(lastArg)) {
    createSampleFile();

} else {
    const { name, items } = require(getFilePath(lastArg));
    const choices = getChoices(items);
    prompt(name, name, choices);
}