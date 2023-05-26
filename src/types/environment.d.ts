export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MICRO_LC_LAYOUT_VERSION: string
      MICRO_LC_ORCHESTRATOR_VERSION: string
      MICRO_LC_PREVIEW_VERSION: string
    }
  }

  interface Window {
    MonacoEnvironment: {
      getWorker(_: unknown, label: string): Worker | Promise<Worker>
    }
  }
}
