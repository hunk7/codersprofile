import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Bread = (props) => {
  return (
    <div className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center">
          <br /><br /><br />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag={Link} to="/Feed">Feed</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/Profile">Profile</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/Achievements">Achievements</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/Creator">Creator</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/Application">Application</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/LanguagePages">LangPages</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/OpensourceC">OpensourceC</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/Projector">Projector</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/Setting">Setting</BreadcrumbItem>
                <BreadcrumbItem tag={Link} to="/LandingPage">SignOut</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bread;