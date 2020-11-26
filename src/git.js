const download = require('download-git-repo')
const childProcess = require('child_process');


const downloadRepo = (repo, name, project = '') => {
  let finnalName = name;
  if (!!project) finnalName = `${name}_${project}`;
  return new Promise((resolve, reject) => {
    download(`direct:${repo}`, finnalName, { clone: true }, (err) => {
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

const openFolder = (name, project = '') => {
  let finnalName = name;
  if (!!project) finnalName = `${name}_${project}`;
  return runCMD(`cd ${finnalName}`);
}

const checkoutBranch = (source) => {
  return runCMD(`git checkout ${source}`);
}

const newBranch = (newBranchName) => {
  return runCMD(`git checkout -b ${newBranchName}`);
}

const pushRemote = (newBranchName) => {
  return runCMD(`git push --set-upstream origin ${newBranchName}`)
}