/* eslint-disable no-sync */
const fs = require('fs')
const path = require('path')

const outputDir = 'build'
const indexPath = path.join(outputDir, 'index.html')
const index = fs.readFileSync(indexPath, { encoding: 'utf-8' })
const output = index.replace(/<base .*\/?>/, '')

fs.writeFileSync(indexPath, output)
