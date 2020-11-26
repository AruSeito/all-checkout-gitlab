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


const useGit = async () => {
  console.log(CONFIG.projectId);
  for (let i = 0; i < CONFIG.projectId.length; i++) {
    const { name, repo } = CONFIG.projectInfo[i]
    await cloneRepo(repo, name);
    await runCMD(`cd ${name} && git checkout ${CONFIG.sourceBranch} && git checkout -b ${CONFIG.newBranch} && git push --set-upstream origin ${CONFIG.newBranch}`);
  }
}
exports.useGit = useGit;
