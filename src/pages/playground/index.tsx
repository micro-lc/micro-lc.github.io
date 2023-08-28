import BrowserOnly from '@docusaurus/BrowserOnly'
import Layout from '@theme/Layout'
import React from 'react'

import './style.css'

export default function playground(): JSX.Element {
  return (
    <Layout title='Playground' wrapperClassName='playground container'>
      <BrowserOnly>
        {() => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, global-require, @typescript-eslint/no-var-requires
          const { default: Configurator } = require('../../components/Configurator')
          return <Configurator />
        }}
      </BrowserOnly>
    </Layout>
  )
}
