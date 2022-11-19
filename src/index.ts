import { toRaw } from 'vue'

declare global {
  interface Console {
    _log(message?: any, ...optionalParams: any[]): void
  }
}

if (!console._log) {
  console._log = console.log

  console.log = (...args) => {
    console._log(...args.map(toRaw))
  }
}
