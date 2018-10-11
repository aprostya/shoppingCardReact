import React from 'react';
import ShoppingCard from './ShoppingCard';
import ShoppingCards from './ShoppingCards';

export default class ShoppingList extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
           <div className="shopping_list-container">
                <div className="card-descr">
                    <h3 className="card-descr__title">Ваша корзина</h3>
                </div> 
                <div className = 'shopping-cards'>
                    <div className="shopping-cards-sections">
                        <ul className="shopping-cards-list">
                            <li className="shopping-item">Товар</li>
                            <li className="shopping-item">Описание</li>
                            <li className="shopping-item shopping-item--center">Количество</li>
                            <li className="shopping-item shopping-item--price">Цена</li>
                            <li className="shopping-item shopping-item--center">Удалить</li>
                        </ul>
                    </div>
                    <ShoppingCards/>
                </div>
           </div>
        )
    }
}

