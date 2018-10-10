import React from 'react';
import ShoppingCard from './ShoppingCard';
// import good_1 from '../images/good_1.jpg';
// import good_2 from '../images/goods_2.jpg';
// import good_3 from '../images/goods_3.jpg';
import ShoppingCards from './ShoppingCards';
export default class ShoppingList extends React.Component {
    render() {
        return (
           <div className="shopping_list-container">
                <div className="card-descr">
                    <h3 className="card-descr__title">Ваша корзина</h3>
                </div> 
                <>
                    <ShoppingCards/>
                    {/* <ShoppingCard src = {good_1} price = {2450} />
                    <ShoppingCard src = {good_2}/>
                    <ShoppingCard src = {good_3}/> */}
                </>
           </div>
        )
    }
}

