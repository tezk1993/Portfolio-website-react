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

    const [projectsdatabase, setProjectsDatabase] = useState([]);
    const [skillsdatabase, setSkillsDatabase] = useState([]);
    useEffect(() => {
        getProjects();
        getSkills();
      }, []);
  
    async function getProjects() {
      const { data } = await supabase().from("Experience").select();
      data.sort(function(a,b){
        return new Date(b.datestart) - new Date(a.dateend);
      });
        setProjectsDatabase(data);
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
                              <img src={getImageUrl(x.imgdir + x.iconname)} alt={`${x.name} Logo`}/> 
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



        <div className={styles.cardcontainer}>
          <div className={styles.history}> 
                    <Accordion key="0" data={projectsdatabase}/>      
            </div>
        
        </div>

      </div>






        
    </section>
  )
}
