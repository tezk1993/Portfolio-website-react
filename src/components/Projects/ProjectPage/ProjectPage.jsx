import React from 'react'
import { getImageUrl, getLoremIpsum } from '../../../utils'
import styles from "./ProjectPage.module.css"
import projects from "../../../data/projects.json";

import { useState, useCallback, useId } from 'react';
import {Link, useParams,useNavigate  } from 'react-router-dom';


export const ProjectPage = ({project}) => {

  const params = useParams();
  const selectproject = projects.find((proj) => params.profileid === proj.id)
  console.log(params);
  const navigate = useNavigate();

 return (
    <section  className={styles.container} id="projects">
      <div className={styles.content}>

      <div className={styles.exit}>
                <div  > <Link to="/"><i className="fa-solid fa-xmark"></i> </Link> </div>
              </div>
            <div className={styles.content}>
      
              <div className={styles.content_maindisplay}>
              <iframe
                src={selectproject.maindisplay}>
                </iframe>
              </div>
              <div className={styles.content_lower}>
                <div className={styles.content_lower_left}>
                  <div className={styles.content_title_container}>
                      <h2>{selectproject.title}</h2>
                      <h3>{selectproject.projecttype}</h3>
                    </div>
                </div>
                <div className={styles.content_lower_right}>
                  <div className={styles.content_details_container}>
                      <div className={styles.content_details_overview}>
                        <div className={styles.content_details_element}>
                          <h4>Role</h4>
                          <br></br>

                          <h5>{selectproject.role}</h5>
                        </div>                         
                        <div className={styles.content_details_element}>
                          <h4>Collaborators</h4>
                          <br></br>
                            {selectproject.collaborators.map((collaborator) => {
                            return (
                              <h5>{collaborator}</h5>
                            );
                          })}
                        </div>  
                        <div className={styles.content_details_element}>
                          <h4>Duration</h4>
                          <br></br>

                          <h5>{selectproject.duration}</h5>
                        </div>  
                        <div className={styles.content_details_element}>
                          <h4>Tools</h4>
                          <br></br>
                          {selectproject.tools.map((tool) => {
                            return (
                              <h5>{tool}</h5>
                            );
                          })}
                        </div> 
                        <div className={styles.content_details_element}>
                          <h4>Link</h4>
                          <br></br>
                          {selectproject.links.map((linkinfo) => {
                            return (
                              <a href={linkinfo.link} target="_blank">  <h5>{linkinfo.linktype}</h5> </a>
                            );
                          })}
                        </div>  
                      </div>
                      <hr className={styles.divider}></hr>
                      <div className={styles.content_details_description}>
                        <p>{selectproject.description}</p>
                      </div>
                      <div className={styles.content_gallery}>
                        {selectproject.gallery.map((image) => {
                          return (
                            <div className={styles.content_gallery_image}>

                              <h5>{image.imagetitle}</h5>
                              <img src={getImageUrl(image.imageSrc)} />
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