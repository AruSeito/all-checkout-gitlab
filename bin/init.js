#!/usr/bin/env node

const { userInput } = require("../src/question");
const { useGit } = require('../src/git')

const init = async () => {
  await userInput();
  await useGit();
}

init();