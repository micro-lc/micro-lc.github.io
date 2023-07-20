import { dirname, resolve } from 'path'

import dotenv from 'dotenv'
import { statSync, mkdirpSync, readFile, writeFile } from 'fs-extra'
import { globSync } from 'glob'

const workingDir = resolve(__dirname, '..')

const APPLICATION_GLOB = 'static-templates/frames/**'

const context: Record<string, string> = {}

dotenv.config({ processEnv: context })

const interpolate = (ctx: Record<string, string>) => {
  const regexs = Object.entries(ctx).map(([key, value]) => ({ key: new RegExp(`{{${key}}}`, 'g'), value }))
  return (input: string) => regexs.reduce((output, { key, value }) => output.replace(key, value), input)
}

async function copyStaticFiles(): Promise<void> {
  const interpolateFn = interpolate(context)
  const files = globSync(APPLICATION_GLOB)
    .map((path) => {
      const name = path.replace('static-templates/frames/', '')
      return {
        dest: resolve(workingDir, 'static/frames/', name),
        name,
        src: resolve(workingDir, path),
      }
    })
    .filter(({ src }) => statSync(src).isFile())

  mkdirpSync(resolve(workingDir, 'static/frames'))

  return Promise.all(
    files.map(({ src, dest, name }) =>
      readFile(src, { encoding: 'utf8' })
        .then(interpolateFn)
        .then((content) => {
          mkdirpSync(dirname(dest))
          return writeFile(dest, content)
        })
        .catch((err) => console.error(`[${name}]: ${String(err)}`))
    )
  ).then(() => console.log('interpolation ok ✅'))
}

copyStaticFiles()
  .catch(console.error)

