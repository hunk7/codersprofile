import React,  { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Competitions from './Competitions';
import Challenges from './Challenges';
import Scores from './Scores';

import Skills from '../Profile/Skills';
import Certification from '../Profile/Certification';
import Hire from '../Profile/Hire';
import Footer from '../Profile/Footer';
import Bread from '../Profile/Bread';

import hero9 from '../../assets/images/hero-bg/hero-4.jpg';
import '../../assets/Profile/css/style.css';
import '../../assets/Profile/css/animate.css';

const Achievements = () => {

  return (
    <Fragment>
        <div id="page"> 
          <Bread />
          <Scores />
          <Challenges />
          <Competitions />
          <Skills />
          <Certification />
          <Hire />
          <Footer />
        </div>
    </Fragment>
  );
};

export default Achievements;