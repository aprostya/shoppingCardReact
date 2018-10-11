import React from 'react';
import ShoppingCard from './ShoppingCard';
import ShoppingCards from './ShoppingCards';

export default class ShoppingList extends React.Component {
    render() {
        return (
           <div className="shopping_list-container">
                <div className="card-descr">
                    <h3 className="card-descr__title">Ваша корзина</h3>
                </div> 
                <div className = 'shopping-cards'>
                    <ShoppingCards/>
                </div>
           </div>
        )
    }
}

