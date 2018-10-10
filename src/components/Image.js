import React from 'react';

export default class Image extends React.Component {
    render() {
        return (
            <div className = 'image'>
                <img src = { this.props.src } className = {this.props.className} alt = {this.props.className}/>
            </div>
        );
    }
}

