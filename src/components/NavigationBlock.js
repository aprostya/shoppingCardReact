import React from 'react';

export default class NavigationBlock extends React.Component {
    render() {
        return (
            <nav className = 'nav-block'>
                <div className = 'nav-block__content'>
                    <div className = 'nav-links'>
                        <ul className = "nav-links-list">
                            <li><a href='/'>Одежда и аксессуары</a></li>
                            <li><a href="/">Обувь</a></li>
                            <li><a href="/">Украшения</a></li>
                            <li><a href='/'>Красота и здоровье</a></li>
                            <li><a href="/">Товары для дома</a></li>
                            <li><a href="/">Товары для кухни</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
