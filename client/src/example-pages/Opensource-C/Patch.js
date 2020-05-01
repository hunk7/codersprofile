import React, { Fragment } from 'react';
import Patchcode from './Patchcode';

const Patch = () =>  {
		return (
			<Fragment>
				<div id="fh5co-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
		                  <h2>Patch Code</h2>
		                </div>
		              </div>
		              <div className="row">
		                <div className="col-md-12">
		                  <ul className="info">
		                    <li><span className="first-block">Patch Name:</span><span className="second-block">webpack.prod.js </span></li>
		                    <li><span className="first-block">language:</span><span className="second-block">https://Patch.com/~denim-vine-crayon</span></li>
		                    <li><span className="first-block">link:</span><span className="second-block">https://denim-vine-crayon.Patch.me</span></li>
		                    <li><span className="first-block">Short Desc:</span><span className="second-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repudiandae earum eum unde et aperiam!</span></li>
		                  </ul>
		                </div>
		              </div>
		              <div className="row">
		                <div className="col-md-12">
		                  <h2><kbd>webpack.prod.js</kbd></h2>
		                  <Patchcode />
		                </div>
		              </div>
		            </div>
		          </div>
			</Fragment>
		);
}

export default Patch