import React, { Fragment } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Bread from './Bread';

const Aboutme = () =>  {
		return (
			<Fragment>
			
				<div id="fh5co-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
		                  <h2>About Me</h2>
		                </div>
		              </div>
		              <div className="row">
		                <div className="col-md-4">
		                  <ul className="info">
		                    <li><span className="first-block">Full Name:</span><span className="second-block">Louie Jie Mahusay</span></li>
		                    <li><span className="first-block">Phone:</span><span className="second-block">+ 1235 2355 98</span></li>
		                    <li><span className="first-block">Email:</span><span className="second-block">info@yoursite.com</span></li>
		                    <li><span className="first-block">Website:</span><span className="second-block">www.yoursite.com</span></li>
		                    <li><span className="first-block">Address:</span><span className="second-block">198 West 21th Street, Suite 721 New York NY 10016</span></li>
		                  </ul>
		                </div>
		                <div className="col-md-8">
		                  
		                  <h2><ReactTypingEffect
		                        text="Welcome User!"
		                      /></h2>
		                  <p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p>
		                  <p>Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
		                  <p>
		                    <ul className="fh5co-social-icons">
		                      <li><a href="#"><i className="icon-twitter2"></i></a></li>
		                      <li><a href="#"><i className="icon-facebook3"></i></a></li>
		                      <li><a href="#"><i className="icon-linkedin2"></i></a></li>
		                      <li><a href="#"><i className="icon-dribbble2"></i></a></li>
		                    </ul>
		                  </p>
		                </div>
		              </div>
		            </div>
		          </div>
			</Fragment>
		);
}

export default Aboutme