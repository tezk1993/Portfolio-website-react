import React from 'react'
import { getImageUrl } from '../../utils'
import { getLoremIpsum } from '../../utils'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { Accordion } from '../Elements/Accordion/Accordion';


export const Experience = ({newref}) => {
  return (
    <section className={styles.container} id="experience">
        <div className={styles.sidebar}>
            <h3>Skills</h3>
            <div className={styles.sidebarcontent}>
                <div className={styles.skillscontainer}>
                    {
                        skills.map((skill,id) =>{
                            return  (  
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={`${skill.title} Logo`}/>
                                </div>

                            </div>
                        )
                        }
                        )
                    }
            </div>
            </div>
        </div>

        
        <div className={styles.content}>
        <h2 ref={newref}  className={styles.title}>Experience</h2>

            <div className={styles.history}> 
                    <Accordion key="0" data={history}/>      
            </div>

        </div>
    </section>
  )
}
