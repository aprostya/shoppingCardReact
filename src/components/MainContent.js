import React from 'react';
import ShoppingList from './ShoppingList';
export default class MainContent extends React.Component {
    render() {
        return (
           <div className="main-content">
                <ShoppingList/>
            </div>
        )
    }
}

