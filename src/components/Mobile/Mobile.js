import React, { Component } from 'react';

// Bootstrap
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Styling
import './Mobile.css';

// Routes
// import { BrowserRouter as Router, Link } from 'react-router-dom';

// API
import { MobileConsumer } from '../../api/ContextAPI';

// Checking Image
import m1 from '../../assets/img/m1.jpg';

export default class Mobile extends Component {
    render() {

        const { id, name, price, image, inCart } = this.props.product   ;

        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3">
                <MobileConsumer>
                    {(value) => (
                        <Card className="mobile-card text-center mx-auto px-auto" onClick={()=>{value.handleDetails(id)}} style={{ width: '17rem' }}>
                            <Card.Img className="mobile-image img-fluid mx-auto pt-3" variant="top" alt={ `${ name }` } src={ m1 } />
                            <Card.Body>
                                <Card.Title className="mobile-title text-center">
                                    { name }
                                </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Col className="">
                                    <Row className="text-center mb-2">
                                        <div className="text-center mx-auto">
                                            <small className="text-muted font-weight-bold">PKR { price }</small>
                                        </div>
                                    </Row>
                                    <Row className="text-center">
                                        <Button className="text-center mx-auto" size="sm" variant="secondary" disabled={ inCart } onClick={() => { value.addToCart(id) }}>
                                            { inCart ? (<span>In cart</span>) : (<span>Add to cart</span>) }
                                        </Button>
                                    </Row>
                                </Col>
                            </Card.Footer>
                        </Card>
                    )}
                </MobileConsumer>
            </div>
        );
    }
}
