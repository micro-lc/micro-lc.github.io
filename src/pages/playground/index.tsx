import Layout from '@theme/Layout'

import React from 'react'

export default function playground(): JSX.Element {
  return (
    <Layout title='Playground'>
      <div
        style={{
          height: '100%',
          position: 'absolute',
          width: '100%',
        }}
      >
        <iframe
          src='./config.html'
          style={{ height: 'inherit', width: 'inherit' }}
          title='Playground'
        ></iframe>
      </div>
    </Layout>
  )
}
