import React from 'react';
import ShoppingCard from './ShoppingCard';
import goods from './goods.json';
import good_1 from '../images/good_1.jpg';
import good_2 from '../images/goods_2.jpg';
import good_3 from '../images/goods_3.jpg';

export default class ShoppingCards extends React.Component {
    render() {
        const shoppingCardsJSX = goods.map((good) => {
            return (
                <ShoppingCard
                    key = {good.id }
                    src = {good.src}
                    price = {good.price}
                />
            );
        });
        return <div className = 'shopping-cards'>{shoppingCardsJSX}</div>;
    }
}