import React, { Fragment , useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { addDays } from 'date-fns';
import { Button , ButtonGroup, Card, CardTitle, CardText, Row, Col ,
  InputGroupText,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter , Label } from 'reactstrap';
import { DateRange } from 'react-date-range';
import '../../assets/Profile/css/animate.css'
import '../../assets/Profile/css/style.css'

 const DetailsHondaCivic = (props) =>  {

	const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");

	const [modal5, setModal5] = useState(false);
  	const toggle5 = () => setModal5(!modal5);

  	const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  	]);

  	const GetData = () => {

  	}

		return (
			<Fragment>
				<div id="fh5co-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center fh5co-heading">
		                  <h2>Honda Civic Details</h2>
		                  <ButtonGroup size="lg">
							<Button
	                          tag={Link}
	                          to="/Dashboard"
	                          size="lg"
	                          title="Dashboard">Dashboard
	                        </Button>
							  <Button onClick={toggle5}>Book</Button>
						  </ButtonGroup>
		                </div>
		              </div>
		              <div className="row">
		                <Col sm="4">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Color:</span><span className="second-block"> White</span></li>
			                  </ul>
					        </Card>
					      </Col>
		                <Col sm="4">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Fuel Type:</span><span className="second-block">Petrol | 1799 CC </span></li>
			                  </ul>
					        </Card>
					      </Col>
					      <Col sm="4">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Model:</span><span className="second-block">Sedan EX-L</span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		              <br />
		              <div className="row">
		                <Col sm="4">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Number:</span><span className="second-block">VC 34 AL 7643 </span></li>
			                  </ul>
					        </Card>
					      </Col>
		                <Col sm="4">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Capacity:</span><span className="second-block">5 Seater</span></li>
			                  </ul>
					        </Card>
					      </Col>
					      <Col sm="4">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">5000 Rs / Day</span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		              <br />
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Description:</span><span className="second-block"> The standard safety features in Civic include Seat Belt Warning, Airbags, Dual-Stage Airbags, Pretensioning Seatbelts, Four-Point Seatbelt, Middle Rear Head Rest, Middle rear three-point seatbelt, Tyre Pressure Monitoring System (TPMS), Child Seat Anchor Points and Airbags. </span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		            </div>
		          </div>
			</Fragment>
		);
}

export default DetailsHondaCivic