import React from 'react';
import { Container , Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody , ListGroup, ListGroupItem , Badge  } from 'reactstrap';

const Containers = (props) => {
  return (
    <>
		 <Container className="themed-container" fluid={true}>
		 	<CardColumns>
	      <Card>
	        <CardBody>
	          <CardTitle>Card title</CardTitle>
	          	<ListGroup>
			      <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
			      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
			      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
			      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
			      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
			    </ListGroup>
	        </CardBody>
	      </Card>

	      <Card>
	      <CardBody>
	          <CardTitle>Card title</CardTitle>
	          	<ListGroup>
			      <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
			      <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
			      <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
			    </ListGroup>
	        </CardBody>
	      </Card>
	      <Card>
	        <CardBody>
	          <CardTitle>Card title</CardTitle>
	          	<ListGroup>
			      <ListGroupItem color="success" tag="a" href="#">Cras justo odio</ListGroupItem>
			      <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
			      <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
			      <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
			    </ListGroup>
	        </CardBody>
	      </Card>

	      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
	        <CardTitle>Special Title Treatment</CardTitle>
	        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
	        <Button>Button</Button>
	      </Card>

	      <Card>
	        <CardBody>
	          <CardTitle>Card title</CardTitle>
	          <CardSubtitle>Card subtitle</CardSubtitle>
	          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
	          <Button>Button</Button>
	        </CardBody>
	      </Card>

	      <Card body inverse color="primary">
	        <CardTitle>Special Title Treatment</CardTitle>
	        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
	        <Button color="secondary">Button</Button>
	      </Card>

		 </CardColumns>
		 </Container>
    </>
  );
}

export default Containers;