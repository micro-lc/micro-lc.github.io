import BrowserOnly from '@docusaurus/BrowserOnly'
import Details from '@docusaurus/theme-classic/lib/theme/Details'
import useBaseUrl from '@docusaurus/useBaseUrl'
import BrowserWindow from '@site/src/components/BrowserWindow'
import { SourceCodeBlock } from '@site/src/components/SourceCodeBlock'
import type { SourceTabsProps } from '@site/src/components/SourceTabs'
import { SourceTabs } from '@site/src/components/SourceTabs'
import React, { useEffect, useMemo, useRef, useState } from 'react'

interface ExampleFrameProps {
  base?: string
  height?: string
  id?: string
  showSource: boolean
  sourceTabs?: SourceTabsProps['tabs']
  src: string
  title: string
}

type UrlChangeCb = (url: string) => void

const frameUrlChangeListener = (element: HTMLIFrameElement, callback: UrlChangeCb) => {
  let lastDispatched: string

  const dispatchChange = (href = element.contentWindow?.location.href) => {
    const newHref = href ?? ''

    if (newHref !== lastDispatched) {
      lastDispatched = newHref
      return callback(newHref)
    }
  }

  const unloadHandler = () => { setTimeout(dispatchChange) }

  const attachUnload = () => {
    element.contentWindow?.removeEventListener('unload', unloadHandler)
    element.contentWindow?.addEventListener('unload', unloadHandler)
  }

  element.addEventListener('load', () => {
    attachUnload()
    dispatchChange()
  })

  element.contentWindow?.addEventListener('popstate', function onPopState(event: PopStateEvent) {
    const targetWindow = (event.target as Window | null) ?? window

    dispatchChange(targetWindow.location.href)
  })

  attachUnload()
}

function Example({
  base,
  height,
  showSource = true,
  sourceTabs,
  src,
  id,
  title,
}: ExampleFrameProps): JSX.Element {
  const iFrameRef = useRef<HTMLIFrameElement | null>()
  const url = useMemo(() => {
    const iframeSrc = new URL([base, src].join(''), window.location.origin)
    iframeSrc.search = id ? new URLSearchParams({ id }).toString() : ''

    return iframeSrc
  }, [base, id, src])
  const [isLoading, setIsLoading] = useState(true)
  const [currUrl, setCurrUrl] = useState<string>()

  const loadingImagePath = useBaseUrl('/img/loading.svg')

  useEffect(() => {
    if (id === undefined) {
      setCurrUrl(url.toString())
    } else {
      window.addEventListener('message', (message: MessageEvent<unknown>) => {
        const { data } = message
        if (data === null || typeof data !== 'object' || !('id' in data) || data.id !== id) {
          return
        }

        setCurrUrl((data as { href?: string }).href)
      })
    }

    if (iFrameRef.current) {
      frameUrlChangeListener(iFrameRef.current, frameUrl => setCurrUrl(frameUrl))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iFrameRef, iFrameRef.current])

  return (
    <>
      <BrowserWindow height={height} url={currUrl}>
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
          onLoad={() => setIsLoading(false)}
          ref={innerRef => { iFrameRef.current = innerRef }}
          src={url.toString()}
          style={{ height: '100%', width: '100%' }}
          title={title}
        ></iframe>
      </BrowserWindow>

      {
        showSource && (
          <Details {...{ summary: <summary>Source code</summary> }}>
            {
              sourceTabs
                ? (<SourceTabs base={base} tabs={sourceTabs} />)
                : (<SourceCodeBlock base={base} filePath={src} />)
            }
          </Details>
        )
      }
    </>
  )
}

export default function ExampleFrame(props: ExampleFrameProps) {
  return (
    <BrowserOnly>
      {() => <Example {...props} />}
    </BrowserOnly>
  )
}
