import CodeBlock from '@theme-original/CodeBlock'
import React, { useEffect, useState } from 'react'

export interface SourceCodeProps {
  base?: string
  content?: string
  filePath?: string
  language?: string
}

export function SourceCodeBlock({ base, filePath, content, language }: SourceCodeProps): JSX.Element {
  const [fileContent, setFileContent] = useState('')

  useEffect(() => {
    if (content !== undefined) {
      setFileContent(content)
      return
    }

    if (filePath === undefined) {
      return
    }

    const calcFilePath = [base, filePath].join('')

    const abortController = new AbortController()

    fetch(calcFilePath, { signal: abortController.signal })
      .then(res => (res.ok ? res.text() : Promise.reject(new TypeError('Cannot retrieve source code'))))
      .then(text => setFileContent(text))
      .catch(err => {
        if (err instanceof DOMException && err.name === 'AbortError') { return }
        console.error(err)
      })

    return () => { abortController.abort() }
  }, [base, content, filePath])

  const fileExtension = language ?? filePath?.slice((filePath.lastIndexOf('.') - 1 >>> 0) + 2)

  return (<CodeBlock language={fileExtension}>{fileContent}</CodeBlock>)
}
