import React from "react";
import { getImageUrl } from "../../utils";
import { getLoremIpsum } from "../../utils";
import styles from "./About.module.css";
import { Reveal } from "../Animations/Reveal/Reveal";

export const About = ({ newref }) => {
  const offer = {
    title: "Weeping Woman",
    artist: "Pablo Picasso",
    year: "1937",
    currentLocation: "Tate Gallery, London, UK",
    offerPrice: 23761,
  };

  return (
    <section className={styles.container} id="about">
      <div className={styles.header}>
        <div className={styles.sidebar}></div>
        <h2 ref={newref} className={styles.title}>
          About
        </h2>
      </div>

      <hr className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.aboutwrapper}>
          <div className={styles.abouttext}>
            <h3>I'm a developer from the cold and dreary Denmark</h3>

            <Reveal delay="0.5">
              <p>
                I have honed my skills across a broad range of technologies.
                <br />
                <br />
                I'm a versatile developer with expertise in design, UX, and
                implementation. I work on game development, XR experiences, web
                apps, and static sites. My focus is on creating engaging
                features and user-friendly interfaces, blending creativity with
                practical execution for robust solutions.
              </p>
            </Reveal>

            <Reveal delay="1">
              <p>
                Creativity is at the heart of my work.
                <br />
                <br />
                From designing engaging game mechanics and immersive AR/VR
                experiences to developing dynamic web applications, I strive to
                push the boundaries of conventional design. I enjoy creating
                systems that blend technical skill with innovative thinking,
                delivering solutions that are both functional and imaginative.
              </p>
            </Reveal>

            <Reveal delay="1.5">
              <p>
                I’m a passionate gamer who loves diving into new worlds and
                discussing game mechanics. Outside of coding, you’ll find me
                exploring indie games, reminiscing about classics like Ocarina
                of Time, or enjoying casual get-togethers with friends. I
                balance hard work with creativity and fun, always open to new
                experiences and adventures.
              </p>
            </Reveal>
          </div>
          <div className={styles.aboutimage}>
            <img
              src={getImageUrl("images/headshots/about_profile_image_1.webp")}
              alt="Picture of Dennis"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
