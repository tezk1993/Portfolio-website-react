import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Contact = ({newref}) => {
  return (
    <footer ref={newref} className={styles.container} id="contact">
        <div className={styles.text} >
            <h2 className={styles.title}>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links} >
            <li className={styles.link} >
                <a 
                    href='mailto:@dennis.schaua@gmail.com'> 
                    <FontAwesomeIcon icon={faEnvelope} /> 
                </a>
            </li>
            <li className={styles.link} >
                <a 
                    href='https://www.linkedin.com/in/dschaua/'> 
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" /> 
                </a>
            </li>

            <li className={styles.link} >
                <a 
                    href='https://www.linkedin.com/in/dschaua/'> 
                    <FontAwesomeIcon icon="fa-brands fa-twitter" /> 
                </a>

            </li>

            <li className={styles.link} >
                <a 
                    href='https://www.linkedin.com/in/dschaua/'> 
                    <FontAwesomeIcon icon="fa-brands fa-itch-io"  /> 
                </a>
            </li>

            <li className={styles.link} >
                <a 
                    href='https://www.linkedin.com/in/dschaua/'> 
                    <FontAwesomeIcon icon="fa-brands fa-github" /> 
                </a>
            </li>

            
        </ul>
    </footer>  
)
}
