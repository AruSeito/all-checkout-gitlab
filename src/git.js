const download = require('download-git-repo')

const downloadRepo = (repo, name) => {
  return new Promise((resolve, reject) => {
    download(`direct:${repo}`, name, { clone: true }, (err) => {
      if (err) reject(err);
      resolve('success');
    })
  })
}

