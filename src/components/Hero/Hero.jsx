import React from 'react'
import styles from "../Hero/Hero.module.css";
import { getImageUrl } from '../../utils';
import { getLoremIpsum } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Hero = ({newref}) => {
  return (
    <section ref={newref} className={styles.container} id='hero'>
      
        <div className={styles.sidebar}>
          <img className={styles.logo} src={getImageUrl('images/Logo_Finished_Light.png')} alt={` Logo`}/>
          <ul className={styles.links} >
            <li className={styles.link} >
                <a 
                    href='mailto:@dennis.schaua@gmail.com'
                    target="_blank"
                > 
                    <i className={"fa-solid fa-envelope"} /> 
                </a>
            </li>
            <li className={styles.link} >
                <a 
                    href='https://www.linkedin.com/in/dschaua/'
                    target="_blank"
                > 
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" /> 
                </a>
            </li>

            <li className={styles.link} >
                <a 
                    href='https://x.com/D_SchauA'
                    target="_blank"
                > 
                    <FontAwesomeIcon icon="fa-brands fa-twitter"/> 
                </a>

            </li>

            <li className={styles.link} >
                <a 
                    href='https://dschaua.itch.io'
                    target="_blank"
                > 
                    <FontAwesomeIcon icon="fa-brands fa-itch-io"  /> 
                </a>
            </li>

            <li className={styles.link} >
                <a 
                    href='https://github.com/tezk1993'
                    target="_blank"  
                  > 
                    <FontAwesomeIcon icon="fa-brands fa-github" /> 
                </a>
            </li>

            
        </ul>
        </div>

          <div className={styles.content}>
            <div className={styles.name}>
              <h1  className={styles.title} id={styles.firstname}>Dennis</h1>
              <h1  className={styles.title}  id={styles.middlename}>Schau</h1>
              <h1  className={styles.title}  id={styles.lastname}>Andersen</h1>
            </div>
              <p className={styles.description}>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.</p>
              {/* <a href="mailto:dennis.schaua@gmail.com" className={styles.contactBtn}>Contact Me!</a> */}
          </div>
        {/* <img src={getImageUrl("placeholder/image/image-l.png")} alt="Hero Image of me" className={styles.heroImage} /> */}


    </section>
  )
}
