import React, {useState} from 'react';
import styles from "./AccordionItem.module.css"

export const AccordionItem = ({project: {title,imageSrc,description,skills,demo,source}, onIncrement}, props) => {

    
  return (
        <div className={styles.item}>
            <div className={styles.title} onClick= {onIncrement(props.id)}>
                <h2>{title}</h2> 
                <span>{props.selected === props.id? '-' : '+'}</span>
            </div>
            <div id={styles.tab} className={props.selected === props.id ? styles.opened : styles.collapsed}>
                {description} 
            </div>
        </div>  
    )
}
