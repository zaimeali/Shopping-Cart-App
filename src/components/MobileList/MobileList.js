import React, { Component } from 'react';

// API
import { MobileConsumer } from '../../api/ContextAPI';

// Bootstrap
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import Mobile from '../Mobile/Mobile';

export default class MobileList extends Component {

    render(){
        return (
            <div className="container">
                <div className="row">
                    <MobileConsumer>
                        {(value) => {
                            // return console.info(JSON.stringify(value))
                            // console.log(Object.keys(value))
                            // console.log(value["mobiles"])
                            if(value){
                                console.log(JSON.stringify(value));
                                console.log(value.mobiles)
                                return value.mobiles.map((product) => {
                                    return <Mobile key={product.id} product={product} />
                                })
                            }
                            // return value.mobiles.map((product) => {
                            //     // return <Mobile key={product.id} product={product} />
                            // })
                        }}
                    </MobileConsumer>
                </div>
            </div>
        );
    }

}
