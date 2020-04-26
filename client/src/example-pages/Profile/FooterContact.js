import React, { Fragment } from 'react';

const FooterContact = () =>  {
		return (
			<Fragment>
				<div id="fh5co-consult">
	              <div className="choose animate-box">
	                <h2>Contact</h2>
	                <form action="#">
	                  <div className="row form-group">
	                    <div className="col-md-6">
	                      <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
	                    </div>
	                  </div>
	                  <div className="row form-group">
	                    <div className="col-md-6">
	                      <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
	                    </div>
	                  </div>

	                  <div className="row form-group">
	                    <div className="col-md-12">
	                      <input type="text" id="email" className="form-control" placeholder="Your email address" />
	                    </div>
	                  </div>

	                  <div className="row form-group">
	                    <div className="col-md-12">
	                      <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
	                    </div>
	                  </div>

	                  <div className="row form-group">
	                    <div className="col-md-12">
	                      <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us" />
	                    </div>
	                  </div>
	                  <div className="form-group">
	                    <input type="submit" value="Send Message" className="btn btn-primary"  />
	                  </div>

	                </form> 
	              </div>
	              <div className="choose animate-box">
	                <h2>Contact</h2>
	                <form action="#">
	                  <div className="row form-group">
	                    <div className="col-md-6">
	                      <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
	                    </div>
	                  </div>
	                  <div className="row form-group">
	                    <div className="col-md-6">
	                      <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
	                    </div>
	                  </div>

	                  <div className="row form-group">
	                    <div className="col-md-12">
	                      <input type="text" id="email" className="form-control" placeholder="Your email address" />
	                    </div>
	                  </div>

	                  <div className="row form-group">
	                    <div className="col-md-12">
	                      <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
	                    </div>
	                  </div>

	                  <div className="row form-group">
	                    <div className="col-md-12">
	                      <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us" />
	                    </div>
	                  </div>
	                  <div className="form-group">
	                    <input type="submit" value="Send Message" className="btn btn-primary"  />
	                  </div>

	                </form> 
	              </div>
	            </div>  
			</Fragment>
		);
}

export default FooterContact