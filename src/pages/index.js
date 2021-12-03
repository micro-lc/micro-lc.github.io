import React, {useEffect, useState} from 'react'
import Layout from '@theme/Layout'
import {LoadingAnimation} from '@mia-platform/microlc-ui-components'
import clsx from 'clsx'

import HomeCards from '../components/home-cards/HomeCards'
import HomeBanner from '../components/home-banner/HomeBanner'
import DiscoverMore from '../components/discover-more/DiscoverMore'
import HomepageHeader from '../components/home-header/HomeHeader'

import style from './index.module.css'

export default function Home () {
  const [siteLoaded, setSiteLoaded] = useState(false)

  useEffect(() => {
    const docusaurusNavBar = document.querySelector('#__docusaurus > div > nav')
    if (docusaurusNavBar) {
      docusaurusNavBar.style.display = 'none'
    }
    setSiteLoaded(true)
  }, [])

  return (
    <>
        {!siteLoaded && <LoadingAnimation/>}
        <div className={clsx(!siteLoaded && style.hide)}>
            <Layout title={'Homepage'}>
                <HomepageHeader/>
                <HomeBanner/>
                <div className={style.page_container}>
                    <main>
                        <DiscoverMore/>
                        <HomeCards/>
                    </main>
                </div>
            </Layout>
        </div>
    </>
  )
}
