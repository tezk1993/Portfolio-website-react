import React from 'react'
import { getImageUrl, getLoremIpsum } from '../../../utils'
import styles from "./ProjectPage.module.css"
import projects from "../../../data/projects.json";

import { useState, useCallback, useId } from 'react';
import {Link, useParams,useNavigate,useLocation  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faXmark } from '@fortawesome/free-solid-svg-icons';

Number.prototype.mod = function (n) {
  "use strict";
  return ((this % n) + n) % n;
};

export const ProjectPage = () => {

  const location = useLocation()
  const { project,projects } = location.state
  const params = useParams();
  const navigate = useNavigate();
  const index = projects.findIndex((a) => a === project)
  const length = projects.length;
  const prev = projects[((index-1 % length) + length) % length];
  const next = projects[((index+1 % length) + length) % length];

 return (
    <section  className={styles.container} id="projects">
      <div className={styles.header}>
      
      <Link to="/" className={styles.link}  > <img className={styles.logo} src={getImageUrl('images/Logo_Finished_Light.webp')} alt={` Logo`}/> </Link> 

        <div>
          <Link className={styles.link} key={prev.title} to={`/projects/${prev.title}`} aria-label={`Link to project ${prev.title} page` }  state={{project:prev,projects}} onClick={() => {window.scroll(0,0)}}>
            <FontAwesomeIcon  icon={faCaretLeft}/>
          </Link>        
          <Link className={styles.link}   key={next.title} to={`/projects/${next.title}`} aria-label={`Link to project ${next.title} page` }  state={{project:next,projects}} onClick={() => {window.scroll(0,0)}}>
            <FontAwesomeIcon  icon={faCaretRight}/>
          </Link>
        </div>
          <div >
                <Link to="/#projects" className={styles.link}  ><FontAwesomeIcon icon={faXmark}/> </Link> 
          </div>
      </div>

      <div className={styles.content}>
       
     
            <div className={styles.content}>
      
              <div className={styles.content_maindisplay} style={ project.maindisplay === null ? { display:'none'} : {display : 'block'} }>
                <iframe src={project.maindisplay} ></iframe>
              </div>
              <div className={styles.content_lower}>
                <div className={styles.content_lower_left}>
                  <div className={styles.content_title_container}>
                      <h2>{project.title}</h2>
                      <h3>{project.projecttype}</h3>
                    </div>
                </div>
                <div className={styles.content_lower_right}>
                  <div className={styles.content_details_container}>
                      <div className={styles.content_details_overview}>
                        <ul>
                          <li className={styles.content_details_element}>
                            <h4>Role</h4>
                            <br></br>
                            <h5>{project.role}</h5>
                          </li>                         
                          <li className={styles.content_details_element}>
                            <h4>Collaborators</h4>
                            <br></br>
                              {project.collaborators.map((collaborator) => {
                              return (
                                <h5>{collaborator}</h5>
                              );
                            })}
                          </li>  
                          <li className={styles.content_details_element}>
                            <h4>Duration</h4>
                            <br></br>

                            <h5>{project.duration}</h5>
                          </li>  
                          <li className={styles.content_details_element}>
                            <h4>Tools</h4>
                            <br></br>
                            {project.tools.map((tool) => {
                              return (
                                <h5>{tool}</h5>
                              );
                            })}
                          </li> 
                          <li className={styles.content_details_element} style={ project.links === null ? { display:'none'} : {display : 'block'} }>
                            <h4>Link</h4>
                            <br></br>
                            
                            {
                              project.links?.map((linkinfo) => {
                              return (
                                <a href={linkinfo.link} target="_blank">  <h5>{linkinfo.linktype}</h5> </a>
                              );
                              
                            })}
                          </li> 
                        </ul>
 
                      </div>
                      <hr className={styles.divider}></hr>
                      <div className={styles.content_details_description}>
                        <p>{project.description}</p>
                      </div>
                      <div className={styles.content_gallery}>
                        {project.gallery.map((image) => {
                          return (
                            <div className={styles.content_gallery_image}>

                              <h5>{image.imagetitle}</h5>
                                <img alt={`${image.imageSrc}`} src={getImageUrl(project.imgdir + image.imageSrc) } />
                              <p>{image.imageText}</p>
                            </div>
                          );
                        })}

                      </div>
                    </div>
                </div>
              </div>
            </div>


      </div>


    </section>
  )
}