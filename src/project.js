const CONFIG = require('./config').CONFIG;
const axios = require('axios')
const chalk = require('chalk');


//获取prject信息
const getProjectInfo = () => {
  return axios.get(`https://gitlab.${CONFIG.address}.com/api/v4/projects?private_token=${CONFIG.token}`)
}

//设置project信息
const setProjectInfo = async () => {
  const { data } = await getProjectInfo();
  data.map((value, index) => {
    CONFIG.projectInfo.push({ id: index, name: value.name, repo: value.http_url_to_repo, pathName: value.path_with_namespace });
  })
}

//展示project信息
const showProjectInfo = async () => {
  await setProjectInfo();
  const { projectInfo } = CONFIG;
  projectInfo.forEach((value, index) => {
    console.log(`${chalk.blue('id')}:${chalk.cyan(index)} \t ${chalk.blue('name')}:${chalk.cyan(value.name)} \t ${chalk.blue('repo')}:${chalk.cyan(value.repo)}`)
  })
}

exports.showProjectInfo = showProjectInfo



