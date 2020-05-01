import React, { Fragment } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Packagejson from './Packagejson';
import Readme from './Readme';

const PackagejsonContainer = () =>  {
		return (
			<Fragment>
			
				<div id="fh5co-about" className="animate-box">
		            <div className="container">
		            	<div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
		                  <h2>Repositories</h2>
		                </div>
		              </div>
		              <div className="row">
		                <div className="col-md-12">
		                  <ul className="info">
		                    <li><span className="first-block">Title:</span><span className="second-block">Louie Jie Mahusay</span></li>
		                    <li><span className="first-block">Author:</span><span className="second-block">+ 1235 2355 98</span></li>
		                    <li><span className="first-block">Type:</span><span className="second-block">info@yoursite.com</span></li>
		                    <li><span className="first-block">languages:</span><span className="second-block">info@yoursite.com</span></li>
		                    <li><span className="first-block">License:</span><span className="second-block">info@yoursite.com</span></li>
		                    <li><span className="first-block">web:</span><span className="second-block">info@yoursite.com</span></li>
		                    <li><span className="first-block">Description:</span><span className="second-block">www.yoursite.com</span></li>
		                    <li><span className="first-block">Repo Link:</span><span className="second-block">github.pages.io/taracota/army</span></li>
		                    <li><span className="first-block">Git Clone:</span><span className="second-block">info@yoursite.com</span></li>

		                  </ul>
		                </div>
		              </div>

		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
		                  <h2></h2>
		                </div>
		              </div>
		              <div className="row">
		                <div className="col-md-12">
		                  
		                  <h2>License</h2>
		                  <Readme />
		                </div>
		              </div>
		              <div className="row">
		                <div className="col-md-12">
		                  
		                  <h2>Package.json</h2>
		                  <Packagejson />
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

export default PackagejsonContainer