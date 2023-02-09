import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { setDiagnosticsOptions } from 'monaco-yaml'

import './monaco-contrib'
import { schemas } from './schemas'
import './worker'

monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
  allowComments: true,
  enableSchemaRequest: true,
  schemas: [
    schemas['*.config'],
  ],
  validate: true,
})

setDiagnosticsOptions({
  enableSchemaRequest: true,
  schemas: [
    schemas['*.config'],
  ],
})

const getWorker = async (type: 'json' | 'yaml'): Promise<Worker | void> => {
  if (window.MonacoEnvironment?.getWorker) {
    let workerOrPromise = window.MonacoEnvironment.getWorker('', type) as Promise<Worker>
    if (!('then' in workerOrPromise)) {
      workerOrPromise = Promise.resolve(workerOrPromise)
    }

    return workerOrPromise
  }
}

export type Monaco = typeof monaco
export type { editor as Editor } from 'monaco-editor'
export * from 'monaco-editor/esm/vs/editor/editor.api'
export { getWorker }
