import React, { Component, createContext } from 'react';

// Data
import { data } from '../data/MobileData';

const MobileContext = createContext();

// console.log(data);


class MobileProvider extends Component {
    
    
    state = {
        mobiles: data,
        cart: [],
        cartTotal: 0
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
        }, () => { this.makeTotal() });
    }
    
    removeMobile = (id) => {
        let tempProduct = [...this.state.mobiles];
        let tempCart = [ ...this.state.cart ];
        tempCart = tempCart.filter((item) => item.id !== id );
        const index = tempProduct.indexOf(this.getItem(id));
        let removeMob = tempProduct[index];

        removeMob.inCart = false;
        removeMob.total = 0;
        removeMob.count = 0;

        this.setState(() => {
            return { mobiles: [ ...tempProduct ], cart: [ ...tempCart ] }
        }, () => { this.makeTotal() });
    }

    increment = (id) => {
        let tempProduct = [...this.state.cart];
        const index = tempProduct.indexOf(this.state.mobiles.find(item => item.id === id));
        const mobile = tempProduct[index];
        mobile.inCart = true;
        mobile.count = mobile.count + 1;
        const price = mobile.price;
        mobile.total = price * mobile.count;

        this.setState(() => {
            return { cart: [ ...tempProduct ] }
        }, () => {
            this.makeTotal();
        });
    }

    decrement = (id) => {
        let tempProduct = [...this.state.cart];
        const index = tempProduct.indexOf(this.state.mobiles.find(item => item.id === id));
        const mobile = tempProduct[index];
        mobile.inCart = true;
        mobile.count = mobile.count - 1;
        if(mobile.count < 0){
            mobile.count = 0;
        }
        const price = mobile.price;
        mobile.total = price * mobile.count;

        this.setState(() => {
            return { cart: [ ...tempProduct ] }
        }, () => {
            this.makeTotal();
        });
    }

    makeTotal = () => {
        let subtotal = 0;
        this.state.cart.map((item) => {
            return subtotal += item.total
        });
        this.setState(() => {
            return{
                cartTotal: subtotal
            }
        });
    }

    render(){
        // console.log(this.state.mobiles)
        return (
            <MobileContext.Provider value={{ 
                ...this.state,
                addToCart: this.addToCart,
                decrement: this.decrement,
                increment: this.increment,
                makeTotal: this.makeTotal,
                removeMobile: this.removeMobile
            }}>
                { this.props.children }
            </MobileContext.Provider>
        );
    }
}


export const MobileConsumer = MobileContext.Consumer;

export default MobileProvider;
