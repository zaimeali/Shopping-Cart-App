import React, { Component } from 'react';

// API
import { MobileConsumer } from '../../api/ContextAPI';

// Bootstrap
import { Button, Container, Row, Col } from 'react-bootstrap';

// Css
import './Cart.css';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <MobileConsumer>
            {
                (value) => {
                    if(value){
                        return(
                            <div>
                                <div className="text-center">
                                    <h2 className="Cart-title">Your Cart</h2>
                                </div>
                                <div className="text-center">
                                    { value.cart.length > 0 ? (
                                        <div className="container text-center">
                                            <div className="row">
                                                <div className="col-10 col-lg-2">
                                                    <strong>Name </strong>
                                                </div>
                                                <div className="col-10 col-lg-2">
                                                    <strong>Price </strong>
                                                </div>
                                                <div className="col-10 col-lg-2">
                                                    <strong>Quantity </strong>
                                                </div>
                                                <div className="col-10 col-lg-2">
                                                    <strong>Remove</strong>
                                                </div>
                                                <div className="col-10 col-lg-2">
                                                    <strong>Total</strong>
                                                </div>
                                            </div>
                                            {
                                                value.cart.map(data => {
                                                    return(
                                                        <div className="row">
                                                            <div className="col-10 col-lg-2">
                                                                <span>{ data.name }</span>
                                                            </div>
                                                            <div className="col-10 col-lg-2">
                                                                <span>{ data.price }</span>
                                                            </div>
                                                            <div className="col-10 col-lg-2">
                                                                <span>
                                                                    <input type="button" size="sm" value="-" className="minus" onClick={ () => value.decrement(data.id) } />
                                                                    { data.count }
                                                                    <input type="button" size="sm" value="+" className="plus" onClick={ () => value.increment(data.id) } />
                                                                </span>
                                                            </div>
                                                            <div className="col-10 col-lg-2">
                                                                <Button size="sm" variant="outline-secondary" onClick={ () => value.removeMobile(data.id) }>
                                                                    Remove <span><small>trash</small></span>
                                                                </Button>
                                                            </div>
                                                            <div className="col-10 col-lg-2">
                                                                <span>
                                                                    { data.total }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
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
