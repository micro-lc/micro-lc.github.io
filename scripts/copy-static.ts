import { resolve } from 'path'

import { copy, statSync, mkdirpSync } from 'fs-extra'
import { sync } from 'glob'

const APPLICATION_GLOB = 'applications/*'

async function copyStaticFiles(): Promise<void> {
  const subapplications = sync(APPLICATION_GLOB)
    .map((path) => ({
      dest: resolve(__dirname, '..', 'static', path),
      name: path.replace('applications/', ''),
      src: resolve(__dirname, '..', path, 'build'),
    }))
    .filter(({ src }) => statSync(src).isDirectory())

  mkdirpSync(resolve(__dirname, '..', 'static/applications'))

  const promises = subapplications.map(({ src, dest, name }) =>
    copy(src, dest, { overwrite: true }).then(() => { console.log(`[${name}]: static files copied`) })
  )

  return Promise.all(promises).then(() => { /* noop */ })
}

copyStaticFiles()
  .catch(console.error)

