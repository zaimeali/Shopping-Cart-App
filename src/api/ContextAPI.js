import React, { Component, createContext } from 'react';

// Data
import { data } from '../data/MobileData';

const MobileContext = createContext();

// console.log(data);


class MobileProvider extends Component {
    
    
    state = {
        mobiles: data,
        cart: []
    };

    getItem = (id) => {
        const mobile = this.state.mobiles.find(item => item.id === id);
        return mobile;
    }

    addToCart = (id) => {
        let tempProduct = [...this.state.mobiles];
        const index = tempProduct.indexOf(this.getItem(id));
        const mobile = tempProduct[index];
        mobile.inCart = true;
        mobile.count = 1;
        const price = mobile.price;
        mobile.total = price;
        this.setState(() => {
            return { mobiles: tempProduct, cart: [...this.state.cart, mobile] }
        });
    }
    
    render(){
        // console.log(this.state.mobiles)
        return (
            <MobileContext.Provider value={{ 
                ...this.state,
                addToCart: this.addToCart
            }}>
                { this.props.children }
            </MobileContext.Provider>
        );
    }
}


export const MobileConsumer = MobileContext.Consumer;

export default MobileProvider;
