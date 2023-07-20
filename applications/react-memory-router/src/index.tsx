/*
 * Copyright 2021 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './public-path'
import React from 'react'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { MemoryRouter as Router } from 'react-router-dom'

import App from './App'
import './index.css'

interface QiankunProps {
  [key: string]: unknown
  container?: Element | null
}

const rootComponent = () => (
  <Router>
    <App />
  </Router>
)

let root: Root | undefined

function retrieveContainer(props: QiankunProps) {
  const { container } = props
  return container ? container.querySelector('#root') : document.querySelector('#root')
}

function render(props: QiankunProps) {
  const container = retrieveContainer(props)
  if (!root && container) {
    root = createRoot(container)
  }
  root?.render(rootComponent())
}

export function mount(props: QiankunProps): Promise<null> {
  render(props)
  return Promise.resolve(null)
}

export function unmount(): Promise<null> {
  root?.unmount()
  root = undefined
  return Promise.resolve(null)
}

export async function bootstrap() {
  /* noop */
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}
