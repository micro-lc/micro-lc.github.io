import BrowserOnly from '@docusaurus/BrowserOnly'
import Details from '@docusaurus/theme-classic/lib/theme/Details'
import useBaseUrl from '@docusaurus/useBaseUrl'
import type { Config } from '@micro-lc/interfaces/schemas/v2'
import BrowserWindow from '@site/src/components/BrowserWindow'
import React, { useEffect, useMemo, useState } from 'react'
import { ReplaySubject } from 'rxjs'

import { PREVIEW_IFRAME_URL, onLoadFactory } from '../../lib/iframe'
import type { Render } from '../../lib/iframe'
import { SourceCodeBlock } from '../SourceCodeBlock'

interface TutorialFrameProps {
  configuration: Config
  height?: string
}

function Tutorial({
  height = '550px',
  configuration,
}: TutorialFrameProps): JSX.Element {
  const instance = useMemo(() => window.crypto.randomUUID(), [])
  const render = useMemo(() => new ReplaySubject<Render>(1), [])
  const onLoad = useMemo(() => onLoadFactory(
    window, PREVIEW_IFRAME_URL.origin, render.asObservable()
  ), [render])
  const loadingImagePath = useBaseUrl('/img/loading.svg')

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    render.next({ configuration, contexts: new Map(), tags: [] })
  }, [configuration, instance, render])

  return (
    <Details {...{ summary: <summary>Preview</summary> }}>
      <BrowserWindow height={height}>
        {
          isLoading && (
            <div style={{
              background: '#ffffff',
              height: '40px',
              left: 'calc(50% - 20px)',
              position: 'absolute',
              top: 'calc(50% - 20px)',
              width: '40px',
            }}>
              <img alt='Loading...' src={loadingImagePath} />
            </div>
          )
        }

        <iframe
          onLoad={(event) => {
            onLoad(event)
            setIsLoading(false)
          }}
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
      </BrowserWindow>
      <Details {...{ summary: <summary>Source code</summary> }}>
        <SourceCodeBlock content={JSON.stringify(configuration, null, 2)} language='json' />
      </Details>
    </Details>
  )
}

export default function TutorialFrame(props: TutorialFrameProps) {
  return (
    <BrowserOnly>
      {() => <Tutorial {...props} />}
    </BrowserOnly>
  )
}
