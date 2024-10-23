import React, { useEffect } from "react";
import { getImageUrl, getLoremIpsum } from "../../../utils";
import styles from "./ProjectPage.module.css";

import { useState, useCallback, useId } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { client } from "../../SupabaseClient.js";

Number.prototype.mod = function (n) {
  "use strict";
  return ((this % n) + n) % n;
};

export const ProjectPage = () => {
  const location = useLocation();

  const [project, setProject] = useState(
    JSON.parse(localStorage.getItem("selectedProject"))
  );
  const [allProjects, setAllProjects] = useState(
    JSON.parse(localStorage.getItem("allProjects"))
  );
  const [images, setImages] = useState([]);

  const index = allProjects.findIndex((a) => a.id === project.id);
  const CDNURL =
    "https://pxggcbphlowxbpmwnicn.supabase.co/storage/v1/object/public/Portfolio/Projects/";
  const length = allProjects.length;
  const prev = allProjects[(index - (1 % length) + length) % length];
  const next = allProjects[(index + (1 % length) + length) % length];

  async function getImages() {
    const { data, error } = await client.storage
      .from("Portfolio")
      .list(`Projects/${project.title}`, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    console.log("Get Images");

    console.log("Data:", data);

    if (data !== null) {
      setImages(data);
      console.log(data);
    } else {
      alert("Error loading images");
      console.log(error);
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <section className={styles.container} id="projects">
      <div className={styles.header}>
        <Link to="/" className={styles.link}>
          {" "}
          <img
            className={styles.logo}
            src={getImageUrl("images/Logo_Finished_Light.webp")}
            alt={` Logo`}
          />{" "}
        </Link>

        {/* <div>
          <Link
            className={styles.link}
            key={prev.title}
            to={`/projects/${prev.title}`}
            aria-label={`Link to project ${prev.title} page`}
            state={{ project: prev, projects: allProjects }}
            onAuxClick={() => {
              localStorage.setItem("selectedProject", JSON.stringify(prev));
            }}
            onClick={() => {
              window.scroll(0, 0);
              localStorage.setItem("selectedProject", JSON.stringify(prev));
            }}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </Link>
          <Link
            className={styles.link}
            key={next.title}
            to={`/projects/${next.title}`}
            aria-label={`Link to project ${next.title} page`}
            state={{ project: next, projects: allProjects }}
            onAuxClick={() => {
              localStorage.setItem("selectedProject", JSON.stringify(next));
            }}
            onClick={() => {
              window.scroll(0, 0);
              localStorage.setItem("selectedProject", JSON.stringify(next));
            }}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </Link>
        </div> */}
        <div>
          <Link to="/#projects" className={styles.link}>
            <FontAwesomeIcon icon={faXmark} />{" "}
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.content}>
          <div
            className={styles.content_maindisplay}
            style={
              project.maindisplay === null
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <iframe src={project.maindisplay}></iframe>
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
                        return <h5>{collaborator}</h5>;
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
                        return <h5>{tool}</h5>;
                      })}
                    </li>
                    <li
                      className={styles.content_details_element}
                      style={
                        project.tags === null
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    >
                      <h4>Tags</h4>
                      <br></br>

                      {project.tags?.map((tag) => {
                        return <h5>{tag}</h5>;
                      })}
                    </li>
                    <li
                      className={styles.content_details_element}
                      style={
                        project.links === null
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    >
                      <h4>Link</h4>
                      <br></br>

                      {project.links?.map((linkinfo) => {
                        return (
                          <a
                            href={linkinfo.link}
                            target="_blank"
                            className={styles.siteLink}
                          >
                            {" "}
                            <h5>{linkinfo.linktype}</h5>{" "}
                            <FontAwesomeIcon icon={faCaretRight} />
                          </a>
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
                  {/* {project.gallery.map((image) => {
                    return (
                      <div className={styles.content_gallery_image}>
                        <h5>{image.imagetitle}</h5>
                        <img
                          alt={`${image.imageSrc}`}
                          src={getImageUrl(project.imgdir + image.imageSrc)}
                        />
                        <p>{image.imageText}</p>
                      </div>
                    );
                  })} */}
                  {images !== undefined ? (
                    images
                      .filter((image) => !image.name.includes("Logo"))
                      .map((image) => {
                        console.log(`${CDNURL}${project.title}/${image.name}`);
                        return (
                          <div className={styles.content_gallery_image}>
                            <img
                              alt={`${image.imageSrc}`}
                              src={`${CDNURL}${project.title}/${image.name}`}
                            />
                            <p>{image.imageText}</p>
                          </div>
                        );
                      })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
