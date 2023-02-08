// prod only since development can use the `vite-plugin-monaco-editor` plugin 👇

(function injectMonacoEnvironment() {
  const workers: Record<'default' | 'json' | 'yaml', () => Worker> = {
    default: () => new Worker(new URL('./editor.worker', import.meta.url)),
    json: () => new Worker(new URL('./json.worker', import.meta.url)),
    yaml: () => new Worker(new URL('./yaml.worker', import.meta.url)),
  }

  window.MonacoEnvironment = {
    async getWorker(_, label) {
      if (label === 'json' || label === 'yaml') {
        return Promise.resolve(workers[label]())
      }

      return Promise.resolve(workers.default())
    },
  }
}())

// end 👆
