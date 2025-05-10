import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr />
      <div className={styles.containers}>
        <img
          className={styles.logo}
          src={getImageUrl("images/Logo_Finished_Light.webp")}
          alt={` Logo`}
        />
        <div className={styles.containerleft}>
          <div className={styles.version}>
            <div className={styles.label}>
              <p>v1.3.0</p>
            </div>
            <p>Last Updated 10-05-2025</p>
          </div>
        </div>
        <div className={styles.containerright}>
          <div className={styles.contact}>
            <ul className={styles.links}>
              <li className={styles.link}>
                <a href="https://www.linkedin.com/in/dschaua/" target="_blank">
                  <p>Linkedin</p>
                </a>
              </li>

              <li className={styles.link}>
                <a href="https://x.com/D_SchauA" target="_blank">
                  <p>Twitter</p>
                </a>
              </li>

              <li className={styles.link}>
                <a href="https://dschaua.itch.io" target="_blank">
                  <p>Itch.io</p>
                </a>
              </li>
              <li className={styles.link}>
                <a href="https://github.com/tezk1993" target="_blank">
                  <p>Github</p>
                </a>
              </li>
            </ul>
            <div className={styles.emailcontact}>
              <h4>Let's build something together.</h4>
              <a href="mailto:@dennis.schaua@gmail.com" target="_blank">
                <h6>dennis.schaua@gmail.com</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i> Copyright
          Dennis Schau Andersen
        </p>
        <p>icons by https://icons8.com/</p>
      </div>
    </div>
  );
};
