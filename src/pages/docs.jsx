import React from 'react'
import {Redirect} from '@docusaurus/router'
import Head from '@docusaurus/Head'

export default function Docs () {
  return (
    <>
      <Head>
        <title>{'Dev Portal'}</title>
      </Head>
      <Redirect to='intro/getting_started'/>
    </>
  )
}
