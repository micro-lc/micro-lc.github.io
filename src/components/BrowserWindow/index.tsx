import clsx from 'clsx'
import React, { useCallback, type ReactNode } from 'react'

import styles from './styles.module.css'

interface Props {
  children: ReactNode
  height?: string
  url?: string
}

export default function BrowserWindow({
  children,
  height = '700px',
  url,
}: Props): JSX.Element {
  const trashQuery = useCallback((input: string) => {
    const iframeUrl = new URL(input, window.location.origin)
    iframeUrl.search = ''

    return iframeUrl.toString()
  }, [])
  return (
    <div className={styles['browser-window']} style={{ height }}>

      <div className={styles['browser-window-header']}>

        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#f25f58' }} />
          <span className={styles.dot} style={{ background: '#fbbe3c' }} />
          <span className={styles.dot} style={{ background: '#58cb42' }} />
        </div>

        {url && <div className={clsx(styles['browser-window-address-bar'], 'text--truncate')}>
          {trashQuery(url)}
        </div>}

        <div className={styles['browser-window-menu-icon']}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles['browser-window-body']}>{children}</div>
    </div>
  )
}
