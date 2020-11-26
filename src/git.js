const download = require('download-git-repo')

const downloadRepo = (repo, name, project = '') => {
  let finnalName = name;
  if (!!project) finnalName = `${name}_${project}`;
  return new Promise((resolve, reject) => {
    download(`direct:${repo}`, finnalName, { clone: true }, (err) => {
      if (err) reject(err);
      resolve('success');
    })
  })
}

