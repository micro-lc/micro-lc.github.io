import jsYaml from 'js-yaml'
import stripJsonComments from 'strip-json-comments'

type ModelType = 'json' | 'yaml'

type ValidationError = {
  error: true
  messages: string[]
  value: undefined
} | {
  error: false
  messages: string[]
  value: string
}

const isModelType = (input: unknown): input is ModelType =>
  typeof input === 'string' && (['json', 'yaml'] as ModelType[]).includes(input as ModelType)


const jsonToYaml = (jsonText: string): string =>
  jsYaml.dump(
    JSON.parse(stripJsonComments(jsonText, { whitespace: false }).trim()), { schema: jsYaml.JSON_SCHEMA }
  )

const yamlToJson = (content: string) =>
  JSON.stringify(
    jsYaml.load(content, { json: true, schema: jsYaml.JSON_SCHEMA })
  )

function translateFrom(this: string, inputLang: ModelType) {
  return {
    to: (outputLang: ModelType): ValidationError => {
      if (inputLang === outputLang) {
        return {
          error: false,
          messages: [],
          value: outputLang === 'json' ? stripJsonComments(this, { whitespace: false }).trim() : this,
        }
      }

      let value: string
      try {
        const unique = `${inputLang}${outputLang}`
        switch (unique) {
        case 'jsonyaml':
          value = jsonToYaml(this)
          break
        case 'yamljson':
        default:
          value = yamlToJson(this)
          break
        }

        return { error: false, messages: [], value }
      } catch (err) {
        return { error: true, messages: err instanceof Error ? [err.message] : [], value: undefined }
      }
    },
  }
}

const translate = (value: string) => ({
  from: translateFrom.bind(value),
})

const dump = (obj: unknown) => ({
  to: (outputLang: ModelType): ValidationError => {
    let value: string
    try {
      switch (outputLang) {
      case 'yaml':
        value = jsYaml.dump(obj, { schema: jsYaml.JSON_SCHEMA })
        break
      case 'json':
      default:
        value = JSON.stringify(obj)
        break
      }

      return { error: false, messages: [], value }
    } catch (err) {
      return { error: true, messages: err instanceof Error ? [err.message] : [], value: undefined }
    }
  },
})

export type { ModelType, ValidationError }
export { isModelType, jsonToYaml, yamlToJson, translate, dump }
