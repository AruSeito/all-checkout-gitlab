'use strict';
const inquirer = require('inquirer');
const CONFIG = require('./config').CONFIG;

// 输入gitlab地址
const getAddress = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'address',
    message: '请输入gitlab地址',
    when: !CONFIG.address
  }).then((ans) => {
    CONFIG.address = ans.address;
  })
}

// 输入access token
const getToken = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'token',
    message: '请输入access token',
    when: !CONFIG.token
  }).then(ans => {
    CONFIG.token = ans.token;
  })
}

// 输入project Id
const getProjectId = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'projectId',
    message: '请输入Project Id',
    when: !CONFIG.projectId
  }).then(ans => {
    CONFIG.token = ans.projectId;
  })
}

//输入源分支名
const getSourceBranch = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'sourceBranch',
    message: '请输入Source Branch',
    when: !CONFIG.sourceBranch
  }).then(ans => {
    CONFIG.token = ans.sourceBranch;
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
    CONFIG.token = ans.newBranch;
  })
}
