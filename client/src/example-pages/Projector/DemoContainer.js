import React, { Fragment } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Demo from './Demo';

const DemoContainer = () =>  {
		return (
			<Fragment>
			
				<div id="fh5co-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
		                  <h2>Code Segment</h2>
		                </div>
		              </div>
		              <div className="row">
		                <div className="col-md-4">
		                  <ul className="info">
		                    <li><span className="first-block">Project Description:</span></li>
		                    <li><span className="first-block">Type:</span><span className="second-block">Git</span></li>
		                    <li><span className="first-block">Duration:</span><span className="second-block">6 weeks</span></li>
		                    <li><span className="first-block">Link:</span><span className="second-block">www.yoursite.com</span></li>
		                    <li><span className="first-block">Languages:</span><span className="second-block">JavaScript , npm , Node.js , React , MongoDB</span></li>
		                    <li><span className="first-block">Type:</span><span className="second-block">Git</span></li>
		                    <li><span className="first-block">Duration:</span><span className="second-block">6 weeks</span></li>
		                    <li><span className="first-block">Link:</span><span className="second-block">www.yoursite.com</span></li>
		                    <li><span className="first-block">Languages:</span><span className="second-block">JavaScript , npm , Node.js , React , MongoDB</span></li>
		                  </ul>
		                </div>
		                <div className="col-md-8">
		                  
		                  <h2><ReactTypingEffect
		                        text="Code Description!"
		                      /></h2>
		                  <p>
							<Demo />
		                  </p>
		                    <ul className="fh5co-social-icons">
		                      <li><a href="#"><span className="btn-wrapper--icon">
			                    <FontAwesomeIcon icon={['fab', 'github']} />
			                  </span></a></li>
			                  <li><a href="#"><FontAwesomeIcon icon="code" /></a></li>
			                  <li><a href="#"><FontAwesomeIcon icon="link" /></a></li>
			                  <li><a href="#"><FontAwesomeIcon icon="arrow-alt-circle-down" /></a></li>
		                    </ul>
		                  
		                </div>
		              </div>
		            </div>
		          </div>
			</Fragment>
		);
}

export default DemoContainer