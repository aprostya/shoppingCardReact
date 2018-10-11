import React from 'react';
import ShoppingList from './ShoppingList';
import BucketCount from './BucketCount';
import RecommendItems from './RecommendItems';
import recommend_1 from '../images/recommend_1.jpg';
import recommend_2 from '../images/recommend_2.jpg';
import recommend_3 from '../images/recommend_3.jpg';
import recommend_4 from '../images/recommend_4.jpg';
export default class MainContent extends React.Component {
    render() {
        return (
           <div className="main-content">
                <ShoppingList/>
                <div className="order-block">
                    <BucketCount/>
                </div>
                <div className = 'recommend-block-title'>
                    <h3>Добавьте к вашему заказу</h3>
                </div>     
                <div className = 'recommend-block'> 
                    <div className="recommend-items">
                        <RecommendItems src = {recommend_1} descr = "Солнечные очки зеленого цвета в стиле ретро" price = "2450 руб"/>
                        <RecommendItems src = {recommend_2} descr = "Шляпа" price = "800 руб"/>
                        <RecommendItems src = {recommend_3} descr = "Платье-миди с расклешенной юбкой" price = "800 руб"/>
                        <RecommendItems src = {recommend_4} descr = "Шляпа" price = "800 руб"/>
                    </div>
                </div>    
            </div>
        )
    }
}

