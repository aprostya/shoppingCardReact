import { sample } from 'rxjs/internal/operators';
import React from 'react';
import ShoppingCard from './ShoppingCard';
import goods from './goods.json';

export default class ShoppingCards extends React.Component {
    constructor (props){
        super(props);
        this.shoppingCardsJSX = goods.map((good) => {
            return (
                <ShoppingCard
                    key = {good.id }
                    goodId = {good.id}
                    src = {good.src}
                    descr = {good.descr}
                    code = {good.code}
                    size = {good.size}
                    color = {good.color}
                    price = {good.price}
                    onRemoveCard={this.removeCard.bind(this)}
                />
            );
        });
    }
    onUpdateBucket() {
        return (this.shoppingCardsJSX.length);
    }
    removeCard(obj){
        const list = this.shoppingCardsJSX ;
        for (let i = 0; i < list.length; i++){
            if (list[i].key === obj){                
                list.splice(i, 1);
                break;
            }
        }
        this.forceUpdate();     
    }
    render() {
        return this.shoppingCardsJSX;
    }
}