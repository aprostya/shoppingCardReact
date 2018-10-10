import React from 'react';

export default class CategoryNav extends React.Component {
    render() {
        return (
            <div className = 'category-block'>
                <div className = 'category-block__content'>
                    <div className = 'category-links'>
                        <ul className = "category-links-list">
                            <li><a href='/'>Женская одежда</a></li>
                            <li><a href="/">Мужская одежда</a></li>
                            <li><a href="/">Аксессуары</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
