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
export const ProjectCard = ({project: {title, id, carddescription, tags,focused,imgdir,cardimg,collaborators,duration,tools,role},onAddTag}) => {
  
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
    <motion.div initial="default" whileHover="hover" hover
    id={styles.card} key={`card-${id}`}
     className={styles.card} 
     style={ title === null || title==="" ? { display:'none'} : {display : 'block'} }>
      <div className={styles.imgcontainer}  >
        <img src={getImageUrl(imgdir+cardimg)} alt={`Image of project ${title}`}/>
        <div className={styles.cardimgcaption}>
          <FontAwesomeIcon icon={faPeopleGroup} style={ collaborators === null ? { display:'none'} : {display : 'block'} }   /> {collaborators.length +1} 
          <FontAwesomeIcon icon={faClock} style={ duration === null ? { display:'none'} : {display : 'block'} }   /> {duration}
          <FontAwesomeIcon icon={faScrewdriverWrench}   style={ tools === null ? { display:'none'} : {display : 'block'} }  
          />  {tools[0]}
        
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.titlecontainer}>
          <h3>{title}</h3>
            <Link key={title} to={`/projects/${title}`} aria-label={`Link to project ${title} page`} >

              <motion.i 
                
                variants={variants} 
                transition={{scale:0, rot:0, duration: 0.5, repeat:Infinity, repeatDelay: 1,}} 
                className= "fas fa-caret-right" 
                onClick={() => {window.scroll(0,0)}}
              /> 
            </Link>
        </div>
        <h4>{role}</h4>

        <p>{carddescription}</p>
      </div>

    </motion.div>
  );
};
