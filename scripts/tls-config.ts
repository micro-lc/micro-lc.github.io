/* eslint-disable n/no-process-exit */
import cp from 'child_process'
import os from 'os'

const isIPV4 = (family: string | number) => {
  return family === 'IPv4' || family === 4
}

const getLocalV4Ips = () =>
  Object.values(os.networkInterfaces())
    .reduce<string[]>((ips, value) => {
      if (value) {
        value.filter((item) => isIPV4(item.family)).forEach((item) => {
          ips.push(item.address)
        })
      }
      return ips
    }, [])

const execFile = async (file: string, args: string[]) => new Promise<string | void>((resolve, reject) => cp.execFile(file, args, (error, stdout, stderr) => {
  if (stderr !== '') {
    console.error(stderr)
  }

  if (error !== null) {
    reject(error)
    return
  }

  if (stdout !== '') {
    console.log(stdout)
    resolve(stdout)
  }
  resolve()
}))

const main = async () => {
  await execFile('mkdir', ['-p', 'certs'])
  await execFile('rm', ['-rf', 'certs/*.pem', 'certs/*.crt'])

  await execFile(
    'mkcert',
    [
      '-cert-file', 'certs/localhost.pem',
      '-key-file', 'certs/localhost-key.pem',
      'localhost', ...getLocalV4Ips(),
    ]
  )
}

main()
  .catch((error) => {
    console.error(error)
    return process.exit(1)
  })
