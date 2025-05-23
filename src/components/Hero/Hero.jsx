import React, { useState, useEffect } from "react";
import styles from "../Hero/Hero.module.css";
import { getImageUrl } from "../../utils";
import { getLoremIpsum } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typewriter } from "../Animations/Typewriter";

export const Hero = ({ newref }) => {
  return (
    <section ref={newref} className={styles.container} id="hero">
      <div className={styles.sidebar}>
        <img
          className={styles.logo}
          src={getImageUrl("images/Logo_Finished_Light.webp")}
          alt={` Logo`}
        />
        <ul className={styles.links}>
          <li className={styles.link}>
            <a
              href={getImageUrl("Dennis_Schau_Andersen_Resume.pdf")}
              target="_blank"
              alt="Resumme"
              aria-label="Link to resume"
            >
              <i className={"fa-solid fa-file"} />
              {/* <p>My Resume</p> */}
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="mailto:@dennis.schaua@gmail.com"
              target="_blank"
              aria-label="Link to email"
            >
              <i className={"fa-solid fa-envelope"} />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://www.linkedin.com/in/dschaua/"
              target="_blank"
              aria-label="Link to linkedin page"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
          </li>

          <li className={styles.link}>
            <a
              href="https://bsky.app/profile/dschaua.bsky.social"
              target="_blank"
              aria-label="Link to Twitter page"
            >
              <FontAwesomeIcon icon="fa-brands fa-bluesky" />
            </a>
          </li>

          <li className={styles.link}>
            <a
              href="https://dschaua.itch.io"
              target="_blank"
              aria-label="Link to Itch page"
            >
              <FontAwesomeIcon icon="fa-brands fa-itch-io" />
            </a>
          </li>

          <li className={styles.link}>
            <a
              href="https://github.com/tezk1993"
              target="_blank"
              aria-label="Link to github page"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.content}>
        <Typewriter
          className={styles.title}
          id={styles.firstname}
          text="Dennis"
          speed={100}
          delay={200}
        />
        <Typewriter
          className={styles.title}
          id={styles.middlename}
          text="Schau"
          speed={100}
          delay={250}
        />
        <Typewriter
          className={styles.title}
          id={styles.lastname}
          text="Andersen"
          speed={100}
          delay={300}
        />
        <h3 className={styles.description}>
          Game developer, Web Developer and Dungeon Master
        </h3>
      </div>
    </section>
  );
};
