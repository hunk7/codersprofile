import React, { Fragment } from 'react';
import {PrismCode} from "./PrismCode"

const code = `
import React,  { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Hire from '../Profile/Hire';
import Footer from '../Profile/Footer';
import Bread from '../Profile/Bread';

import ProjectAbout from './ProjectAbout';
import ProjectImages from './ProjectImages';
import Demo from './Demo';

import '../../assets/Profile/css/style.css';
import '../../assets/Profile/css/animate.css';

const Projector = () => {

  return (
    <Fragment>
        <div id="page"> 
          <Bread />
          <ProjectAbout />
          <ProjectImages />
          <Demo />
          <Hire />
          <Footer />
        </div>
    </Fragment>
  );
};

export default Projector;
`

const Demo = () =>  {
		return (
			<Fragment>
				 <PrismCode
				    code={code}
				    language="js"
				    plugins={["line-numbers"]}
				  />
			</Fragment>
		);
}

export default Demo