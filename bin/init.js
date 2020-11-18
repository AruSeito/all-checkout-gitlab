#!/usr/bin/env node
const axios = require('axios')
const req = https.request('https://gitlab.szzbmy.com/api/v4/groups/147?private_token=sYnkJEEpwDk7F1Cg4VYc', (res) => {
  res.on('data', d => {
    process.stdout.write(d)
  })
})
req.end()