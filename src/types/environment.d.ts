export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MICRO_LC_LAYOUT_VERSION: string
      MICRO_LC_ORCHESTRATOR_VERSION: string
      MICRO_LC_PREVIEW_ANGULAR_APPLICATION_ENTRY: string
      MICRO_LC_PREVIEW_REACT_APPLICATION_ENTRY: string
      MICRO_LC_PREVIEW_VERSION: string
    }
  }

  interface Window {
    MonacoEnvironment: {
      getWorker(_: unknown, label: string): Worker | Promise<Worker>
    }
    __MICRO_LC_PREVIEW_LOG_LEVEL__?: 'debug'
  }
}
