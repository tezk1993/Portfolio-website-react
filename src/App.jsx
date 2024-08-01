import styles from "./App.module.css"
import React from "react";
import { useRef,useEffect,useState } from "react";


import { useInView } from "react-intersection-observer";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { ProjectPage } from "./components/Projects/ProjectPage/ProjectPage";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Footer } from "./components/Footer/Footer";

import { createClient } from "@supabase/supabase-js";

import "@fontsource/roboto"

import '@fontsource/ostrich-sans/300.css';
import '@fontsource/ostrich-sans/400.css';
import '@fontsource/ostrich-sans/700.css';
import '@fontsource/ostrich-sans/900.css';
import ostrichSans300 from '@fontsource/ostrich-sans/files/ostrich-sans-latin-300-normal.woff2?url';
import ostrichSans400 from '@fontsource/ostrich-sans/files/ostrich-sans-latin-400-normal.woff2?url';
import ostrichSans700 from '@fontsource/ostrich-sans/files/ostrich-sans-latin-700-normal.woff2?url';
import ostrichSans900 from '@fontsource/ostrich-sans/files/ostrich-sans-latin-900-normal.woff2?url';


library.add(fab, faCheckSquare, faCoffee)
function App() {



  const [selected, setSelected] = useState(0)

  const toggle = (i) => {

      setSelected(i)

      if(selected === 0){
          console.log(newSelected);

      }

  }

  //#region Navbar ref functions

  
  const { ref: heroRef, inView: heroIsVisible, entry:heroentry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    if(heroentry && heroIsVisible){
      setSelected(0);
    }
  }, [heroentry,heroIsVisible]);


  const { ref: aboutRef, inView: aboutIsVisible, entry:aboutEntry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  useEffect(() => {
    if(aboutEntry && aboutIsVisible){
      setSelected(1);
    }
  }, [aboutEntry,aboutIsVisible]);


  const { ref: experienceRef, inView: experienceIsVisible, entry:experienceEntry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  useEffect(() => {
    if(experienceEntry && experienceIsVisible){
      setSelected(2);
    }
  }, [experienceEntry,experienceIsVisible]);


  const { ref: projectsRef, inView: projectsIsVisible, entry:projectsEntry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  useEffect(() => {
    if(projectsEntry && projectsIsVisible){
      setSelected(3);
    }
  }, [projectsEntry,projectsIsVisible]);


  //#endregion



 

  return (

    <div className={styles.App} >
      <link rel="preload" as="font" type="font/woff2" href={ostrichSans300} crossorigin/>
      <link rel="preload" as="font" type="font/woff2" href={ostrichSans400} crossorigin/>
      <link rel="preload" as="font" type="font/woff2" href={ostrichSans700} crossorigin/>
      <link rel="preload" as="font" type="font/woff2" href={ostrichSans900} crossorigin/>

      <Navbar toggle={toggle} selected={selected}/>  
      <Hero newref={heroRef}/>
      <About newref={aboutRef}/>
      <Experience newref={experienceRef}/>
      <Projects newref={projectsRef}/>
      <Footer />
    </div>
  )
}

export default App;
