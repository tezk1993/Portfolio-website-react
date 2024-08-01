import React from 'react'
import { getImageUrl, getLoremIpsum } from '../../utils'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { useState, useCallback, useId , useEffect} from 'react';
import { Link } from 'react-router-dom';
import supabase from '../SupabaseClient';
import { HiThere } from '../Animations/HiThere';
import { motion } from "framer-motion";





export const Projects = ({newref}) => {


  const [databaseprojects, setDatabaseProjects] = useState([]);

  const [sortedProjects, setSortedProjects] = useState([]);


  const [selectedtags, setSelectedTags] = useState([]);
  const [availabletags, setAvailableTags] = useState([]);

  const [tagbarstate, setTagBarState] = useState(false);

  // const variants = {
  //   default: {
     
  //   },
  //   hover:{
  //     scale: [1.4, 1.4, 1.4, 1.4, 1],
  //     rotate: [0, -20, 20, 0, 0],
  
  //   }
  // };
  useEffect(() => {
      getProjects();
    }, []);

  async function getProjects() {
    const { data } = await supabase().from("Projects").select();
    setAvailableTags([...new Set(data.map(item => item.tags).flat(1))])
    data.sort(function(a,b){
      return new Date(b.dateofproject) - new Date(a.dateofproject);
    });
    setDatabaseProjects(data);
  }


  const id = useId();

  const addTag = useCallback(
    (tagId) => () => {
      const tagsFiltered = availabletags.filter((tag) => {
         return tag !== tagId;
      });

      setAvailableTags(tagsFiltered);

      if (!selectedtags.includes(tagId)) {
        return setSelectedTags((prevTags) => [...prevTags, tagId]);
      }

   

    },
    [selectedtags,availabletags]
  );

  const deleteTag = useCallback(
    (tagId) => () => {
      const tagsFiltered = selectedtags.filter((tag) => {
        return tag !== tagId;
      });
      setSelectedTags(tagsFiltered);

      if (!availabletags.includes(tagId)) {
        return setAvailableTags((prevTags) => [...prevTags, tagId]);
      }
     
    },
    [selectedtags,availabletags]
  );

 
  const matchTags = (current, target) => {
    return target.every((tag) => current.includes(tag));
  };

  function openTagbar() {
    if(!tagbarstate){
      document.getElementById("tagcontainer").style.width = "0px";
      document.getElementById("tagcontainer").style.padding = "0px";
      document.getElementById("caret").className = "fas fa-caret-right";
    }else{
      document.getElementById("tagcontainer").style.width = "288px";
      document.getElementById("tagcontainer").style.padding = "16px";
      document.getElementById("caret").className = "fas fa-caret-left";

    }
    setTagBarState(!tagbarstate);

  }
  


  return (
    <section  className={styles.container} id="projects">
      <div className={styles.header}>
        <div className={styles.sidebar}>
        </div>
        <h2 ref={newref} className={styles.title}>Projects</h2>
      </div>        

      <hr className={styles.divider}/>
      <div className={styles.content}>

        <div className={styles.contentsidebar}>

          <div   className={styles.tagtab}>
            <i id='caret' className= "fas fa-caret-left" onClick={openTagbar}/>
            <div id="tagcontainer" className={styles.tagcontainer}>
            <h5> Selected tags</h5>
              <div className={styles.tags}>
        

              {selectedtags.length > 0
                  ? selectedtags.map((tag) => {
                      return (
                        <button
                          key={`selected-close-button-${tag}`}
                          className={styles.tag}
                          onClick={deleteTag(tag)}
                          // onClick={deleteTag(tag)}

                        >
                          {tag}
                        </button>
                      );
                    })
                  : <p>No tags selected</p>}
            </div>
            <h5> Available tags</h5>
            <div className={styles.tags} >
                {availabletags.length > 0
                ? availabletags.map((tag) => {
                    return (
                      <button
                        key={`available-close-button-${tag}`}
                        className={styles.tag}
                        // onClick={() => {addTag(tag); deleteAvailableTag(tag);}}
                        // onClick={addTag(tag)}
                        onClick={addTag(tag)}
                        >
                        {tag}
                      </button>
                    );
                  })
                : <p>No tags available</p>}
              </div>
            </div>
          </div>

        </div>



        <div className={styles.cardcontainer}>
            {databaseprojects
            .filter((proj) =>  matchTags(proj.tags, selectedtags))
            .map((x, id) => {
              return(
                <ProjectCard key={id} project={x} />
              )
            })}
        </div>

      </div>


    </section>
  )
}