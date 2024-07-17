import React from 'react'
import { getImageUrl, getLoremIpsum } from '../../utils'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'


import { useState, useCallback, useId } from 'react';
import { Link } from 'react-router-dom';



export const Projects = ({newref}) => {
  const alltags = [...new Set(projects.map(item => item.tags))]; // [ 'A', 'B']


  const [selectedtags, setSelectedTags] = useState([]);
  const [availabletags, setAvailableTags] = useState([...new Set(alltags.flat(1))]);
  
  const id = useId();

  console.log(availabletags)
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



  return (
    <section  className={styles.container} id="projects">
      <div className={styles.header}>
        <div className={styles.sidebar}></div>
        <h2 ref={newref} className={styles.title}>Projects</h2>
      </div>        

      <hr className={styles.divider}/>
      <div className={styles.content}>

        <div className={styles.contentsidebar}>

          <div  className={styles.tagholder}>
          <div className={styles.selectedtags}>
            <h5> Selected tags</h5>

            {selectedtags.length > 0
                ? selectedtags.map((tag) => {
                    return (
                      <button
                        key={`selected-close-button-${tag}`}
                        className={styles.tag}
                        onClick={deleteTag(tag)}
                        // onClick={deleteTag(tag)}

                      >
                        {tag} &nbsp; x
                      </button>
                    );
                  })
                : 'No tags selected'}
          </div>
           
          <div className={styles.availabletags} >
            <h5> Available tags</h5>
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
                      {tag} &nbsp; x
                    </button>
                  );
                })
              : 'No tags available'}
            </div>
          </div>

        </div>



        <div className={styles.cardcontainer}>
            {projects
            .filter((proj) =>  matchTags(proj.tags, selectedtags))
            .map(({ title, id, description, tags,focused,imageSrc,collaborators,duration,tools,role}) => {
              
              return (
                <div id={styles.card} key={`card-${id}`} className={`${styles.card} ${focused=== true ? styles.focusedcard : styles.card}` } style={ title === null || title==="" ? { display:'none'} : {display : 'block'} }>
                  <div className={styles.imgcontainer}  >
                    <img src={getImageUrl(imageSrc)} alt='project image'/>
                    <div className={styles.cardimgcaption}>
                      <FontAwesomeIcon icon={faPeopleGroup} style={ collaborators === null ? { display:'none'} : {display : 'block'} }   /> {collaborators.length} 
                      <FontAwesomeIcon icon={faClock} style={ duration === null ? { display:'none'} : {display : 'block'} }   /> {duration}
                      <FontAwesomeIcon icon={faScrewdriverWrench}   style={ tools === null ? { display:'none'} : {display : 'block'} }  
                      />  {tools[0]}
                    
                    </div>
                  </div>
                  <div className={styles.textcontainer}>
                    <div className={styles.titlecontainer}>
                    <h3>{title}</h3>
                    <Link key={title} to={`/projects/${id}`} ><i className= "fas fa-caret-right" onClick={() => {window.scroll(0,0)}}/> </Link>
                    </div>
                    <h4>{role}</h4>

                    <p>{description}</p>
                  </div>
                  <div className={styles.cardtags}>
                    {tags.map((tag) => {
                      return (
                        <button
                          key={`card-add-button-${tag}`}
                          type='button'
                          onClick={addTag(tag)}
                        >
                          #{tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

      </div>


    </section>
  )
}