import React, { useMemo } from 'react'
import { ReplaySubject } from 'rxjs'

import type { Render } from '../lib/iframe'
import { onLoadFactory } from '../lib/iframe'

import Editor from './Editor'
import Resize from './Resize'

type ConfiguratorProps = Record<string, never>

const PREVIEW_IFRAME_URL = new URL('https://unpkg.com/@micro-lc/preview@latest/website/index.html')

const Configurator: React.FC<ConfiguratorProps> = () => {
  const render = useMemo(() => new ReplaySubject<Render>(1), [])
  const onLoad = useMemo(() => onLoadFactory(
    window, PREVIEW_IFRAME_URL.origin, render.asObservable()
  ), [render])

  return (
    <Resize
      border='left'
      borderStyle='12px solid var(--playground-color-grey)'
      className='playground grow-first'
      tag='main'
    >
      <Editor
        render={render}
        style={{ minWidth: '400px', width: '40%' }}
      />
      <div style={{ flexGrow: 1 }}>
        <iframe
          onLoad={onLoad}
          src={PREVIEW_IFRAME_URL.href}
          style={
            {
              border: 'none',
              height: '100%',
              width: '100%',
            }
          }
          title='preview'
        >
          <p>Your browser does not support iframes</p>
        </iframe>
      </div>
    </Resize>
  )
}

export default Configurator
