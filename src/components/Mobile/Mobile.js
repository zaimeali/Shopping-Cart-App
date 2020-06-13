import React, { Component } from 'react';

// Bootstrap
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Routes
// import { BrowserRouter as Router, Link } from 'react-router-dom';

// API
import { MobileConsumer } from '../../api/ContextAPI';

export default class Mobile extends Component {
    render() {

        const { id, name, price, image, inCart } = this.props.product   ;

        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3">
                <MobileConsumer>
                    {(value) => (
                        <Card onClick={()=>{value.handleDetails(id)}} style={{ width: '18rem', height: '18rem' }}>
                            <Card.Img variant="top" src={ "../../assets/" + image } />
                            <Card.Body>
                                <Card.Title>
                                    { name }
                                </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col>
                                        <Button size="sm" variant="secondary" disabled={ inCart } onClick={() => { value.addToCart(id) }}>
                                            { inCart ? (<span>In cart</span>) : (<span>Add to cart</span>) }
                                        </Button>
                                    </Col>
                                    <Col>
                                        <small className="text-muted text-right">PKR { price }</small>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    )}
                </MobileConsumer>
            </div>
        );
    }
}
