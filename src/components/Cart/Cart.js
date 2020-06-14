import React, { Component } from 'react';

// API
import { MobileConsumer } from '../../api/ContextAPI';

// Bootstrap
import { Button, Container, Row, Col } from 'react-bootstrap';

// Image
// import { trash } from '../../assets/logo/trash.png'

// Css
import './Cart.css';

export default class Cart extends Component {


    render() {
        let nf = new Intl.NumberFormat(); 
        return (
        <div className="col-md-12 col-lg-12 col-sm-12 mt-4">
            <MobileConsumer>
                {
                    (value) => {
                        if(value){
                            return(
                                <div className="col-md-12 col-lg-12 col-sm-12">
                                    <div className="text-center">
                                        <h2 className="Cart-title">Your Cart</h2>
                                    </div>
                                    <div className="text-center">
                                        { value.cart.length > 0 ? (
                                            <div className="container text-center">
                                                <div className="row mx-auto Cart-title-header">
                                                    <div className="col-md-2 offset-md-1 offset-lg-1 col-lg-2">
                                                        <strong>Name </strong>
                                                    </div>
                                                    <div className="col-md-2 col-lg-2">
                                                        <strong>Price </strong>
                                                    </div>
                                                    <div className="col-md-2 col-lg-2">
                                                        <strong>Quantity </strong>
                                                    </div>
                                                    <div className="col-md-2 col-lg-2">
                                                        <strong>Remove</strong>
                                                    </div>
                                                    <div className="col-md-2 col-lg-2">
                                                        <strong>Total</strong>
                                                    </div>
                                                </div>
                                                {
                                                    value.cart.map(data => {
                                                        return(
                                                            <div className="row mx-auto card-show py-2">
                                                                <div className="col-md-2 offset-md-1 offset-lg-1 col-lg-2">
                                                                    <span>{ data.name }</span>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2 cart-price-style">
                                                                    PKR <span className="cart-price">
                                                                            { nf.format(data.price) }
                                                                        </span>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2">
                                                                    <span>
                                                                        <input type="button" size="sm" value="-" className="minus btn-qty" onClick={ () => value.decrement(data.id) } />
                                                                        { data.count }
                                                                        <input type="button" size="sm" value="+" className="plus btn-qty" onClick={ () => value.increment(data.id) } />
                                                                    </span>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2">
                                                                    <Button className="removeBtn" size="sm" variant="outline-secondary" onClick={ () => value.removeMobile(data.id) }>
                                                                        Remove <span><img className="trash-delete" alt="Delete" src={ require(`../../assets/logo/trash.png`) } /></span>
                                                                    </Button>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2">
                                                                    <span>
                                                                        { nf.format(data.total) }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                                <hr />
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <strong>Total: </strong>{ nf.format(value.cartTotal) }
                                                        </Col>
                                                    </Row>
                                                </Container>
                                                <hr />
                                            </div>
                                        ) : (
                                            <h6 className="text-muted">Add Something to Show Here</h6>
                                        )  }
                                    </div>
                                </div>
                            );
                        }
                    }
                }
            </MobileConsumer>
        </div>
    );
  }
}
