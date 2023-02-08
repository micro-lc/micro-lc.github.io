import type { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema'

interface SchemaResources {
  readonly schema?: JSONSchema4 | JSONSchema6 | JSONSchema7 | undefined
  readonly uri: string
}

interface Schema extends SchemaResources {
  readonly fileMatch: string[]
}

type SchemaKey = '*.config'

const JSON_EXTENSION = 'json'

const YAML_EXTENSION = 'yaml'

const MICRO_LC_REPOSITORY = 'https://raw.githubusercontent.com/micro-lc/micro-lc/main'

const createJsonMatcher = (entry: string) => [
  `**/${entry}.${JSON_EXTENSION}`,
  `**/${entry}.${YAML_EXTENSION}`,
]

const partialSchemaObject: Record<SchemaKey, SchemaResources> = {
  '*.config': {
    uri: `${MICRO_LC_REPOSITORY}/packages/interfaces/schemas/v2/config.schema.json#`,
  },
}

const createFileNameFromSchemaKey = (prefix: string | undefined, suffix: SchemaKey, extension: 'json' | 'yaml'): string => {
  const { href: noTrailingSlashHref } = new URL(window.location.pathname.replace(/\/$/, ''), window.location.href)
  return `${noTrailingSlashHref}${suffix.replace('*', prefix ?? '')}.${extension}`
}

const schemas = Object.entries(partialSchemaObject).reduce<Partial<Record<SchemaKey, Schema>>>((acc, [key, value]) => {
  acc[key as SchemaKey] = { ...value, fileMatch: createJsonMatcher(key) }
  return acc
}, {}) as Record<SchemaKey, Schema>

export { createFileNameFromSchemaKey, schemas, JSON_EXTENSION, YAML_EXTENSION }
