import React from 'react';

class BlogLinks extends React.Component {
    render() {
        return (
            <ul className = "blog-links">
                <li className = "blog-link-item blog-link-item__star-logo"><a href='/'>Звездный блог</a></li>
                <li className = "blog-link-item blog-link-item__youtube-logo"><a href="/">Смотрите нас на YouTube</a></li>
                <li className = "blog-link-item blog-link-item__efir-logo"><a href="/">Смотрите наш прямой эфир</a></li>
            </ul>
        )
    }
};

export default class UpperHeader extends React.Component {
    render() {
        return (
            <header className = 'header'>
                <div className = 'header__content'>
                    <div className = 'contacts-container'>
                        <a href="tel:8(800)-500-75-55" className = 'contacts-container__phone'>8 (800) 500-75-55</a>
                        <span className = 'contacts-container__phone-region'>Бесплатный звонок по России</span>
                    </div>
                    <BlogLinks/>
                </div>
            </header>
        );
    }
}
