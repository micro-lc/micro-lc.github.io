export {}

declare global {
  interface Window {
    MonacoEnvironment: {
      getWorker(_: unknown, label: string): Worker | Promise<Worker>
    }
  }
}
