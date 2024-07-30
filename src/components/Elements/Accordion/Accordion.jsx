import { getLoremIpsum } from '../../../utils'
import styles from "./Accordion.module.css"
import React, {useState} from 'react';
import { getImageUrl } from '../../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Scale } from '../../Animations/Reveal/Scale';
import { motion } from "framer-motion";

export const Accordion = ({data}) => {
    const [selected, setSelected] = useState(0)

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }

    const variants = {
        default: {
         scale:1,
         y:0,
        },
        hover:{
          scale: [1, 1.4, 1.4, 1.4, 1],
          y: [0, -5, 5, 0, 0],
          
        },
        reset:{
            scale:1,
            y:0,
        }
      };
  return (
    <div className={styles.wrapper}>
            <div className={styles.accordion}>
                {data.map((item, i) => (
                    <Scale key={i + item.institute} delay={0.25*i}>
                        <motion.div   initial="default" whileHover="hover"  onHoverEnd={e => {}} id={styles.card}   key={i} onClick={() => toggle(i)}>
                            <div className={styles.title} >
                                <div className={styles.organisation}> 
                                    <h3>{item.institute}</h3>
                                    <p className={styles.dates}> {new Date(item.datestart).getFullYear()}-{new Date(item.dateend).getFullYear()}</p>
                                    <h4>{item.role}</h4> 
                                </div>

                                <img
                                    src={getImageUrl(item.imageSrc)}
                                    alt={`${item.institute} Logo` }
                                    onError={({ currentTarget }) => 
                                    {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src="";
                                    }}
                                />

                            </div>
                            <div id={styles.content} className={selected=== i ? styles.opened : styles.collapsed}>
                            <hr className={styles.divider}/>

                                <p>{item.description}</p>
                                {item.responsibilities.map((bullets, bulletId) =>(
                                    <div key={"bullet" + bulletId} className={styles.bullet}>
                                        <h4>{bullets.bullettitle}</h4>
                                        <ul>
                                            {bullets.bulletpoints.map((bulletpoint,id) => (
                                                <li key={id}><h5>{bulletpoint}</h5></li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.caret}>
                                {selected=== i ? <i  className= "fas fa-caret-up" /> : <motion.i variants={variants} transition={{duration: 1, repeat: Infinity, repeatDelay: 0,}} className="fas fa-caret-down" />}
                            </div>

                        </motion.div>
                    </Scale>
                ))}      
            </div>
    </div>

  )
}
