import React from 'react'
import Image from "next/image";
import styles from './Projects.module.css'

//import projectsData
import {projectsData} from '../../data'

export default function Projects() {

const {images} = projectsData;

  return (
    <section className={styles.services_sec} >
        <h2 className={styles.projects_h3}>Nos Projets</h2>
      <div className={styles.projects_images_content}>
        {images.map((image, i) => {
          return (
            <div className={styles.box} key={i}>
              <div className={styles.iconBx}>
                <Image width={300}  height={300} src={image.src}/> 
              </div>
          </div>
          )}  )
          }
          </div>
            
    </section>

)}
