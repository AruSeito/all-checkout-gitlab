'use strict';
const inquirer = require('inquirer');
const CONFIG = require('./config').CONFIG;

const getAddress = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'address',
    message: '请输入gitlab地址'
  }).then((ans) => {
    CONFIG.address = ans.address;
  })
}

const getToken = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'token',
    message: '请输入access token'
  }).then(ans => {
    CONFIG.token = ans.token;
  })
}

const getProjectId = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'projectId',
    message: '请输入Project Id'
  }).then(ans => {
    CONFIG.token = ans.projectId;
  })
}
const getSourceBranch = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'sourceBranch',
    message: '请输入Source Branch'
  }).then(ans => {
    CONFIG.token = ans.sourceBranch;
  })
}
const getNewBranch = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'newBranch',
    message: '请输入New Branch'
  }).then(ans => {
    CONFIG.token = ans.newBranch;
  })
}