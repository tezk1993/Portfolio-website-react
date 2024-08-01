import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../../utils";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { useState, useCallback, useId , useEffect} from 'react';

import { Link } from 'react-router-dom';
// export const ProjectCard = (props) => {
export const ProjectCard = ({project}) => {


  const variants = {
    default: {
      scale:1,
      rotate:0,

    },
    hover:{
      scale: [1, 1.4, 1.4, 1, 1],
      rotate: [0,-20 ,20,0, 0],
    },
  };

  return (            
    <motion.div initial="default" whileHover="hover" hover id={styles.card} key={`card-${project.id}`} className={styles.card} style={ project.title === null ? { display:'none'} : {display : 'block'} }>
        <Link  key={project.title} to={`/projects/${project.title}`} aria-label={`Link to project ${project.title} page` }  state={{project}} onClick={() => {window.scroll(0,0)}}>
        </Link>

        <div className={styles.imgcontainer}   >
          <img loading="lazy" src={getImageUrl(project.imgdir+project.cardimg)} alt={`Image of project ${project.title}`} style={ project.cardimg === "" ? { display:'none'} : {display : 'block'} }/>
          <div className={styles.cardimgcaption}>
            <FontAwesomeIcon icon={faPeopleGroup} style={ project.collaborators === null ? { display:'none'} : {display : 'block'} }   /> {project.collaborators.length +1} 
            <FontAwesomeIcon icon={faClock} style={ project.duration === null ? { display:'none'} : {display : 'block'} }   /> {project.duration}
            <FontAwesomeIcon icon={faScrewdriverWrench}   style={ project.tools === null ? { display:'none'} : {display : 'block'} }  
            />  {project.tools[0]}
          
          </div>
        </div>
        <div className={styles.textcontainer}>
          <div className={styles.titlecontainer}>
            <h3>{project.title}</h3>

                <motion.i 
                  
                  variants={variants} 
                  transition={{scale:0, rot:0, duration: 0.5, repeat:Infinity, repeatDelay: 1,}} 
                  className= "fas fa-caret-right" 
                  
                /> 
          </div>
          <h4>{project.role}</h4>

          <p>{project.carddescription}</p>
        </div>

    </motion.div>

  );
};
