const CONFIG = require('./config').CONFIG;
const axios = require('axios')


//获取prject信息
const getProjectInfo = () => {
  return axios.get(`https://gitlab.${CONFIG.address}.com/api/v4/projects?private_token=${CONFIG.token}`)
}

//设置project信息
const setProjectInfo = async () => {
  const { data } = await getProjectInfo();
  data.map((value) => {
    CONFIG.projectInfo.push({ id: value.id, name: value.name_with_namespace, repo: value.http_url_to_repo });
  })
}

//展示project信息
const showProjectInfo = () => {
  const { projectInfo } = CONFIG;
  projectInfo.forEach((value, index) => {
    console.log(`project ID:${value.id}   project Name:${value.name}    project repo:${value.repo}`);
  })
}
