import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import useBaseUrl from '@docusaurus/useBaseUrl'
import DocusaurusLink from '@docusaurus/Link'
import {Link as ReactLink} from 'react-router-dom'
import clsx from 'clsx'

import styles from '../home-card/HomeCard.module.css'

function HomeCard ({Svg, title, description, navigateTo, isExternalMicroFrontEndLink = false}) {
  return (
    <Link className={clsx(styles.home_card_explore, styles.home_card_container)} to={useBaseUrl(navigateTo)} useReactLink={isExternalMicroFrontEndLink}>
        { Svg && <Svg alt={title} className={styles.featureSvg}/> }
        { !Svg && <div className={styles.home_card_svg_placeholder}/> }
        <div className={styles.home_card_text_content}>
            <p className={styles.home_card_title}>{title}</p>
            <p className={styles.home_card_description}>{description}</p>
        </div>
        <div>
          {'Explore'}
          <FontAwesomeIcon className={styles.home_card_explore_icon} icon={faLongArrowAltRight}/>
        </div>
   </Link>
  )
}

function Link (props) {
  const {useReactLink} = props

  return useReactLink ?
    <ReactLink {...props} target={'_self'} /> :
    <DocusaurusLink {...props} />
}

Link.propTypes = {
  useReactLink: PropTypes.bool.isRequired
}

HomeCard.propTypes = {
  Svg: PropTypes.any,
  description: PropTypes.any.isRequired,
  isExternalMicroFrontEndLink: PropTypes.bool,
  navigateTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default HomeCard
