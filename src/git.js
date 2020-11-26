const CONFIG = require('./config').CONFIG
const gitClone = require('git-clone')
const childProcess = require('child_process');


const cloneRepo = (repo, name) => {
  return new Promise((resolve, reject) => {
    gitClone(repo, name, (err) => {
      if (!!err) reject(err);
      resolve('download success');
    })
  })
}

const runCMD = (cmd) => {
  return new Promise((resolve, reject) => {
    childProcess.exec(cmd, (err) => {
      if (!!err) reject(err);
      resolve('run CMD success')
    })
  })
}

const openFolder = (name) => {
  return runCMD(`cd ${name}`);
}

const checkoutBranch = () => {
  return runCMD(`git checkout ${CONFIG.sourceBranch}`);
}

const newBranch = () => {
  return runCMD(`git checkout -b ${CONFIG.newBranch}`);
}

const pushRemote = () => {
  return runCMD(`git push --set-upstream origin ${CONFIG.newBranch}`)
}
