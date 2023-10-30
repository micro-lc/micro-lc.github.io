import BrowserOnly from '@docusaurus/BrowserOnly'
import { Redirect } from '@docusaurus/router'
import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'

export default function HomePage(): JSX.Element {
  const redirectUrl = useBaseUrl('/docs')

  return (
    <BrowserOnly>
      {() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-nocheck
        if (!('randomUUID' in window.crypto)) {
          // https://stackoverflow.com/a/2117523/2800218
          // LICENSE: https://creativecommons.org/licenses/by-sa/4.0/legalcode
          // @ts-expect-error randomUUID is being defined
          window.crypto.randomUUID = function randomUUID(): string {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
            return (
            // @ts-expect-error polyfill
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              [1e7] + -1e3 + -4e3 + -8e3 + -1e11
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ).replace(/[018]/g,
              // eslint-disable-next-line no-mixed-operators
              (ch: number) => (ch ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> ch / 4).toString(16)
            )
          }
        }

        return <Redirect to={redirectUrl} />
      }}
    </BrowserOnly>
  )
}
