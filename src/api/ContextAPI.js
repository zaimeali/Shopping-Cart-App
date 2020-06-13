import React, { Component, createContext } from 'react';

// Data
import { data } from '../data/MobileData';

const MobileContext = createContext({});

// console.log(data);


class MobileProvider extends Component {
    
    
    state = {
        mobiles: data
    };
    
    render(){
        console.log(this.state.mobiles)
        return (
            <MobileContext.Provider value={{ 
                state: this.state 
            }}>
                { this.props.children }
            </MobileContext.Provider>
        );
    }
}


export const MobileConsumer = MobileContext.Consumer;

export default MobileProvider;
