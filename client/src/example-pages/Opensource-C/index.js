import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../../assets/Profile/css/animate.css'
import '../../assets/Profile/css/style.css'
import Footer from '../Profile/Footer';
import Bread from '../Profile/Bread';
import PackagejsonContainer from './PackagejsonContainer';
import Glitch from './Glitch';
import Patch from './Patch';
import Links from './Links';


const OpensourceC = () =>  {
		return (
			<Fragment>
				<Bread />		
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
		                <div className="col-md-4">
		                  <ul className="info">
		                    <li><span className="first-block">Following:</span><span className="second-block">523</span></li>
		                  </ul>
		                </div>
		                <div className="col-md-1">
		                  <Button
                          tag={Link}
                          to="/CreatePost"
                          size="sm"
                          color="first"
                          className="btn bg-secondary border-dark text-black-50 p-3">
                          <span className="btn-wrapper--label"></span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
		                </div>
		              </div>
		              <br />
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
		                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aliquam, cupiditate cumque quos inventore corporis nesciunt veniam cum ab beatae eveniet ducimus temporibus optio velit eligendi atque repudiandae quod minus laudantium repellendus delectus ea ex quia pariatur! Rerum minus debitis officia mollitia architecto neque quas iste, tempora, consectetur quo unde! </p>
		                  <p> korem50</p>
		                    <ul className="fh5co-social-icons">
		                      <li><a href="#"><i className="icon-twitter2"></i></a></li>
		                      <li><a href="#"><i className="icon-facebook3"></i></a></li>
		                      <li><a href="#"><i className="icon-linkedin2"></i></a></li>
		                      <li><a href="#"><i className="icon-dribbble2"></i></a></li>
		                    </ul>
		                </div>
		              </div>
		            </div>
		          </div>
		        <Links />
		        <PackagejsonContainer />
		        <Glitch />
		        <Patch />
		        <Footer />
			</Fragment>
		);
}

export default OpensourceC