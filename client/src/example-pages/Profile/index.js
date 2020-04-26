import React,  { Fragment } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-router-dom';
import Bio from './Bio';
import Aboutme from './Aboutme';
import Resume from './Resume';
import Skills from './Skills';
import Features from './Features';
import Projects from './Projects';
import Certification from './Certification';
import Hire from './Hire';
import FooterContact from './FooterContact';
import Footer from './Footer';
import Bread from './Bread';

import hero9 from '../../assets/images/hero-bg/hero-4.jpg';
import '../../assets/Profile/css/style.css';
import '../../assets/Profile/css/animate.css';

const Profile = () => {

  return (
    <Fragment>
        <div id="page"> 
          <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{ backgroundImage: 'url(' + hero9 + ')'}} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-0 text-center">
                      <div className="display-t js-fullheight">
                        <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                          <div className="profile-thumb" style={{ backgroundImage: 'url(' + hero9 + ')'}}></div>
                          <h1><span>Ganesh Bhadra</span></h1>
                          <h3><span>Web Developer / Photographer</span></h3>
                          <p>
                            <ul className="fh5co-social-icons">
                              <li><a href="#"><i className="icon-twitter2"></i></a></li>
                              <li><a href="#"><i className="icon-facebook2"></i></a></li>
                              <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                              <li><a href="#"><i className="icon-dribbble2"></i></a></li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
          <Bread />
          <Aboutme />
          <Bio />
          <Resume />
          <Features />
          <Skills />
          <Certification />
          <Projects />
          <Hire />
          <FooterContact /> 
          <Footer />
        </div>
    </Fragment>
  );
};

export default Profile;