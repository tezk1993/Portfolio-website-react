import React, { Children, useState } from "react";
import styles from "./CertificateModal.module.css"
import { getImageUrl } from "../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


interface Props{
    children: JSX.Element;
}

export const CertificateModal = ({certificate}) => {

    const [showModal, setShowModal] = useState(false);
    const {institute,role,cert_dir} = certificate;
    const mediaQueryList = window.matchMedia("(max-width: 830px)");

    function handleShowModal(state) {
        console.log("handle modal click");
        if(mediaQueryList.matches){
            window.open(getImageUrl(cert_dir),"_blank");
        }else{
            setShowModal(state);
            if(state){
                document.body.style.overflow ="hidden";
            }else{
                document.body.style.overflow ='';
            }
        }
     
    }


  return (
    < >
       
        {
            showModal ?       
                <div  className={styles.modal}>
                    <button className={styles.closeButton} onClick={() => handleShowModal(false)}> <FontAwesomeIcon icon={faClose} /> </button>
                    <div className={styles.container}>
                       <img 
                            loading="lazy" 
                            src={getImageUrl(cert_dir)} 
                            alt={`Image of project `} 
                            className={styles.image} 
                        />
                       
                    </div>  
                </div>
                :  
            <></>
        }
        <div className={styles.certificate} onClick={() => handleShowModal(true)}>
            <li>
                <h4>
                    {role}
                </h4>
                <h5>
                    {institute}
                </h5>
            </li>
        </div>
    </>
  )
}
