'use strict';
const inquirer = require('inquirer');
const { showProjectInfo } = require('./project');
const CONFIG = require('./config').CONFIG;

// 输入gitlab地址
const getAddress = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'address',
    message: '请输入gitlab地址',
    suffix: '(eg.:gitlab.example.com)',
    when: !CONFIG.address
  }).then((ans) => {
    if (!CONFIG.address) CONFIG.address = ans.address;
  })
}

// 输入access token
const getToken = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'token',
    message: '请输入private token',
    when: !CONFIG.token
  }).then(ans => {
    if (!CONFIG.token) CONFIG.token = ans.token;
  })
}

// 输入project Id
const getProjectId = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'projectId',
    message: '请输入Project Id',
    suffix: '(eg.:1,2,3,4)',
    when: !CONFIG.projectId
  }).then(ans => {
    if (!CONFIG.projectId) CONFIG.projectId = ans.projectId.split(',');
  })
}

//输入源分支名
const getSourceBranch = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'sourceBranch',
    message: '请输入Source Branch',
    when: !CONFIG.sourceBranch,
    suffix: '(eg.:1,2,3,4,5)'
  }).then(ans => {
    if (!CONFIG.sourceBranch) CONFIG.sourceBranch = ans.sourceBranch;
    showProjectInfo();
  })
}

//输入新分支名
const getNewBranch = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'newBranch',
    message: '请输入New Branch',
    when: !CONFIG.newBranch
  }).then(ans => {
    if (!CONFIG.newBranch) CONFIG.newBranch = ans.newBranch;
  })
}


const userInput = async () => {
  await getAddress();
  await getToken();
  await getProjectId();
  await getSourceBranch();
  await getNewBranch();
}

exports.userInput = userInput