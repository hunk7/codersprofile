import React, { Fragment } from 'react';
import Bread from './Bread';

const Footer = () =>  {
		return (
			<Fragment>
				<Bread />
				<div id="fh5co-footer">
	              <div className="container">
	                <div className="row">
	                  <div className="col-md-12 col-md-offset-0 text-center">
	                    <p>&copy; 2020 Ganesh Bhadra. All Rights Reserved. <br />Designed by <a href="http://freehtml5.co" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.com" target="_blank">Unsplash</a></p>
	                  </div>
	                </div>
	              </div>
	            </div>

	            <div className="gototop js-top">
	              <a href="#" className="js-gotop"><i className="icon-arrow-up22"></i></a>
	            </div>
			</Fragment>
		);
}

export default Footer