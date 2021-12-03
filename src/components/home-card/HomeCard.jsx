import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import useBaseUrl from '@docusaurus/useBaseUrl'
import DocusaurusLink from '@docusaurus/Link'
import {Link as ReactLink} from 'react-router-dom'

import styles from '../home-card/HomeCard.module.css'

function HomeCard ({Svg, title, description, navigateTo, isExternalMicroFrontEndLink = false}) {
  return (
    <div className={styles.home_card_container}>
        { Svg && <Svg alt={title} className={styles.featureSvg}/> }
        { !Svg && <div className={styles.home_card_svg_placeholder}/> }
        <div className={styles.home_card_text_content}>
            <p className={styles.home_card_title}>{title}</p>
            <p className={styles.home_card_description}>{description}</p>
        </div>
        <div>
            <Link className={styles.home_card_explore} to={useBaseUrl(navigateTo)} useReactLink={isExternalMicroFrontEndLink} >
                {'Explore'}
                <FontAwesomeIcon className={styles.home_card_explore_icon} icon={faLongArrowAltRight}/>
            </Link>
        </div>
    </div>
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
