import React, { Fragment } from 'react';

const Following = () =>  {
		return (
			<Fragment>
				<div id="fh5co-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-3">
		                  <ul className="info">
		                    <li><span className="first-block">Posts:</span><span className="second-block">45</span></li>
		                  </ul>
		                </div>
		                <div className="col-md-4">
		                  <ul className="info">
		                    <li><span className="first-block">Followers:</span><span className="second-block">234</span></li>
		                  </ul>
		                </div>
		                <div className="col-md-5">
		                  <ul className="info">
		                    <li><span className="first-block">Following:</span><span className="second-block">523</span></li>
		                  </ul>
		                </div>
		              </div>
		            </div>
		          </div>
			</Fragment>
		);
}

export default Following