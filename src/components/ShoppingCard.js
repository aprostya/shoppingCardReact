import React from 'react';
import Image from './Image';

const flex = 'flex';
const none = 'none';

export default class ShoppingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: flex, clicks:1, totalPrice: this.props.price};        
        this.showItem = this.showItem.bind(this);
      }
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1, totalPrice: (this.state.clicks + 1)  * this.props.price});
      }
      DecreaseItem = () => {
        if (this.state.clicks == 0 ){
            return;
        }
        this.setState({ clicks: this.state.clicks -1, totalPrice: (this.state.clicks - 1)  * this.props.price});
    }
      showItem() {
        const changeText = this.state.toggle == none ? flex : none;
        this.setState({ toggle: changeText });
      }
    
    removeThis(obj){
        this.props.onRemoveCard(obj);
    }

    render() {
        return (
           <div className="shopping-card">
                <div className="good-info good-info--pic">
                        <Image src= {this.props.src} className="good-picture" alt = {this.props.className}/>
                </div>
                <div className ="good-info">
                    <span className="good-descr good-bold">{this.props.descr}</span>
                    <span className="good-code">{this.props.code}</span>
                    <div className="goods-item">
                        <span className="good-bold good-size">{this.props.size}</span>
                        <span className="good-bold good-color">{this.props.color}</span>
                    </div>
                </div>
                <div className ="good-info">   
                    <div className="count-block">
                        <span className="count count-minus" onClick={this.DecreaseItem}>-</span>
                        <span className="count-goods">{this.state.clicks}</span>
                        <span className="count count-plus" onClick={this.IncrementItem}>+</span>
                    </div>
                </div>
                <div className ="good-info">    
                    <span className="good-descr good-descr--price good-bold">{this.state.totalPrice}</span>
                </div>
                <div className ="good-info"> 
                    <span className="good-descr good-descr--cancel good-bold" onClick={this.removeThis.bind(this, this.props.goodId)}></span>
                </div>
           </div>
        )
    }
}

