import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../../assets/Profile/css/animate.css'
import '../../assets/Profile/css/style.css'
import Footer from '../Profile/Footer';
import Bread from '../Profile/Bread';

const CreatePost = () =>  {
		return (
			<Fragment>
			<div id="page"> 
			  <Bread />		
				<div id="fh5co-consult">
	              <div className="choose animate-box col-md-12 text-center">
	                <h2>Create Post</h2>
	                <form action="#">
	                  <div className="row form-group justify-content-center">
	                    <div className="col-md-6 text-center">
	                      <input type="text" id="fname" className="form-control text-center" placeholder="Your firstname" />
	                    </div>
	                  </div>
	                  <div className="row form-group justify-content-center">
	                    <div className="col-md-6">
	                      <input type="text" id="lname" className="form-control text-center" placeholder="Your lastname" />
	                    </div>
	                  </div>

	                  <div className="row form-group justify-content-center">
	                    <div className="col-md-6">
	                      <input type="text" id="email" className="form-control text-center" placeholder="Your email address" />
	                    </div>
	                  </div>

	                  <div className="row form-group justify-content-center">
	                    <div className="col-md-6">
	                      <input type="text" id="subject" className="form-control text-center" placeholder="Your subject of this message" />
	                    </div>
	                  </div>

	                  <div className="row form-group justify-content-center">
	                    <div className="col-md-6">
	                      <textarea name="message" id="message" cols="30" rows="10" className="form-control text-center" placeholder="Say something about us" />
	                    </div>
	                  </div>
	                  <div className="form-group justify-content-center">
	                    <input type="submit" value="Send Message" className="btn btn-primary"  />
	                  </div>

	                </form> 
	              </div>
	            </div> 
	           </div>
		      <Footer />
			</Fragment>
		);
}

export default CreatePost