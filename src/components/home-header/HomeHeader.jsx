import React from 'react'
import clsx from 'clsx'

import styles from './HomeHeader.module.css'

const IndexHero = require('../../../static/img/home/index_hero.svg').default

const HomepageHeader = () => {
  return (
        <header className={styles.header_container}>
            <div className={clsx(['flex_content_center', styles.header_content])}>
                <h1 className={clsx([styles.header_content_title, styles.header_primary_color])}>
                    {'micro-lc'}
                </h1>
                <h1 className={styles.header_content_title}>
                    {'the micro-frontend orchestrator'}
                </h1>
            </div>
            <div>
                <IndexHero className={styles.header_image}/>
            </div>
        </header>
  )
}

export default HomepageHeader
