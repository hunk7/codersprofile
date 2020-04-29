import React,  { Fragment, useState } from 'react';
import { Row, Col } from 'reactstrap';
import ReactTypingEffect from 'react-typing-effect';
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link , useHistory } from 'react-router-dom';
import '../../assets/Profile/css/animate.css'
import '../../assets/Profile/css/style.css'

import { 
  Card,
  InputGroupText,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter, Button, UncontrolledTooltip, Badge } from 'reactstrap';

const LandingPage = (props) => {

  const history = useHistory();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [modal4, setModal4] = useState(false);
  const toggle4 = () => setModal4(!modal4);
  const [modal5, setModal5] = useState(false);
  const toggle5 = () => setModal5(!modal5);

  const PostData = (props) => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        M.toast({html: "Invalid Email Address"})
        return
    }
    fetch("/signup",
    {
      method:"Post",
      headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name,
        email,
        password
      }) 
  }).then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({html: data.error})
        } else {
          M.toast({html: data.message})
        }
      }).catch(err => {
        console.log(err)
      })
} 

    const GetData = (props) => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        M.toast({html: "Invalid Email Address"})
        return
    }
    fetch("/signin",
    {
      method:"Post",
      headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        email,
        password
      }) 
  }).then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log(data.error)
          M.toast({html: data.error})
        } else {

          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          M.toast({html:'Loged In Successfully'})
          history.push('/Feed');
        }
      }).catch(err => {
        console.log(err)
      })
} 

  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div className="bg-composed-wrapper--bg opacity-2" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <div className="container pb-5">    
              <Row>
                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <Badge
                      pill
                      color="info"
                      className="px-4 text-uppercase bg-secondary text-black-50 h-auto py-1"
                      id="ProjVersion123">
                      Version
                    </Badge>
                    <UncontrolledTooltip
                      placement="top"
                      target="ProjVersion123">
                      Version: 1.1.0
                    </UncontrolledTooltip>
                    <div className="px-4 px-sm-0 text-black-100 mt-4">
                      <ReactTypingEffect className="display-2 mb-5 font-size-xl"
                        text="Codersprofile!"
                      />
                      <p className="font-size-xl text-black-100 mb-3">
                        This admin template is the perfect lite solution for
                        building React powered applications !!!
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      
                      <div>
                        <Button
                          tag={Link}
                          to="/Profile"
                          size="lg"
                          color="first"
                          className="btn bg-secondary border-dark text-black-50 p-3"
                          title="View Bamburgh React Admin Dashboard with Reactstrap Free Live Preview">
                          <span className="btn-wrapper--label p-1">Profile</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button> 
                        <Button color="first" size="lg" className="btn bg-secondary border-dark text-black-50" onClick={toggle5}>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'user']}
                            />
                          </span>
                          <span className="btn-wrapper--label p-1">
                            SIGN IN
                          </span>
                        </Button>
                        <Button color="first" size="lg" className="btn bg-secondary border-dark text-black-50" onClick={toggle4}>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'external-link-alt']}
                            />
                          </span>
                          <span className="btn-wrapper--label p-1">
                            SIGN UP
                          </span>
                        </Button>          
                      </div>
                      <small className="d-block pt-4 text-black-100">
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
                  <span className="btn-wrapper--label p-1">github</span>
                </Button>
                <Button color="google" className="ml-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'google']} />
                  </span>
                  <span className="btn-wrapper--label p-1">google</span>
                </Button>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <form>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'user']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </FormGroup>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['far', 'envelope']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </FormGroup>
                
                <div className="text-center">
                  <Button color="second" className="mt-4" onClick={() => PostData()}>
                    Sign up
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
                  <span className="btn-wrapper--label p-1">github</span>
                </Button>
                <Button color="google" className="ml-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'google']} />
                  </span>
                  <span className="btn-wrapper--label p-1">google</span>
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
                    <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                  <Button color="second" className="mt-4" onClick={() => GetData()}>
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

