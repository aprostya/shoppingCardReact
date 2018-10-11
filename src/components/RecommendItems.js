import React from 'react';

export default class RecommendItems extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="recommend-item">
            <div className="recommend-item__image-container">
                <img className="recommend-item-img" alt = {this.props.className} src = {this.props.src}/>
            </div>   
             <h4 className ="recommend-item-descr">{this.props.descr}</h4>
             <p className ="recommend-item-price">{this.props.price}</p>
        </div>
        );
    }
}
