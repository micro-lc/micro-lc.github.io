import React from 'react'
import styles from './HomeCards.module.css'
import HomeCard from '../home-card/HomeCard'

const pagesList = [
  {
    title: 'Overview',
    Svg: require('../../../static/img/home/pages.svg').default,
    description: (
            <>
                {'An introduction to the micro-lc project.'}
            </>
    ),
    navigateTo: '/docs/micro-lc/overview'
  },
  {
    title: 'Core configuration',
    Svg: require('../../../static/img/home/plane.svg').default,
    description: (
            <>
                {'Configurations used to make micro-lc up and running.'}
            </>
    ),
    navigateTo: '/docs/micro-lc/core_configuration'
  }]

const featureList = [
  {
    title: 'General purpose configuration',
    Svg: require('../../../static/img/home/cube.svg').default,
    description: (
            <>
                {'Explore the general purpose API that can be used to serve dedicated configurations to your micro-frontends.'}
            </>
    ),
    navigateTo: '/docs/micro-lc/plugin_configuration'
  },
  {
    title: 'Plugin configuration',
    Svg: require('../../../static/img/home/squares.svg').default,
    description: (
            <>
                {'Understand the different kind of plugins available in micro-lc.'}
            </>
    ),
    navigateTo: '/docs/micro-lc/plugin_configuration'
  },
  {
    title: 'Core plugin',
    Svg: require('../../../static/img/home/stack.svg').default,
    description: (
            <>
                {'Discover the list of plugins designed to enrich the micro-lc experience.'}
            </>
    ),
    navigateTo: '/docs/micro-lc/core_plugins'
  }
]

const homeCardMapper = (props, idx) => (
  <HomeCard key={idx} {...props} />
)

export default function HomeCards () {
  return (
    <div className={styles.container_padding}>
        <div className={styles.features}>
            {
                pagesList.map(homeCardMapper)
            }
        </div>
        <div className={styles.features}>
            {
                featureList.map(homeCardMapper)
            }
        </div>
    </div>
  )
}
