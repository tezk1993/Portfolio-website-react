import React from 'react'
import styles from "./ErrorPage.module.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
 
 var timeLeft = 10;

function countdown() {
    document.getElementById("seconds").innerHTML = String( "00:00:"+timeLeft );

  if(timeLeft< 10)
  {
    document.getElementById("seconds").innerHTML = String( "00:00:0"+timeLeft );
  }
	if (timeLeft > 0) {
    timeLeft--;

		setTimeout(countdown, 1000);
	}else{
    // navigate("/");

  }
};

setTimeout(countdown, 1000);
  return (
    <div className={styles.container}>   
      <div className={styles.content}>
          <h2  className={styles.title}>404</h2>
          
          <h3>Woops that page is gone</h3>
          <p>Well I'm just gonna send you back</p>
          <div id={styles.clock}>
            <span id='seconds'>00:00:10</span>
          </div>
          <Link className={styles.link} to={"/"}>Go back home</Link>
      </div>

    </div>
  )
}
