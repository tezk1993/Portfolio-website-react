import React  from 'react'
import { useState, useCallback, useId , useEffect} from 'react';

import { getImageUrl } from '../../utils'
import { getLoremIpsum } from '../../utils'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { Accordion } from '../Elements/Accordion/Accordion';
import supabase from '../SupabaseClient';




export const Experience = ({newref}) => {

    const [experiencedatabase, setExperienceDatabase] = useState([]);
    const [skillsdatabase, setSkillsDatabase] = useState([]);
    const [certifcatedatabase, setCertificateDatabase] = useState([]);


    useEffect(() => {
        getProjects();
        getSkills();
      }, []);
  
    async function getProjects() {
      const { data } = await supabase().from("Experience").select();
      data.sort(function(a,b){
        return new Date(b.datestart) - new Date(a.dateend);
      });
        setExperienceDatabase(data.filter(experience => experience.Type === "Education"));
        setCertificateDatabase(data.filter(experience => experience.Type === "Certificate"));
    }
    async function getSkills() {
      const { data } = await supabase().from("Skills").select();
      setSkillsDatabase(data);
    }

    const SkillsOrder = [
      "Front End",
      "Back End",
      "Game Dev",
      "Tools",
      "Languages" 
    ]

  return (
    <section className={styles.container} id="experience">

      <div className={styles.header}>
          <div className={styles.sidebar}>
            <h3>Skills</h3>
          </div>
          <h2 ref={newref} className={styles.title}>Experience</h2>
      </div>        

      <hr className={styles.divider}/>

      <div className={styles.content}>

        <div className={styles.sidebar}>
          {
            SkillsOrder.map((category,id) => {
            return(
              <div key={id} className={styles.sidebarcontent} >
                <h4>{category}</h4>
                  <div className={styles.skillscontainer}>
                    {skillsdatabase.filter((skill) => skill.category === category)
                    .map((x,i) =>{
                      return(
                        <div key={i + x.name} className={styles.skill}>
                          <div>
                              <img loading="lazy" src={getImageUrl(x.imgdir + x.iconname)} alt={`${x.name} Logo`}/> 
                          </div>
                          <p className={styles.tooltip}>{x.name}</p>
                        </div>
                      )
                    })}
                  </div>
              </div>
            )})
          }   
        
        </div>


        <div className={styles.main}>
          <div className={styles.cardcontainer}>
              <div className={styles.history}> 
                  <Accordion key="0" data={experiencedatabase}/>      
              </div>
          
          </div>
          {/* <div className={styles.certificateContainer}>
                <ul>
                {certifcatedatabase.map((item, i) => (
                  <li>
                    <h4>
                      {item.role}
                    </h4>
                  </li>
                ))}      
                </ul>
              </div> */}
          </div>
      </div>






        
    </section>
  )
}
