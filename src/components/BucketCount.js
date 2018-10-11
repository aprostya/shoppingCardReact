import React from 'react';
import Image from './Image';


export default  class BucketCount extends React.Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
           <div className="order-section">
                <div className="promocode-section">
                       <p className="promocode-section__text">Есть промокод?</p>
                       <div className="promocode-section__input-block">
                            <input type="text" className="promocode-input" placeholder="Введите промокод"/>
                            <button type="button" className="promocode-input__btn">Применить</button>
                       </div>
                </div>       
                <div className="bucket-section">
                    <div className="bucket-sum-section">
                        <p className="bucket-sum-text">Сумма заказа:</p>
                        <p className="bucket-sum">9800 руб.</p>
                    </div>
                    <div className="promocode-sale-section">
                        <p className="promocode-sum-text">Промокод</p>
                        <p className="bucket-sum">- 1800 руб.</p>
                    </div>
                    <div className="order-all">
                        <p className="bucket-sum-text">Всего</p>
                        <p className="bucket-sum">8000 руб.</p>
                    </div>
                    <div className="button-order">
                        <button type="submit" className="button-order__btn">Оформить заказ</button>
                    </div>
                </div>       
            </div>   
        )
    }
};


