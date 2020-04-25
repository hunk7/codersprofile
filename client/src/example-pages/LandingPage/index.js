import React,  { Fragment, useState } from 'react';
import { Row, Col } from 'reactstrap';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import hero9 from '../../assets/images/hero-bg/hero-4.jpg';
import stock1 from '../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../assets/images/stock-photos/stock-3.jpg';
import { Spinner,
  Card,
  InputGroupText,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter, Button, UncontrolledTooltip, Badge } from 'reactstrap';

const LandingPage = () => {

  const [modal4, setModal4] = useState(false);
  const toggle4 = () => setModal4(!modal4);
  const [modal5, setModal5] = useState(false);
  const toggle5 = () => setModal5(!modal5);

  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-midnight-bloom min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-6"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg opacity-2" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <div className="container pb-5">
              <Row>
                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <Badge
                      pill
                      color="info"
                      className="px-4 text-uppercase h-auto py-1"
                      id="ProjVersion123">
                      Version
                    </Badge>
                    <UncontrolledTooltip
                      placement="top"
                      target="ProjVersion123">
                      Version: 1.1.0
                    </UncontrolledTooltip>
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <ReactTypingEffect className="display-2 mb-5 font-size-xl" style={{fontFamily: "Microsoft Himalaya"}}
                        text="Codersprofile!"
                      />
                      <p className="font-size-xl text-white-50 mb-3">
                        This admin template is the perfect lite solution for
                        building React powered applications !!!
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                        <Row>
                          <Col xl="4" lg="6">
                            <Card className="card-transparent mb-5">
                              <div className="card-img-wrapper">
                                <img src={stock1} className="card-img-top rounded" alt="..." />
                              </div>
                              <div className="card-body text-center">
                                <p className="card-text">
                                  Some quick example text to build on the card title and make up
                                  the bulk of the card's content.</p>
                                  <Button size="sm" outline color="first" className="btn-pill mt-1">
                                  View Details
                                </Button>
                              </div>
                            </Card>
                          </Col>
                          <Col xl="4" lg="6">
                            <Card className="card-transparent mb-5">
                              <div className="card-img-wrapper">
                                <img src={stock2} className="card-img-top rounded" alt="..." />
                              </div>
                              <div className="card-body text-center">
                                <p className="card-text">
                                  Some quick example text to build on the card title and make up
                                  the bulk of the card's content.
                                </p>
                                <Button size="sm" outline color="first" className="btn-pill mt-1">
                                  View Details
                                </Button>
                              </div>
                            </Card>
                          </Col>
                          <Col xl="4" lg="12">
                            <Card className="card-transparent mb-5">
                              <div className="card-img-wrapper">
                                <img src={stock3} className="card-img-top rounded" alt="..." />
                              </div>
                              <div className="card-body text-center">
                                <p className="card-text">
                                  Some quick example text to build on the card title and make up
                                  the bulk of the card's content.
                                </p>
                                <Button size="sm" outline color="first" className="btn-pill mt-1">
                                  View Details
                                </Button>
                              </div>
                            </Card>
                          </Col>
                        </Row>
                      <div>
                        <Button
                          tag={Link}
                          to="/DashboardDefault"
                          size="lg"
                          color="success"
                          className="d-block d-sm-inline-block"
                          title="View Bamburgh React Admin Dashboard with Reactstrap Free Live Preview">
                          <span className="btn-wrapper--label">Pro Dashboard</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button> 
                        <Button color="primary" size="lg" className="m-2" onClick={toggle5}>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'user']}
                            />
                          </span>
                          <span className="btn-wrapper--label">
                            SIGN IN
                          </span>
                        </Button>
                        <Button color="first" size="lg" className="m-2" onClick={toggle4}>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'external-link-alt']}
                            />
                          </span>
                          <span className="btn-wrapper--label">
                            SIGN UP
                          </span>
                        </Button>          
                      </div>
                      <small className="d-block pt-4">
                        For a comprehensive list of components &amp; commercial
                        licenses, we recommend the PRO version.
                      </small>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Modal zIndex={2000} centered isOpen={modal4} toggle={toggle4}>
        <div>
          <Card className="bg-secondary shadow-none border-0">
            <div className="card-header d-block bg-white pt-4 pb-5">
              <div className="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div className="text-center">
                <Button color="github" className="mr-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </span>
                  <span className="btn-wrapper--label">github</span>
                </Button>
                <Button color="google" className="ml-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'google']} />
                  </span>
                  <span className="btn-wrapper--label">google</span>
                </Button>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'user']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Name" type="text" />
                  </div>
                </FormGroup>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['far', 'envelope']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Email" type="email" />
                  </div>
                </div>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Password" type="password" />
                  </div>
                </FormGroup>
                
                <div className="text-center">
                  <Button color="second" className="mt-4">
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </Modal>
      <Modal zIndex={2000} centered isOpen={modal5} toggle={toggle5}>
        <div>
          <Card className="bg-secondary shadow-none border-0">
            <div className="card-header d-block bg-white pt-4 pb-5">
              <div className="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div className="text-center">
                <Button color="github" className="mr-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </span>
                  <span className="btn-wrapper--label">github</span>
                </Button>
                <Button color="google" className="ml-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'google']} />
                  </span>
                  <span className="btn-wrapper--label">google</span>
                </Button>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['far', 'envelope']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Email" type="email" />
                  </div>
                </div>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Password" type="password" />
                  </div>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheckLogin">
                    <span>Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button color="second" className="mt-4">
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </Modal>
    </Fragment>
  );
};

export default LandingPage;

