import React from 'react'
import { getImageUrl } from '../../utils'
import { getLoremIpsum } from '../../utils'
import styles from "./About.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

export const About = ({newref}) => {
  return (
    <section  className={styles.container} id="about">
      <div className={styles.header}>
        <div className={styles.sidebar}></div>
        <h2 ref={newref} className={styles.title}>About</h2>
        </div>        

        <hr className={styles.divider}/>
        <div className={styles.content}>
          <div className={styles.aboutwrapper}>
            <div className={styles.abouttext}>
              <h3>I'm a developer from the cold and dreary Denmark</h3>
              <p>{getLoremIpsum(128)}</p>
              <p>{getLoremIpsum(128)}</p>
              <p>{getLoremIpsum(64)}</p>

            </div>
            <div className={styles.aboutimage}>
              <img src={getImageUrl("images/headshots/about_profile_image_1.png")} />
            </div>
           </div>
        </div>
        <hr className={styles.divider}/>

    </section>
  )
}
