import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import style from './styles/home.module.css';
import { fadeIn, staggerContainer } from '../utils/motion';

const Home = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <div className={style.container}>
      <p className={style.intro}>
        Hi, I&apos;m
        {' '}
        <motion.span variants={fadeIn('', '', 0.1, 1)} className={style.name}>
          Abulimiti Musitapa
        </motion.span>
      </p>
      <p className={style.intro}>
        You can call me
        {' '}
        <motion.span variants={fadeIn('', '', 0.3, 1)} className={style.name}>
          Mustafa
        </motion.span>
      </p>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.desc}>
        I am a software engineering specialist
      </motion.p>
      <motion.button
        variants={fadeIn('', '', 0.6, 1)}
        className={style.btn_container}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <span className={style.btn_hover}>
          Check out my work!
        </span>
        <span className={style.btn}>
          Check out my work!
        </span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>

      {/* Add the new button below */}
      <motion.button
        variants={fadeIn('', '', 0.8, 1)} // Adjust animation delay
        className={style.btn_container}
        onClick={() => {
            window.location.href = '/#work'; // Example: Redirect to the "About" section
          
        }}
      >
        <span className={style.btn_hover}>
        View my projects
        </span>
        <span className={style.btn}>
        View my projects
        </span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
      {/* Add the new button below */}
      <motion.button
        variants={fadeIn('', '', 0.8, 1)} // Adjust animation delay
        className={style.btn_container}
        onClick={() => {
            window.location.href = 'https://drive.google.com/file/d/1Azz4XKCUJIvEEuBedZ6y-tAe0Csfs9r_/view?usp=sharing'; // Example: Redirect to the "About" section
        }}
      >
        <span className={style.btn_hover}>
        resume
        </span>
        <span className={style.btn}>
        resume
        </span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
    </div>
  </motion.section>
);

export default Home;
