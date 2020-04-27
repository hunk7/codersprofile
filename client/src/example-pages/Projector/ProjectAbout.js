import React, { Fragment } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectAbout = () =>  {
		return (
			<Fragment>
			
				<div id="fh5co-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
		                  <h2>Php Mailer</h2>
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
		                  </ul>
		                </div>
		                <div className="col-md-8">
		                  
		                  <h2><ReactTypingEffect
		                        text="Short Description!"
		                      /></h2>
		                  <p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p>
		                  <p>Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
		                  
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

export default ProjectAbout