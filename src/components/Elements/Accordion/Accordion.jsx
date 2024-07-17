import { getLoremIpsum } from '../../../utils'
import styles from "./Accordion.module.css"
import React, {useState} from 'react';
import { getImageUrl } from '../../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Accordion = ({data}) => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
        return setSelected(null)
    }
    setSelected(i)
    
    }
  return (
    <div className={styles.wrapper}>
    <div className={styles.accordion}>
            {data.map((item, i) => (
                <div id={styles.item} className={selected=== i ? styles.itemopened : styles.itemcollapsed}   key={i} onClick={() => toggle(i)}>
                    <div className={styles.title} >
                        <div className={styles.organisation}> 
                            <h3>{item.organisation}</h3>
                            <div>
                                <p className={styles.dates}> {item.startDate}-{item.endDate}</p>
                                <h4>{item.role}</h4> 
                            </div>
                        </div>

                        <img
                            src={getImageUrl(item.imageSrc)}
                            alt={`${item.organisation} Logo` }
                            onError={({ currentTarget }) => 
                            {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="";
                            }}
                        />

                    </div>
                    <div id={styles.tab} className={selected=== i ? styles.opened : styles.collapsed}>
                        <ul>
                            {item.experiences.map((experience,i) =>{
                               return(
                                <li key={i}>
                                    <p>
                                        {getLoremIpsum(200)}
                                    </p>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    <span className={styles.caret}>{selected=== i ? <i className= "fas fa-caret-up" /> : <i className="fas fa-caret-down" />}</span>

                </div>
            ))}      
        </div>
    </div>

  )
}


// return (
//     <div className={styles.wrapper}>
//     <div className={styles.accordion}>
//             {data.map((item, i) => (
//                 <div className={styles.item}   key={i} >
//                     <div className={styles.title} onClick={() => toggle(i)}>
//                         <div className={styles.organisation}> 
//                             <img src={getImageUrl(item.imageSrc)} alt={`${item.organisation} Logo`}/>
//                             <h2>{item.organisation}</h2>
//                         </div>
//                         <div>
//                             <p className={styles.dates}> {item.startDate}-{item.endDate}</p>
//                             <h3>{item.role}</h3> 
//                             <span>{selected=== i ? '-' : '+'}</span>
//                         </div>
       
//                     </div>
//                     <div id={styles.tab} className={selected=== i ? styles.opened : styles.collapsed}>
//                         <ul>
//                             {item.experiences.map((experience,i) =>{
//                                return <li key={i}>{experience}</li>;
//                             })}
//                         </ul>
//                     </div>
//                 </div>
//             ))}      
//         </div>
//     </div>

//   )
// }

