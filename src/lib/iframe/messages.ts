import type { Component, Config, PluginConfiguration } from '@micro-lc/interfaces/schemas/v2'

interface OptionMessage {
  content: {
    disableOverlay?: boolean
    instance?: string
    redirectTo?: string
  }
  type: 'options'
}

interface IncomingNewConfigurationMessage {
  content: {
    configuration: Config
    contexts: Map<string, Component[]>
    tags: string[]
  }
  type: 'new-configuration'
}

interface OutgoingNewConfigurationMessage {
  content: {
    configuration: PluginConfiguration
    contexts: Map<string, Component[]>
    tags: string[]
  }
  type: 'new-configuration'
}

type Message = OptionMessage | IncomingNewConfigurationMessage

export type { Message, OptionMessage, IncomingNewConfigurationMessage, OutgoingNewConfigurationMessage }
