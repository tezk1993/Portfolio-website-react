import React, {useState} from 'react';
import styles from "./Navbar.module.css";

import { getImageUrl } from "../../utils";

export const Navbar = ({toggle,selected}) => {

      
  return (
    
    <nav className={styles.navbar}>
        
        <div className={styles.menu}>
            <ul className={styles.menuItems}> 
                <li>

                    <a href='#hero' onClick={() => toggle(0)} >
                        <h4 id={styles.itemtext}  className={selected === 0 ? styles.shown : styles.hidden}>Hero</h4>
                        <div id={styles.square} className={selected === 0 ? styles.selected : styles.unselected}></div>
                    </a>
                </li>
                <li>
                    <a href='#about' onClick={() => toggle(1)} >
                        <h4 id={styles.itemtext}  className={selected === 0 ? styles.shown : styles.hidden}>About</h4>
                        <div id={styles.square} className={selected === 1 ? styles.selected : styles.unselected}></div>
                    </a>
                </li>
                <li>
                    <a href='#experience' onClick={() => toggle(2)} >
                        <h4 id={styles.itemtext} className={selected === 0 ? styles.shown : styles.hidden}>Experience</h4>
                        <div id={styles.square} className={selected === 2 ? styles.selected : styles.unselected} ></div>
                    </a>
                </li>
                <li>
                    <a href='#projects' onClick={() => toggle(3)} >
                        <h4 id={styles.itemtext}  className={selected === 0 ? styles.shown : styles.hidden}>Projects</h4>
                        <div id={styles.square} className={selected === 3 ? styles.selected : styles.unselected}></div>
                    </a>
                </li>


            </ul>


     

        </div>
    </nav>
  )
}
