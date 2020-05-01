import React,  { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Hire from '../Profile/Hire';
import Footer from '../Profile/Footer';
import Bread from '../Profile/Bread';

import ProjectAbout from './ProjectAbout';
import ProjectImages from './ProjectImages';
import Demo from './Demo';
import DemoContainer from './DemoContainer';
import SegmentExplanation from './SegmentExplanation';
import Links from './Links';

import '../../assets/Profile/css/style.css';
import '../../assets/Profile/css/animate.css';

const Projector = () => {

  return (
    <Fragment>
        <div id="page"> 
          <Bread />
          <Links />
          <ProjectAbout />
          <ProjectImages />
          <DemoContainer />
          <SegmentExplanation />
          <Hire />
          <Footer />
        </div>
    </Fragment>
  );
};

export default Projector;