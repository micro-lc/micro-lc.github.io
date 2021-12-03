import React from 'react'
import clsx from 'clsx'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'

import styles from './HomeBanner.module.css'

const HomeBanner = () => {
  return (
        <div className={styles.home_banner_container}>
            <span className={styles.home_banner_documentation}>
                {'Find out the project documentation!'}
            </span>
            <div className={clsx(['flex_content_center', styles.home_banner_button_container])}>
                <Link className={styles.home_banner_button} to={useBaseUrl('/docs/micro-lc/overview')}>
                    {'Start learning'}
                </Link>
            </div>
        </div>
  )
}

export default HomeBanner
