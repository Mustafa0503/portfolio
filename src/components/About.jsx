import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/mustafa-abulmit-66960824b/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Abulimiti Musitapa (Mustafa),
        </a>
        {' '}
        Passionate Software Engineering Specialist dedicated to crafting innovative and impactful software solutions. When I'm not developing software, I enjoy playing basketball, hitting the gym, diving into video games, and indulging in movies, blending my love for technology with an active and creative lifestyle.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
      My passion for software development began in high school, where I consistently earned high-achievement awards. At the University of Toronto, I have further honed my skills in computer science through rigorous coursework and co-op experiences. My journey is driven by a commitment to innovation and excellence in software engineering. I am deeply passionate about the open-source community, where knowledge and resources are freely accessible to everyone. I thrive on collaborating with others, contributing to projects, and leveraging the open nature of technology to foster collective progress and innovation. 
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
      Open to new opportunities—let's connect and create something great together!
        {' '}
        <a
          href="https://drive.google.com/file/d/1DoEBN8G1LRMEI4iAdHiZrI6fqXDtfS8t/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
