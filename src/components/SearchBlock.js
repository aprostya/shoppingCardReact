import React from 'react';
import main_logo from '../images/logo-main.png';
import ShoppingCard from './ShoppingCard'

class SeekBlock extends React.Component {
    render() {
        return (
            <label htmlFor={this.props.id}>
                <input type = "text" placeholder="Поиск по сайту" className={this.props.className} id = {this.props.id}/>
            </label>
        )
    }
}
export default class SearchBlock extends React.Component {
    constructor(props) {
        super(props);
        this.spanObject = { userName: 'Анастасия'};
    }
    render() {
        return (
           <div className="search-block">
             <img className="main-logo" src = {main_logo} alt ={this.props.className}/>
             <div className="seek-block">
                <SeekBlock className="search-string" id = "search"/>
             </div>
             <div className="account-block">
                 <div className="user-info user-info--name">
                    <a className="user-info__user-name" href="/">{this.spanObject.userName}</a>
                 </div>
                 <div className="user-info user-info--user-bucket">
                     <a className="user-info__bucket" href="/" >В корзине: 4 <br/> товара</a>
                 </div>
             </div>
           </div>
        );
    }
}
